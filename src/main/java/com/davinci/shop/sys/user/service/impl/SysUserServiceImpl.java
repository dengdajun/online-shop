package com.davinci.shop.sys.user.service.impl;

import com.davinci.common.utils.EncryptDecrypt;
import com.davinci.shop.sys.user.mapper.SysUserMapper;
import com.davinci.shop.sys.user.model.SysUser;
import com.davinci.shop.sys.user.service.SysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 * Created by dengdajun on 2017/2/12.
 */
@Service
public class SysUserServiceImpl implements SysUserService {
    @Autowired
    private SysUserMapper mapper;
    @Override
    public SysUser logIn(SysUser user) throws Exception {
        SysUser entity=mapper.getUserByAccount(user.getAccount());
        if(entity==null){
            throw new Exception("没有此账号");
        }
//        if(!entity.getPasswd().equals(EncryptDecrypt.MD5(user.getPasswd()))){
//            throw new Exception("密码错误");
//        }
         return entity;
    }
}
