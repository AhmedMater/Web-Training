package com.dorrar.controller;

import com.dorrar.model.security.LoginUserDTO;
import com.dorrar.service.SecuritySer;
import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/security")
public class SecurityRes {

    //TODO: Aya - Use Constructor Injection same as in CourseRes

    private SecuritySer securitySer;

    @Autowired
    public SecurityRes(SecuritySer securitySer){
        this.securitySer = securitySer;
    }
    @Path("/login")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response login(LoginUserDTO data) throws Exception {
        return this.securitySer.Login(data);
    }
}
