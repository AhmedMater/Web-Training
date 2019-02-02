package com.dorrar.data;

public class CourseReference {
    //TODO: Change attribute names to be camelcase
    private String referenceName;
    private  String referenceType;
    private String referenceUrl;

    public CourseReference() {
    }

    public String getreferenceName() {
        return referenceName;
    }

    public void setreferenceName(String referenceName) {
        referenceName = referenceName;
    }

    public String getreferenceType() {
        return referenceType;
    }

    public void setreferenceType(String referenceID) {
        referenceType = referenceType;
    }

    public String getreferenceUrl() {
        return referenceUrl;
    }

    public void setreferenceUrl(String referenceUrl) {
        referenceUrl = referenceUrl;
    }

    @Override
    public String toString() {
        return "CourseReference{" +
                "referenceName='" + referenceName + '\'' +
                ", referenceID='" + referenceType + '\'' +
                ", referenceUrl='" + referenceUrl + '\'' +
                '}';
    }
}
