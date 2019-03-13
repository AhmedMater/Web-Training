package com.dorrar.controller.filter;


import com.dorrar.model.Action;
import com.dorrar.model.Page;
import com.dorrar.model.annotation.Authenticate;
import com.dorrar.model.enums.Actions;
import com.dorrar.model.enums.Pages;
import com.dorrar.model.user.User;
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

@Authenticate
@Provider
@Priority(Priorities.AUTHORIZATION)
public class AuthorizationFilter implements ContainerRequestFilter {
    @Context
    private ResourceInfo resourceInfo;
    private UserRep userRep;

    @Autowired
    public AuthorizationFilter(UserRep userRep) {
        this.userRep = userRep;
    }

    public void filter(ContainerRequestContext requestContext) throws IOException {
        User userOfToken = (User) requestContext.getProperty("Authenticated-User");

        // Get the resource method which matches with the requested URL
        AnnotatedElement annotatedElement = resourceInfo.getResourceMethod();
        List<Actions> actions;
        List<Pages> pages;

        if (annotatedElement != null) {
            Authenticate annotation = annotatedElement.getAnnotation(Authenticate.class);
            Actions[] requestedActions = annotation.actions();
            actions = Arrays.asList(requestedActions);
            Pages[] requestedPages = annotation.pages();
            pages = Arrays.asList(requestedPages);
            if (annotation.actions().length != 0) {
                //Check the Action Authorization
                Actions action = actions.get(0);

                List<Action> userActions = userRep.getUserActions(1);
                if (userActions.size() == 0) {
                    requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).build());
                } else {
                    boolean isFound = false;
                    for (Action action1 : userActions) {
                        if (action.getID() == action1.getId()) {
                            isFound = true;
                            break;
                        }
                    }
                    if (!isFound)
                        requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).build());
                }
            } else if (annotation.pages().length != 0) {
                Pages page = pages.get(0);
                List<Page> userPages = userRep.getUserPages(1);
                boolean isFound = false;
                if (userPages.size() == 0)
                    requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).build());
                else {
                    for (Page pageElement : userPages)
                        if (pageElement.getId() == page.getID()){
                            isFound = true;
                            break;
                        }

                    if (!isFound)
                        requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).build());

                }
            }
        }
    }


}

