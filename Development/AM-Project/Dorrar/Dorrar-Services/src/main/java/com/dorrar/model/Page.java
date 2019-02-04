package com.dorrar.model;

import java.util.List;

public class Page {

    private int id ;
    //TODO: change En to EN
    private String labelEN;
    private List<Action> actionList;

    public Page(int id, String labelEn) {
        this.id = id;
        this.labelEN = labelEn;

    }

    public Page() {
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

    public List<Action> getActionList() {
        return actionList;
    }

    public void setActionList(List<Action> actionList) {
        this.actionList = actionList;
    }
}
