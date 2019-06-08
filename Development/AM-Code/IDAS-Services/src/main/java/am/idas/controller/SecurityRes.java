package am.idas.controller;

import am.idas.controller.filter.AuthenticationFilter;
import am.idas.model.LoginDTO;
import am.idas.model.RegisterDTO;
import am.idas.model.annotation.Authenticated;
import am.idas.model.authorization.AuthActions;
import am.idas.model.authorization.AuthViews;
import am.idas.model.security.AuthUserVTO;
import am.idas.model.user.UserVTO;
import am.idas.repository.SecurityRep;
import am.idas.service.SecuritySer;
import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.*;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.core.Context;
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
    @Authenticated
    public void sayHello(@Context ContainerRequestContext request){
        UserVTO currentUser = (UserVTO) request.getProperty(AuthenticationFilter.AUTH_USER);
        currentUser.getId();

        System.out.println("Testing Authorization Header");
    }

    @Path("test-action")
    @GET
    @Authenticated(actions = {AuthActions.SUBMIT_TRANSLATION})
    public void testAction(@Context ContainerRequestContext request){
        UserVTO currentUser = (UserVTO) request.getProperty(AuthenticationFilter.AUTH_USER);
        currentUser.getId();

        System.out.println("Testing Authorization Header");
    }

    @Path("test-view")
    @GET
    @Authenticated(views = {AuthViews.VIEW_ATTENDENCE, AuthViews.VIEW_GRADE})
    public void findStdByCorID(){
        System.out.println("Testing Authorization Header");
    }


}
