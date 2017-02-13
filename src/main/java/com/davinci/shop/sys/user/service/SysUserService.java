package com.davinci.shop.sys.user.service;


import com.davinci.shop.sys.user.model.SysUser;

/**
 * Created by YoungMan on 2017/2/12.
 */
public interface SysUserService {
     SysUser logIn(SysUser user) throws Exception;
}
