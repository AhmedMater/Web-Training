package com.dorrar.data;

public class CorRefType {
    int id;
    String labelEN;

    public CorRefType() {
    }

    public CorRefType(int id, String labelEN) {
        this.id = id;
        this.labelEN = labelEN;
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


