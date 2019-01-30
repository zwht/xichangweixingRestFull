package org.poem.login.vo;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;

@Api("登陆信息")
public class LoginVO {

    @ApiModelProperty("登陆名")
    String userName;

    @ApiModelProperty("密码")
    String password;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
