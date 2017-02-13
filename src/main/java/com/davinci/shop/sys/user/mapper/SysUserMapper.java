package com.davinci.shop.sys.user.mapper;

import com.davinci.core.mybatis.MyBatisInterface;
import com.davinci.shop.sys.user.model.SysUser;

import java.util.Map;

/**
 * Created by YoungMan on 2017/2/12.
 */
@MyBatisInterface
public interface SysUserMapper {
     SysUser getUserByAccount(String account);
}
