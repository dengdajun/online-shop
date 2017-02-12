package com.davinci.shop.sys.user.service.impl;

import com.davinci.shop.sys.user.mapper.SysUserMapper;
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
    public Map<String,Object> logIn(String account) {
       return  mapper.getUserByAccount(account);
    }
}
