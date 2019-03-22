package com.ism.model.authorization;

public enum AuthActions {
    ENROLL_COURSE(1), SUBMIT_COURSE(2), SUBMIT_TRANSLATION(3), EDIT_TRANSLATION(4);

    private int id;

    AuthActions(int id){
        this.id = id;
    }

    public int getID(){ return id; }
}
