package com.dorrar.data;

public class CourseReference {
    private String refName;
    private  String refTypeID;
    private String refUrl;

    public CourseReference() {
    }

    public String getRefName() {
        return refName;
    }

    public void setRefName(String refName) {
        this.refName = refName;
    }

    public String getRefTypeID() {
        return refTypeID;
    }

    public void setRefTypeID(String refTypeID) {
        this.refTypeID = refTypeID;
    }

    public String getRefUrl() {
        return refUrl;
    }

    public void setRefUrl(String refUrl) {
        this.refUrl = refUrl;
    }

    @Override
    public String toString() {
        return "CourseReference{" +
                "refName='" + refName + '\'' +
                ", refTypeID='" + refTypeID + '\'' +
                ", refUrl='" + refUrl + '\'' +
                '}';
    }
}
