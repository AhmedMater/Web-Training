package com.dorrar.model;

import java.io.Serializable;


public class SectionData implements Serializable {
    String name ;
    String description ;


    @Override
    public String toString() {
        return "SectionData{" +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +

                '}';
    }



    public SectionData() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
