package com.dorrar.controller;

import com.dorrar.CourseData;
import com.dorrar.service.SectionSer;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

@Path("/course")
public class SectionRes {

    private SectionSer ser ;


    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/section")
    public void addCourseSections (CourseData data) {
        System.out.print("Data Recieved Sucessfully");
        System.out.print(data.toString());

        //this.ser.sectionList(data);
    }
}
