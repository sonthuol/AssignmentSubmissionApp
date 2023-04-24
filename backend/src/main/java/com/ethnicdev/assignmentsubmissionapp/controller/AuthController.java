package com.ethnicdev.assignmentsubmissionapp.controller;

import com.ethnicdev.assignmentsubmissionapp.dto.AuthCredentialsRequest;
import com.ethnicdev.assignmentsubmissionapp.entity.User;
import com.ethnicdev.assignmentsubmissionapp.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthCredentialsRequest authCredentialsRequest){
        try{
            Authentication authentication = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(
                            authCredentialsRequest.getUsername(), authCredentialsRequest.getPassword()
                    ));
            User user = (User) authentication.getPrincipal();
            user.setPassword(null);
            return ResponseEntity.ok().header(
                    HttpHeaders.AUTHORIZATION,
                    jwtUtil.generateToken(user)
            ).body(user);
        }catch (BadCredentialsException exception){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();

        }
    }
}
