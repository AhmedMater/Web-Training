package com.dorrar.model.course;


import java.io.Serializable;
import java.util.Date;

public class CorMainDetail implements Serializable {
    private String courseName ;
    private int duration;
    private Date startDate;
    private int corTypeID;
    private int corLevelID;
    private String description;

    public CorMainDetail() {
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public int getCorTypeID() {
        return corTypeID;
    }

    public void setCorTypeID(int corTypeID) {
        this.corTypeID = corTypeID;
    }

    public int getCorLevelID() {
        return corLevelID;
    }

    public void setCorLevelID(int corLevelID) {
        this.corLevelID = corLevelID;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "CourseDetailsData{" +
                "courseName='" + courseName + '\'' +
                ", duration=" + duration +
                ", startDate=" + startDate +
                ", typeID='" + corTypeID + '\'' +
                ", levelID=" + corLevelID +
                ", description='" + description + '\'' +
                '}';
    }
}
