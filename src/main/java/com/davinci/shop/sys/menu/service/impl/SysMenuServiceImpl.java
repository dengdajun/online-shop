package com.davinci.shop.sys.menu.service.impl;

import com.davinci.shop.sys.menu.mapper.SysMenuMapper;
import com.davinci.shop.sys.menu.service.SysMenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * Created by YoungMan on 2017/2/12.
 */
@Service
public class SysMenuServiceImpl implements SysMenuService {
    @Autowired
    private SysMenuMapper mapper;
    @Override
    public List<Map<String, Object>> getMenusByParentId(Integer parentId) {
        return mapper.getMenusByParentId(parentId);
    }
}
