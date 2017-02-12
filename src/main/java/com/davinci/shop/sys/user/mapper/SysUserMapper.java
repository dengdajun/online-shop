package com.davinci.shop.sys.user.mapper;

import com.davinci.core.mybatis.MyBatisInterface;

import java.util.Map;

/**
 * Created by YoungMan on 2017/2/12.
 */
@MyBatisInterface
public interface SysUserMapper {
     Map<String,Object> getUserByAccount(String account);
}
