package com.am.training.trainingapp.controller;


import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Component
@Path("/myResource")
public class RestTest {

    public RestTest() {

    }

    @GET
    @Produces(MediaType.TEXT_HTML)
    @Path("/hello")
    public String sayHello() {
        return  "<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>" +
                "<center>" +
                    "<h1>Hello to Our First Spring Project</h1>" +
                "</center>";
    }
}
