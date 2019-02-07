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
    @Path("/{courseID}/reference")
    @Consumes(MediaType.APPLICATION_JSON)
    //TODO: rename Function to be addCourseReferences
    public void addCourseReferences(@PathParam("courseID") int course_id, CourseData data) {
        System.out.println("recieved is success");
        System.out.println(data.toString());
        this.service.insertCourseRef(course_id,data.getReference());


    }


    //TODO: Yara - Use Constructor Injection

    private SectionSer sectionService ;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/{courseID}/section")
    public void addCourseSections (@PathParam("courseID") int courseID ,CourseData data) {
        System.out.print("Data Recieved Sucessfully");
        System.out.print(data.toString());
        this.sectionService.insertCourseSections(courseID,data.getSection());
    }


    //TODO: Hala - Select CorRefType from Database instead of Hard coded values
    //TODO: Hala - Move this function to Lookup Res
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    //TODO: Hala - Path to corRefType
    @Path("/findData")
    public ArrayList<CorRefType> findData() {
        ArrayList<CorRefType> list = new ArrayList<CorRefType>();
        list.add(new CorRefType(1, "Course"));
        list.add(new CorRefType(2, "Book"));

        return list;

    }



}
