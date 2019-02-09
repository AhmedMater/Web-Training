package com.dorrar.model;

//TODO: Aya - Move to model/security/
public class AuthUser {
    private int userId;
    private String fullName;
    private String token;

    public AuthUser() {
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
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
