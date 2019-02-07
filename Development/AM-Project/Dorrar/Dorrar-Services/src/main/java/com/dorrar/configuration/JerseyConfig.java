package com.dorrar.configuration;

import com.dorrar.controller.*;
import com.dorrar.controller.CourseRes;
import com.dorrar.controller.DetailsRes;
import com.dorrar.controller.SecurityRes;
import com.dorrar.controller.UserRes;
import com.dorrar.controller.UserRowMapper;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;

import javax.ws.rs.ApplicationPath;
import java.lang.SecurityManager;

@ApplicationPath("/api")
@Configuration
public class JerseyConfig extends ResourceConfig {

    public JerseyConfig(){
        register(CORSFilter.class);
        register(UserRes.class);
        register(CourseRes.class);
        register(LockupRes.class);
        register(DetailsRes.class);
//        register(SecurityManager.class);
//        register(UserRowMapper.class);
        register(SecurityRes.class);
    }

}
