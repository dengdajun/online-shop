package com.davinci.shop.sys.menu.controller;

import com.davinci.shop.sys.menu.service.SysMenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

/**
 * Created by YoungMan on 2017/2/13.
 */
@Controller
@RequestMapping("/protal")
public class ProtalController {
    @Autowired
    private SysMenuService service;

    @RequestMapping("/list")
    @ResponseBody
    public List<Map<String,Object>> menuList() throws Exception {
        if(true){
            throw new Exception("tes");
        }
        return  service.getMenusByParentId(null);
    }
}
