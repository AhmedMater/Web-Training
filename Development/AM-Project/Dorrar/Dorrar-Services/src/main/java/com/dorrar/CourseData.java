package com.dorrar;

import com.dorrar.data.CourseReference;

import java.io.Serializable;
import java.util.ArrayList;

public class CourseData implements Serializable {
    ArrayList<CourseReference> reference;
    public CourseData() {
    }


    public ArrayList<CourseReference> getReference() {
        return reference;
    }

    public void setReference(ArrayList<CourseReference> reference) {
        this.reference = reference;
    }
}
