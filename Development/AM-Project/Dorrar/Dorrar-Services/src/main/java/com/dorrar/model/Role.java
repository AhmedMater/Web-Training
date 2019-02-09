package com.dorrar.model;

import java.util.List;

//TODO: Fathy - Move to model/user/auth/
public class Role {
    //TODO: Fathy - Rename to id
    private int roleid ;
    private String labelEN;
    private List<Action> actionList;
    private List<Page> pageList;

    public Role(int roleid, String labelEN, List<Action> actionList, List<Page> pageList) {
        this.roleid = roleid;
        this.labelEN = labelEN;
        this.actionList = actionList;
        this.pageList = pageList;
    }

    public Role() {
        }

    public int getRoleid() {
        return roleid;
    }

    public void setRoleid(int roleid) {
        this.roleid = roleid;
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

    public List<Page> getPageList() {
        return pageList;
    }

    public void setPageList(List<Page> pageList) {
        this.pageList = pageList;
    }
}
