package am.dorrar.configuration;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;

import javax.ws.rs.ApplicationPath;

@ApplicationPath("/api")
@Configuration
public class JerseyConfig extends ResourceConfig {

    public JerseyConfig(){
        register(CORSFilter.class);
        packages("com.am.dorrar.controller");
        packages("com.am.dorrar.controller.filter");
    }

}
