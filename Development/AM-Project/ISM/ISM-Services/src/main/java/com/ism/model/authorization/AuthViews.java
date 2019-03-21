package com.ism.model.authorization;

public enum AuthViews {
    VIEW_COURSE(1), CREATE_COURSE(2), CREATE_TRANSLATION(3);
    private int id;

    AuthViews(int id){
        this.id = id;
    }

    int getID(){ return id; }
}
