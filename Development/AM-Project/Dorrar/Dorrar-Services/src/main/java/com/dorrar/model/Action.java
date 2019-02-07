package com.dorrar.model;

public class Action {
    private int id ;
    private String labelEN;


    public Action(int id, String labelEn) {
        this.id = id;
        this.labelEN = labelEn;
    }

    public Action() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLabelEN() {
        return labelEN;
    }

    public void setLabelEN(String labelEN) {
        this.labelEN = labelEN;
    }
}
