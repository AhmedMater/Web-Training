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
    //@Autowired
    private UserRep userRep;
    public void filter(ContainerRequestContext requestContext) throws IOException {

      List<Actions> actions=getAnnotadedAction() ;
      Actions action =actions.get(0);

       List<Action> userActions = userRep.getUserActions(1) ;
       for (Action action1:userActions)
        {
          if (action1.getId()==action.getID()) ;

          if (action1.getId()!=action.getID()) {
              getResponse() ;
          }
        }




    }

    public List<Actions> getAnnotadedAction()
    {
        // Get the resource method which matches with the requested URL
        AnnotatedElement annotatedElement = resourceInfo.getResourceMethod();

        if (annotatedElement == null) {
            return new ArrayList<>();
        } else {
            AuthorizeAction annotationaction= annotatedElement.getAnnotation(AuthorizeAction.class);
            Actions[] requestedActions = annotationaction.value();
                return Arrays.asList(requestedActions);
        }
    }
    public Response getResponse()
    {
        return Response.status(Response.Status.UNAUTHORIZED).build() ;
    }
}
