package com.dorrar.controller;

import com.dorrar.data.CorRefType;
import com.dorrar.data.CourseReference;
import com.dorrar.model.UserList;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;


@Path("/user")
public class UserRes {
    @POST
    @Path("/reference")
    @Consumes(MediaType.APPLICATION_JSON)
    //TODO: use Course Data Class as payload instead of Course Reference
    //TODO: rename Function to be addCourseReferences
    public void reference(CourseReference data) {
        System.out.println("recieved is success");
        System.out.println(data.toString());


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



    @POST
    @Path("/filter")
    @Consumes(MediaType.APPLICATION_JSON)
    public void filter(UserList data){
        System.out.println("Data is received successfuly");
        System.out.println(data.toString());

    }
}
