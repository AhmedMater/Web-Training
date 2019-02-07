package com.dorrar.service;

import com.dorrar.model.SectionData;
import com.dorrar.repository.SectionRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SectionSer {

    //TODO: Yara - Use Constructor Injection
    @Autowired
    SectionRep repository;

    public void insertCourseSections(int courseID, List<SectionData> sections) {
        for (SectionData section : sections)
            this.repository.insertCourseSection(courseID, section);
    }

}
