package com.ism.controller.filter;

import com.ism.model.annotation.Authenticated;
import com.ism.model.user.UserVTO;
import com.ism.repository.SecurityRep;
import com.ism.service.SecurityManagerSer;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.Priority;
import javax.ws.rs.Priorities;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;
import java.io.IOException;
import java.util.Base64;

import static javax.ws.rs.core.Response.Status.INTERNAL_SERVER_ERROR;

@Provider
@Priority(Priorities.AUTHENTICATION)
@Authenticated
public class AuthenticationFilter implements ContainerRequestFilter {
    public static final String AUTH_USER = "Authenticated-User";

    private SecurityRep securityRep;
    private SecurityManagerSer securityManagerSer;

    @Autowired
    public AuthenticationFilter(SecurityRep securityRep,
                                SecurityManagerSer securityManagerSer){
        this.securityRep = securityRep;
        this.securityManagerSer = securityManagerSer;
    }

    @Override
    public void filter(ContainerRequestContext request) throws IOException {
        String authHeader = request.getHeaderString("Authorization");

        if(authHeader == null || !authHeader.startsWith("Bearer "))
            request.abortWith(Response.status(Response.Status.UNAUTHORIZED).build());

        String token = authHeader.substring("Bearer ".length()).trim();
        String decodedToken = new String(Base64.getDecoder().decode(token), "US-ASCII");

        // Part[0] = HashPass & Part[1] = Username & Part[2] = tick
        String[] parts = decodedToken.split(":");

//        String hashedPass = new String(Base64.getDecoder().decode(parts[0]));
        String username = parts[1];
        String ticks = parts[2];

        UserVTO user = this.securityRep.selectByUserName(username);

        if(user == null)
            request.abortWith(Response.status(Response.Status.UNAUTHORIZED).entity("User not found").build());
        else {
            try {
                String newToken = this.securityManagerSer.generateToken(user.getUsername(), user.getPassword(), Long.parseLong(ticks));

                if(!newToken.equals(token))
                    request.abortWith(Response.status(Response.Status.UNAUTHORIZED).entity("Incorrect User Password").build());
                else{
                    user.setPassword(null);
                    request.setProperty(AuthenticationFilter.AUTH_USER, user);
                }
            } catch (Exception e) {
                request.abortWith(Response.status(INTERNAL_SERVER_ERROR).entity("Failed to generate Token").build());
            }

        }
    }
}
