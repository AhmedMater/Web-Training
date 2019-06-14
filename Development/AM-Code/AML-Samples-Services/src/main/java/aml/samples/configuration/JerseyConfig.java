package aml.samples.configuration;

import aml.samples.controller.AbstractListRes;
//import aml.samples.controller.filter.AuthenticationFilter;
//import aml.samples.controller.filter.AuthorizationFilter;
//import aml.samples.controller.filter.CORSFilter;
import aml.samples.controller.filter.AuthenticationFilter;
import aml.samples.controller.filter.AuthorizationFilter;
import aml.samples.controller.filter.CORSFilter;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;

import javax.ws.rs.ApplicationPath;

@ApplicationPath("/amlSamples/api")
@Configuration
public class JerseyConfig extends ResourceConfig {

    public JerseyConfig(){
        register(CORSFilter.class);
        register(AuthorizationFilter.class);
        register(AuthenticationFilter.class);
        register(AbstractListRes.class);
    }

}
