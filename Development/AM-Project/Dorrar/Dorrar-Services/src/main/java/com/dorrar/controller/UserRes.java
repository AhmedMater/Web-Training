package com.dorrar.controller;

import com.dorrar.model.UserList;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;


@Path("/user")
public class UserRes {

    @POST
    @Path("/filter")
    @Consumes(MediaType.APPLICATION_JSON)
    public void filter(UserList data){
        System.out.println("Data is received successfully");
        System.out.println(data.toString());

    }


}
