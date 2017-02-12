package com.davinci.shop.sys.user.model;

/**
 * Created by YoungMan on 2017/2/12.
 */
public class SysUser {
    private int id;
    private String  account;
    private String passwd;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getPasswd() {
        return passwd;
    }

    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }
}
