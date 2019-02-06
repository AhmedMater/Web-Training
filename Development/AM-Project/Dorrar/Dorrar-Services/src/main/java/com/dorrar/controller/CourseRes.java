package com.dorrar.controller;

import com.dorrar.CourseData;
import com.dorrar.data.CorRefType;
import com.dorrar.data.CourseReference;
import com.dorrar.repository.ReferenceRep;
import com.dorrar.service.CourseSer;
import com.dorrar.repository.SectionRep;
import com.dorrar.service.SectionSer;
import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
@Path("/course")
public class CourseRes {

    //TODO: Hala - Use Constructor Injection

    private CourseSer service;
    @Autowired

    public CourseRes() {
    }



    @POST
    @Path("/{courseID}/addCourseReferences")
    @Consumes(MediaType.APPLICATION_JSON)
    //TODO: rename Function to be addCourseReferences
    public void addCourseReferences(@PathParam("courseID") int course_id, CourseData data) {
        System.out.println("recieved is success");
        System.out.println(data.toString());
        this.service.insertCourseRef(course_id,data.getReference());


    }


    //TODO: Yara - Use Constructor Injection
    @Autowired
    private SectionSer sectionService ;


    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/{courseID}/section")
    public void addCourseSections (@PathParam("courseID") int courseID ,CourseData data) {
        System.out.print("Data Recieved Sucessfully");
        System.out.print(data.toString());
        this.sectionService.insertCourseSections(courseID,data.getSection());
    }





}
