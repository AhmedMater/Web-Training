package com.ism.model.security;

import java.io.Serializable;

public class AuthUserVTO implements Serializable {
    private int userID;
    private String fullName;
    private String token;

    public AuthUserVTO() {
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
