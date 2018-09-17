package com.citi.robopoc.api;

import com.citi.robopoc.model.UserLogin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class RestApiController {

    @RequestMapping(value = "/api/index", method = RequestMethod.GET)
    public String index() {
        return "{\"sucess\":\"true\"}";
    }

    @RequestMapping(value = "/api/login", method = RequestMethod.POST)
    public String login(@RequestBody UserLogin login) {
        System.out.println("Login Map " + login);
        if(login.getUserName().equalsIgnoreCase("saravanan")){
            return "{\"success\":\"true\"}";
        }else{
            return "{\"success\":\"false\"}";
        }

    }
}
