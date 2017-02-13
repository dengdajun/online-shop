package com.davinci.shop.sys.user.controller;

import com.davinci.core.exception.RedirectnException;
import com.davinci.shop.sys.user.model.SysUser;
import com.davinci.shop.sys.user.service.SysUserService;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

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
    public String doLogin(SysUser user,HttpServletRequest request) throws RedirectnException {
        SysUser logInUser= service.logIn(user);
        Subject subject = SecurityUtils.getSubject();
//        if (!subject.isAuthenticated()) {
//            request.setAttribute("errorMsg","未授权");
//            return "/login";
//        }
        request.getSession().setAttribute("user", logInUser );//登录成功，向session存入一个登录标记
        request.removeAttribute("errorMsg");
        return "index";
    }
}
