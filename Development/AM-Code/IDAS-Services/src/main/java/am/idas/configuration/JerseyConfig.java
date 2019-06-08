package am.idas.configuration;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;

import javax.ws.rs.ApplicationPath;

@ApplicationPath("/api")
@Configuration
public class JerseyConfig extends ResourceConfig {

    public JerseyConfig(){
        packages("am.idas.controller");
//        packages("am.idas.controller.filter");
    }

}
