package com.davinci.shop.sys.menu.service;

import java.util.List;
import java.util.Map;

/**
 * Created by YoungMan on 2017/2/12.
 */
public interface SysMenuService {
//    当parentid为空的时候加载所有
    List<Map<String,Object>> getMenusByParentId(Integer parentId);
}
