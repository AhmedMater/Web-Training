package com.app.auth;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {
    @RequestMapping({ "/403/**", "/404/**" })
    public String index() {
        return "forward:/index.html";
    }
}
