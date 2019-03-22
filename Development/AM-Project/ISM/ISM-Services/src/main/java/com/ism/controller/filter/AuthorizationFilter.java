package com.ism.controller.filter;

import com.ism.model.annotation.Authenticated;
import com.ism.model.authorization.AuthActions;
import com.ism.model.authorization.AuthViews;
import com.ism.model.user.UserVTO;
import com.ism.repository.SecurityRep;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.Priority;
import javax.ws.rs.Priorities;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.ResourceInfo;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;
import java.io.IOException;
import java.lang.reflect.AnnotatedElement;
import java.util.ArrayList;
import java.util.List;

@Provider
@Priority(Priorities.AUTHORIZATION)
@Authenticated
public class AuthorizationFilter implements ContainerRequestFilter {

    @Context private ResourceInfo resourceInfo;
    private SecurityRep securityRep;

    @Autowired
    public AuthorizationFilter(SecurityRep securityRep){
        this.securityRep = securityRep;
    }

    @Override
    public void filter(ContainerRequestContext request) throws IOException {
        UserVTO user = (UserVTO) request.getProperty(AuthenticationFilter.AUTH_USER);

        AnnotatedElement service = resourceInfo.getResourceMethod();
        Authenticated authenticated = service.getAnnotation(Authenticated.class);
        if(authenticated != null){
            AuthActions[] actions = authenticated.actions();
            AuthViews[] views = authenticated.views();

            if(actions.length != 0){
                List<Integer> actionsIDs = new ArrayList<>();
                for(AuthActions action: actions)
                    actionsIDs.add(action.getID());

                boolean isFound = this.securityRep.isUserHasAction(user.getId(), actionsIDs);
                if(!isFound)
                    request.abortWith(Response.status(Response.Status.FORBIDDEN)
                            .entity("User doesn't have privilege to perform this action").build());
            }else if (views.length != 0){
                List<Integer> viewsIDs = new ArrayList<>();
                for(AuthViews view: views)
                    viewsIDs.add(view.getID());

                boolean isFound = this.securityRep.isUserHasView(user.getId(), viewsIDs);
                if(!isFound)
                    request.abortWith(Response.status(Response.Status.FORBIDDEN)
                            .entity("User doesn't have privilege to access this view").build());
            }
        }
    }
}
