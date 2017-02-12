package com.davinci.shop.sys.menu.mapper;


import com.davinci.core.mybatis.MyBatisInterface;

import java.util.List;
import java.util.Map;

/**
 * Created by YoungMan on 2017/2/12.
 */
@MyBatisInterface
public interface SysMenuMapper {
    List<Map<String, Object>> getMenusByParentId(Integer parentId);
}
