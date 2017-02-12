package com.davinci.shop.sys.menu.Controller;

import com.davinci.shop.sys.menu.service.SysMenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

/**
 * Created by YoungMan on 2017/2/12.
 */
@Controller
@RequestMapping("/sys/menu")
public class SysMenuContoller {
    @Autowired
    private SysMenuService service;
    @RequestMapping("/list")
    @ResponseBody
    public List<Map<String,Object>> menuList(){
        return  service.getMenusByParentId(null);
    }
}
