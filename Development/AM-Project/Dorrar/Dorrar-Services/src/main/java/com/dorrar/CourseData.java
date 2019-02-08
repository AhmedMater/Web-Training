package com.dorrar;

import com.dorrar.data.CourseReference;
import com.dorrar.model.SectionData;

import java.io.Serializable;
import java.util.ArrayList;

//TODO: Youssef - Move this to model/course
public class CourseData implements Serializable {
    ArrayList<CourseReference> reference;
    ArrayList<SectionData> sections ;
    public CourseData() {
    }


    public ArrayList<CourseReference> getReference() {
        return reference;
    }

    public void setReference(ArrayList<CourseReference> reference) {
        this.reference = reference;
    }

    public ArrayList<SectionData> getSections() {
        return sections;
    }

    public void setSections(ArrayList<SectionData> sections) {
        this.sections = sections;
    }

    @Override
    public String toString() {
        return "CourseData{" +
                "sections=" + sections +
                '}';
    }
}
