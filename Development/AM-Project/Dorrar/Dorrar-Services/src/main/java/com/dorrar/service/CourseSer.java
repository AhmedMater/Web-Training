package com.dorrar.service;

import com.dorrar.data.CourseReference;
import com.dorrar.repository.ReferenceRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseSer {
    //TODO: Hala - Use Constructor Injection
    @Autowired
   private ReferenceRep repositry;
public void insertCourseRef(int course_id ,List<CourseReference>references){
    for (CourseReference reference:references) {
        this.repositry.insertCourseRef(course_id,reference);
    }
}

}
