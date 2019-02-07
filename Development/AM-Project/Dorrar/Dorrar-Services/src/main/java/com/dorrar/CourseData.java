package com.dorrar;

import com.dorrar.data.CourseReference;
import com.dorrar.model.SectionData;

import java.io.Serializable;
import java.util.ArrayList;

//TODO: Youssef - Move this to model/course
public class CourseData implements Serializable {
    ArrayList<CourseReference> reference;
    ArrayList<SectionData> section ;
    public CourseData() {
    }


    public ArrayList<CourseReference> getReference() {
        return reference;
    }

    public void setReference(ArrayList<CourseReference> reference) {
        this.reference = reference;
    }

    public ArrayList<SectionData> getSection() {
        return section;
    }

    public void setSection(ArrayList<SectionData> section) {
        this.section = section;
    }

    @Override
    public String toString() {
        return "CourseData{" +
                "section=" + section +
                '}';
    }
}
