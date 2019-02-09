package com.dorrar.model;

import java.io.Serializable;

//TODO: Aya - Move to model/security/
public class LoginUserDto implements Serializable {

    private String userName;
    private String password;

    public LoginUserDto() {
    }

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

    @Override
    public String toString() {
        return "LoginUserDto{" +
                "userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
