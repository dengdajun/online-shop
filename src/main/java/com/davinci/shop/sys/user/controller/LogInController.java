package com.davinci.shop.sys.user.controller;

import com.davinci.shop.sys.user.model.SysUser;
import com.davinci.shop.sys.user.service.SysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import java.util.Map;

/**
 * Created by YoungMan on 2017/2/12.
 */
@Controller
@RequestMapping("/sys")
public class LogInController {
    @Autowired
    private SysUserService service;

    @RequestMapping(value ="/login")
    public String  login(){
        return "login";
    }
    @RequestMapping(value="/doLogin",method = RequestMethod.POST)
    public String doLogin(SysUser user){
        Map<String,Object> entity=service.logIn(user.getAccount());
        return "index";
    }
}
