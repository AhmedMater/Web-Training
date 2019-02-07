package com.dorrar.detailsData;

import java.io.Serializable;
import java.util.Date;

public class detailsData implements Serializable {
    private String courseName ;
    private int duration;
    private Date startDate;
    private String typeID;
    private int levelID;
    private String description;

    public detailsData() {
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

    public String getTypeID() {
        return typeID;
    }

    public void setTypeID(String typeID) {
        this.typeID = typeID;
    }

    public int getLevelID() {
        return levelID;
    }

    public void setLevelID(int levelID) {
        this.levelID = levelID;
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
                ", typeID='" + typeID + '\'' +
                ", levelID=" + levelID +
                ", description='" + description + '\'' +
                '}';
    }
}
