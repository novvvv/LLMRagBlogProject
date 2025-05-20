package com.nov.BlogRagProject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/api")
public class HomeController {
//    @GetMapping("/home")
//    public String home() {
//        return "index";
//    }

    @ResponseBody
    @GetMapping("/hello")
    public String helloWorld() {
        return "hello!";
    }
}
