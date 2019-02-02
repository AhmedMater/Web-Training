package com.dorrar.controller;

import com.dorrar.model.UserList;



@Path("/user")
public class UserRes {

//    @POST
//    @Path("/filter")
//    @Consumes(MediaType.APPLICATION_JSON)
    public void filter(UserList data){
        System.out.println("Data is received successfuly");
        System.out.println(data.toString());

    }
}
