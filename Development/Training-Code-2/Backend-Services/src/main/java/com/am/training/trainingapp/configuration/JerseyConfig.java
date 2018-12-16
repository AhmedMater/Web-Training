package com.am.training.trainingapp.configuration;

import com.am.training.trainingapp.configuration.CORSFilter;
import com.am.training.trainingapp.controller.RestTest;
import com.am.training.trainingapp.controller.UserRes;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;

import javax.ws.rs.ApplicationPath;

@ApplicationPath("/api")
@Configuration
public class JerseyConfig extends ResourceConfig {

    public JerseyConfig(){
        register(CORSFilter.class);
        register(RestTest.class);
    }

}
