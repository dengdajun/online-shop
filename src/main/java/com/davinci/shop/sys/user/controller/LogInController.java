package com.davinci.shop.sys.user.controller;

import com.davinci.shop.sys.user.model.SysUser;
import com.davinci.shop.sys.user.service.SysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
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

    @RequestMapping(value="/doLogin")
    public String doLogin(SysUser user,HttpServletRequest request) throws Exception {
        request.getSession().setAttribute("user",  service.logIn(user));//登录成功，向session存入一个登录标记
        return "index";
    }
}
