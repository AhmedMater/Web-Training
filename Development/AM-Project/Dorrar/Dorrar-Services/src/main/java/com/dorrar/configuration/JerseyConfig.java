package com.dorrar.configuration;

import com.dorrar.controller.UserRes;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;

import javax.ws.rs.ApplicationPath;

@ApplicationPath("/api")
@Configuration
public class JerseyConfig extends ResourceConfig {

    public JerseyConfig(){
        register(CORSFilter.class);
        register(UserRes.class);
    }

}
