package am.dorrar.controller.filter;

import am.dorrar.model.annotation.Authenticate;
import am.dorrar.model.user.User;
import am.dorrar.repository.SecurityRep;
import am.dorrar.service.SecurityManager;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.Priority;
import javax.ws.rs.Priorities;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;
import java.io.IOException;
import java.util.Base64;

//import javax.inject.Inject;
//import javax.servlet.http.HttpSession;

@Authenticate
@Provider
@Priority(Priorities.AUTHENTICATION)
public class AuthenticationFilter implements ContainerRequestFilter {

    private SecurityRep userService;
    private SecurityManager securityManager;
//    private HttpSession httpSession;

    @Autowired
    public AuthenticationFilter(
            SecurityRep userService,
            SecurityManager securityManager) {
        this.userService = userService;
        this.securityManager = securityManager;

    }

    public void filter(ContainerRequestContext requestContext) throws IOException {
//        try {
//            String authorizationHeader =
//                    requestContext.getHeaderString("authorization");
//            if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
//                throw new NotAuthorizedException("Authorization header must be provided");
//            }
//            // Extract the token from the HTTP Authorization header
//            String token = authorizationHeader.substring("Bearer".length()).trim();
//            //Validate the token
//            validateToken(token, requestContext);
//
////            ConfigManager.logger.endDebugLog(session, AuthenticationFilter.class, "filter");
//        } catch (Exception e) {
//            requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).build());
//        }
    }

    private void validateToken(String token, ContainerRequestContext requestContext) {
        try {
            String key = new String(Base64.getDecoder().decode(token), "US-ASCII");
            String[] parts = key.split(":");
            if (parts.length == 3) {
                String hash = parts[0];
                String username = parts[1];
                long ticks = Long.parseLong(parts[2]);
                User userOfToken = userService.getUserByUserName(username);
                if (userOfToken == null)
                    requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).entity("Invalid User!").build());
                if (!userOfToken.isActive())
                    requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).entity("User Deactivated!").build());

                String password = userOfToken.getUserPassword();
                String ComputedHash = securityManager.generateToken(username, password, ticks);
                if (token.equals(ComputedHash)) {
                    requestContext.setProperty("Authenticated-User", userOfToken);
//                        session.setUserName(userOfToken.getFirstName() + " " + userOfToken.getLastName());
                } else
                    requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).entity("Invalid Token!").build());
            } else
                requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).entity("Invalid Token!").build());
        } catch (Exception ex) {
//           throw new NPCBusinessException("Exception happened during validate token");
            requestContext.abortWith(Response.status(Response.Status.FORBIDDEN).entity("xception happened during validate token").build());
        }
    }
}