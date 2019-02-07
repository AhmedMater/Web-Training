package com.dorrar.service;

import com.dorrar.data.CourseReference;
import com.dorrar.repository.ReferenceRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseSer {
    private ReferenceRep repository;

    @Autowired
    public CourseSer(ReferenceRep repository) {
        this.repository = repository;
    }

    public void insertCourseRefs(int course_id, List<CourseReference> references) {
        for (CourseReference reference : references) {
            this.repository.insertCourseRef(course_id, reference);
        }
    }

}
