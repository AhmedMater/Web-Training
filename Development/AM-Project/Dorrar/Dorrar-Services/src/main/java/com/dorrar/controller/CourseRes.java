package com.dorrar.controller;

import com.dorrar.model.course.CorMainDetail;
import com.dorrar.model.course.CourseData;
import com.dorrar.repository.CourseRep;
import com.dorrar.service.CourseSer;
import com.dorrar.service.SectionSer;
import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/course")
public class CourseRes {
    private CourseSer service;
    private SectionSer sectionService ;
    private CourseRep repository ;


    @Autowired
    public CourseRes(
            CourseSer service,    
            SectionSer sectionService,
            CourseRep repository) {
        this.service = service;

        this.sectionService = sectionService ;

        this.repository = repository;
    }

    @POST
    @Path("/{courseID}/reference")
    @Consumes(MediaType.APPLICATION_JSON)
    public void addCourseReferences(@PathParam("courseID") int courseID, CourseData data) {
        this.service.insertCourseRefs(courseID,data.getReferences());
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/{courseID}/section")
    public void addCourseSections (@PathParam("courseID") int courseID ,CourseData data) {
        this.sectionService.insertCourseSections(courseID,data.getSections());
    }

    @POST
    @Path("/mainDetails")
    @Consumes(MediaType.APPLICATION_JSON)
    public void createNewCourse(CorMainDetail data){
        repository.createNewCourse(data);

    }


}
