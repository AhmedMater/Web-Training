package com.dorrar.model.enums;

public enum Pages {
    VIEW_COURSE(1);

    private int id;

    Pages(int id){
        this.id = id;
    }

    public int getID() {
        return id;
    }
}
