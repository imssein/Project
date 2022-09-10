package com.project.vegan.global.config;

import com.google.gson.Gson;
import com.project.vegan.domain.common.service.UploadFileService;
import com.project.vegan.domain.member.repository.MemberRepository;
import com.project.vegan.domain.store.entity.Menu;
import com.project.vegan.domain.store.entity.Store;
import com.project.vegan.domain.store.entity.VegetarianType;
import com.project.vegan.domain.store.repository.MenuRepository;
import com.project.vegan.domain.store.repository.StoreRepository;
import com.project.vegan.domain.store.repository.VegetarianTypeRepository;
import lombok.RequiredArgsConstructor;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItem;
import org.apache.commons.io.IOUtils;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.core.io.ClassPathResource;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import javax.annotation.PostConstruct;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import static com.project.vegan.domain.common.service.UploadFileTypeConstants.STORE_TYPE;

@Component
@RequiredArgsConstructor
public class InitDb {
    private final InitService initService;

    @PostConstruct
    public void init() throws IOException, ParseException {
//        initService.dbInit();
    }

    @Component
    @Transactional
    @RequiredArgsConstructor
    public static class InitService{
        private final StoreRepository storeRepository;
        private final MemberRepository memberRepository;
        private final BCryptPasswordEncoder bCryptPasswordEncoder;
        private final VegetarianTypeRepository vegetarianTypeRepository;
        private final MenuRepository menuRepository;
        private final UploadFileService uploadFileService;

        public void dbInit() throws IOException, ParseException {
            ClassPathResource r1 = new ClassPathResource("data/data.json");
            Path p1 = Paths.get(r1.getURI());
            JSONArray jsonStoreList = (JSONArray) new JSONParser().parse(new FileReader(p1.toString()));

            ClassPathResource r2 = new ClassPathResource("data/location.json");
            Path p2 = Paths.get(r2.getURI());
            JSONArray jsonLocationList = (JSONArray) new JSONParser().parse(new FileReader(p2.toString()));

            for (Object o : jsonStoreList) {
                Store store = new Gson().fromJson(o.toString(), Store.class);
                JSONObject jsonObject = (JSONObject) o;

                JSONObject jo = null;

                for(Object obj : jsonLocationList){
                    JSONObject object = (JSONObject) obj;

                    if(object.get("id").toString().equals(jsonObject.get("id").toString())){
                        jo = object;
                        break;
                    }
                }
                if(jo == null){
                    System.out.print(jsonObject.get("id") + ", ");
                    continue;
                }

                String[] coords = List.of(jo.get("coords")).get(0).toString().split(",");
                String[] split0 = coords[0].split(":");
                String[] split1 = coords[1].split(":");

                String vegetarianType = jsonObject.get("vegetarianType").toString();
                String menu = jsonObject.get("menu").toString();

                List<VegetarianType> vegetarianTypes = getListFromString(vegetarianType).stream().map(v -> new VegetarianType(v, store)).collect(Collectors.toList());
                List<Menu> menus = getListFromString(menu).stream().map(m -> new Menu(m, store)).collect(Collectors.toList());

                store.initStore(Double.valueOf(split0[1]), Double.valueOf(split1[1].substring(0, split1[1].length() - 2)));

                Store save = storeRepository.save(store);

                vegetarianTypes.forEach(v -> vegetarianTypeRepository.save(new VegetarianType(v.getValue(), save)));
                menus.forEach(m -> menuRepository.save(new Menu(m.getValue(), save)));

                saveStoreImageFile(save);
            }
        }

        private void saveStoreImageFile(Store save) throws IOException {
            ClassPathResource fileResource = new ClassPathResource("data/img");
            Path filePath = Paths.get(fileResource.getURI());
            File fileDir = new File(filePath.toString());
            FileFilter filter = f -> {
                if(f.getName().endsWith("jpg") || f.getName().endsWith("jpeg") || f.getName().endsWith("png")){
                    return true;
                }
                return false;
            };

            List<File> fileList = Arrays.stream(fileDir.listFiles(filter))
                    .filter(f -> f.getName().startsWith(save.getId().toString()))
                    .collect(Collectors.toList());

            String fileName = "";
            if(fileList.size() == 1){
                fileName = fileList.get(0).toString().split("\\\\")[11];
            }else if(fileList.size() > 1){
                for(File file : fileList){
                    if(file.toString().split("\\\\")[11].equals(save.getId().toString() + ".jpeg") ||
                            file.toString().split("\\\\")[11].equals(save.getId().toString() + ".png") ||
                            file.toString().split("\\\\")[11].equals(save.getId().toString() + ".jpg")){
                        fileName = file.toString().split("\\\\")[11];
                        break;
                    }
                }
            }else if(fileList.size() == 0){
                return;
            }

            if(fileName.isBlank()){
                return;
            }

            ClassPathResource resource = new ClassPathResource("data/img/" + fileName);
            Path path = Paths.get(resource.getURI());
            File file = new File(path.toString());
            FileItem fileItem = new DiskFileItem("originFile", Files.probeContentType(file.toPath()), false, file.getName(), (int) file.length(), file.getParentFile());

            FileInputStream input = new FileInputStream(file);
            OutputStream output = fileItem.getOutputStream();
            IOUtils.copy(input, output);

            MultipartFile multipartFile = new CommonsMultipartFile(fileItem);
            uploadFileService.saveFile(multipartFile, STORE_TYPE, save.getId());
        }

        private List<String> getListFromString(String stringList){
            List<String> list = new ArrayList<>();

            Arrays.stream(stringList.split(",")).forEach(s -> list.add(s.trim()));

            return list;
        }
    }
}
