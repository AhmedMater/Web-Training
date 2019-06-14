package am.dorrar.service;

import am.dorrar.model.SectionData;
import am.dorrar.repository.SectionRep;
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
