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
//TODO: Hala Class name should be CourseRes
public class CourseRes {
@Autowired
    private CourseSer service;
    @POST
    //TODO: Hala Path should be /{courseID}/reference
    @Path("/{courseID}/reference")
    @Consumes(MediaType.APPLICATION_JSON)
    //TODO: use Course Data Class as payload instead of Course Reference
    //TODO: rename Function to be addCourseReferences
    public void reference(@PathParam("courseID") int course_id, CourseData data) {
        System.out.println("recieved is success");
        System.out.println(data.toString());
        this.service.insertCourseRef(course_id,data.getReference());


    }


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






    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/findData")
    public ArrayList<CorRefType> findData() {
        //TODO: Create Class CorRefType has 2 Attributes (id, labelEN)
        //TODO: Create CorRefType List then add 2 Objects (1, Course) (2, Book) and return the List
        //TODO: Collections List & ArrayList

        ArrayList<CorRefType> list = new ArrayList<CorRefType>();
        list.add(new CorRefType(1, "Course"));
        list.add(new CorRefType(2, "Book"));

        return list;

    }



}
