package com.dorrar.controller.filter;


import com.dorrar.model.Action;
import com.dorrar.model.annotation.AuthorizeAction;
import com.dorrar.model.enums.Actions;
import com.dorrar.repository.UserRep;
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
import java.util.Arrays;
import java.util.List;

import static javax.ws.rs.core.Response.*;

@Provider
@Priority(Priorities.AUTHORIZATION)
@AuthorizeAction
public class AuthorizationActionsFilter implements ContainerRequestFilter {
    @Context
    private ResourceInfo resourceInfo;
    private UserRep userRep;

    @Autowired
    public AuthorizationActionsFilter(UserRep userRep){
        this.userRep = userRep;
    }

    public void filter(ContainerRequestContext requestContext) throws IOException {

        // Get the resource method which matches with the requested URL
        AnnotatedElement annotatedElement = resourceInfo.getResourceMethod();
        List<Actions> actions = new ArrayList<>();
        if (annotatedElement != null) {
            AuthorizeAction annotation = annotatedElement.getAnnotation(AuthorizeAction.class);
            Actions[] requestedActions = annotation.value();
            actions = Arrays.asList(requestedActions);
        }

        Actions action = actions.get(0);

        List<Action> userActions = userRep.getUserActions(1);
        for (Action action1 : userActions) {
            //TODO: Fathy - There is no need for this
            if (action1.getId() == action.getID()) ;

            //TODO: Fathy - This Logic isn't correct check it again and test the filter again
            if (action1.getId() != action.getID()) {
                requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).build());

            }
        }


    }
}
