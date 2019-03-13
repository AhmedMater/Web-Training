package com.ism.controller;

import com.ism.model.LoginDTO;
import com.ism.model.RegisterDTO;
import com.ism.model.security.AuthUserVTO;
import com.ism.repository.SecurityRep;
import com.ism.service.SecuritySer;
import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/")
public class SecurityRes {

    private SecurityRep securityRep;
    private SecuritySer securitySer;

    @Autowired
    public SecurityRes(SecurityRep securityRep,
                       SecuritySer securitySer){
        this.securityRep = securityRep;
        this.securitySer = securitySer;
    }

    @Path("/register")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void register(RegisterDTO data) throws Exception {
        this.securitySer.register(data);
    }

    @Path("/login")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response login(LoginDTO data) throws Exception {
        AuthUserVTO authUserVTO = this.securitySer.login(data);
        return Response.ok().entity(authUserVTO).build();
    }


    @Path("test")
    @GET
    public void sayHello(){
        System.out.println("Testing Authorization Header");
    }

}
