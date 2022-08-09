package com.project.vegan.global.jwt.service;

import com.project.vegan.domain.member.entity.Member;
import com.project.vegan.global.jwt.exception.TokenHasExpiredException;
import com.project.vegan.global.jwt.exception.TokenIsInvalidException;
import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Date;

@Service
@Slf4j
public class JwtProvider {
    @Value("${JWT.SECRET.KEY}")
    private String SECRET_KEY;
    @Value("${JWT.ACCESS.TOKEN.VALIDITY}")
    private Long JWT_ACCESS_TOKEN_VALIDITY;

    @PostConstruct
    protected void init(){
        SECRET_KEY = Base64.getEncoder().encodeToString(SECRET_KEY.getBytes(StandardCharsets.UTF_8));
    }

    public String generateAccessToken(Member member){
        Date now = new Date();
        Date expireDate = new Date(now.getTime() + JWT_ACCESS_TOKEN_VALIDITY);

        return Jwts.builder()
                .setSubject(member.getEmail())
                .setIssuedAt(now)
                .setExpiration(expireDate)
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }

    public String getEmailFromAccessToken(String accessToken){
        Claims claims = Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(accessToken)
                .getBody();

        return claims.getSubject();
    }

    public boolean isValidateToken(String accessToken) throws TokenIsInvalidException {
        try {
            Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(accessToken);
            return true;
        } catch (SignatureException ex) {
            log.error("Invalid JWT signature");
            throw new TokenIsInvalidException();
        } catch (MalformedJwtException ex) {
            log.error("Invalid JWT token");
            throw new TokenIsInvalidException();
        } catch (ExpiredJwtException ex) {
            log.error("Expired JWT token");
            throw new TokenHasExpiredException();
        } catch (UnsupportedJwtException ex) {
            log.error("Unsupported JWT token");
            throw new TokenIsInvalidException();
        } catch (IllegalArgumentException ex) {
            log.error("JWT claims string is empty.");
            throw new TokenIsInvalidException();
        }
    }
}
