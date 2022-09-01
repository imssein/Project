package com.project.vegan.domain.member.service;

import com.project.vegan.domain.member.entity.Member;
import com.project.vegan.domain.member.exception.MemberDuplicateException;
import com.project.vegan.domain.member.exception.PasswordMismatchException;
import com.project.vegan.domain.member.repository.MemberRepository;
import com.project.vegan.domain.member.request.MemberJoinRequest;
import com.project.vegan.domain.member.request.MemberLoginRequest;
import com.project.vegan.domain.member.response.MemberDto;
import com.project.vegan.domain.member.response.MemberJoinResponse;
import com.project.vegan.domain.member.response.MemberLoginResponse;
import com.project.vegan.global.jwt.service.JwtProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberService {
    private final MemberRepository memberRepository;
    private final JwtProvider jwtProvider;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public MemberLoginResponse login(MemberLoginRequest memberLoginRequest){
        Member member = memberRepository.findByEmail(memberLoginRequest.getEmail());

        checkPassword(memberLoginRequest.getPassword(), member.getPassword());

        String accessToken = jwtProvider.generateAccessToken(member);

        return new MemberLoginResponse(accessToken);
    }

    public MemberJoinResponse join(MemberJoinRequest memberJoinRequest){
        String encodePw = bCryptPasswordEncoder.encode(memberJoinRequest.getPassword());

        Member member = Member.builder()
                .email(memberJoinRequest.getEmail())
                .password(encodePw)
                .name(memberJoinRequest.getName())
                .nickname(memberJoinRequest.getNickname())
                .role("ROLE_USER")
                .vegetarianType(memberJoinRequest.getVegetarianType())
                .build();

        isValidateDuplicateMember(member);

        Member saveMember = memberRepository.save(member);
        MemberDto memberDto = new MemberDto(saveMember);

        return new MemberJoinResponse(memberDto);
    }

    private void isValidateDuplicateMember(Member member){
        Member findMember = memberRepository.findByEmail(member.getEmail());

        if(findMember != null){
            throw new MemberDuplicateException();
        }
    }

    private void checkPassword(String loginPassword, String password) {
        if( !bCryptPasswordEncoder.matches(loginPassword, password) ){
            throw new PasswordMismatchException();
        }
    }
}
