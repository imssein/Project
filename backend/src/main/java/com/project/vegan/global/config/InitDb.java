package com.project.vegan.global.config;

import com.google.gson.Gson;
import com.project.vegan.domain.member.repository.MemberRepository;
import com.project.vegan.domain.store.entity.Store;
import com.project.vegan.domain.store.repository.StoreRepository;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.core.io.ClassPathResource;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
@RequiredArgsConstructor
public class InitDb {
    private final InitService initService;

    @PostConstruct
    public void init() throws IOException, ParseException {
        initService.dbInit();
    }

    @Component
    @Transactional
    @RequiredArgsConstructor
    public static class InitService{
        private final StoreRepository storeRepository;
        private final MemberRepository memberRepository;
        private final BCryptPasswordEncoder bCryptPasswordEncoder;

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

                store.initStore(getListFromString(vegetarianType), getListFromString(menu), Double.valueOf(split0[1]), Double.valueOf(split1[1].substring(0, split1[1].length() - 2)));

                storeRepository.save(store);
            }
        }

        private List<String> getListFromString(String stringList){
            List<String> list = new ArrayList<>();

            Arrays.stream(stringList.split(",")).forEach(s -> list.add(s.trim()));

            return list;
        }
    }
}
