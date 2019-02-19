package com.dorrar.controller;

import com.dorrar.model.UserList;
import com.dorrar.model.UserVTO;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;


@Path("/user")
public class UserRes {

    @POST
    @Path("/filter")
    @Consumes(MediaType.APPLICATION_JSON)
    public void filter(UserList data){
        System.out.println("Data is received successfully");
        System.out.println(data.toString());

    }
    @GET
    @Path("/find")
    @Produces(MediaType.APPLICATION_JSON)
    public List<UserVTO> findAllUsers(){
//        List<UserVTO> result=this.repository.findAll();
        return new ArrayList<>();

    }

}
