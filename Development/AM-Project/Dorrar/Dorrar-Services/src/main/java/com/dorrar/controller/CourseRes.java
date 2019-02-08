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
    private CourseSer service;
    private SectionSer sectionService ;

    @Autowired
    public CourseRes(
            CourseSer service,    
            SectionSer sectionService) {
        this.service = service;
        this.sectionService = sectionService ;
    }

    @POST
    @Path("/{courseID}/reference")
    @Consumes(MediaType.APPLICATION_JSON)
    public void addCourseReferences(@PathParam("courseID") int courseID, CourseData data) {
        System.out.println("recieved is success");
        System.out.println(data.toString());
        this.service.insertCourseRefs(courseID,data.getReferences());
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/{courseID}/section")
    public void addCourseSections (@PathParam("courseID") int courseID ,CourseData data) {
        System.out.print("Data Recieved Sucessfully");
        System.out.print(data.toString());
        this.sectionService.insertCourseSections(courseID,data.getSections());
    }





}
