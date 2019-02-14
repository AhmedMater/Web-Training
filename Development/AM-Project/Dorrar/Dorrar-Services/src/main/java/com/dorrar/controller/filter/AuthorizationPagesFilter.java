package com.dorrar.controller.filter;

import com.dorrar.model.Page;
import com.dorrar.model.annotation.AuthorizeAction;
import com.dorrar.model.annotation.AuthorizePage;
import com.dorrar.model.enums.Actions;
import com.dorrar.model.enums.Pages;
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
@Provider
@Priority(Priorities.AUTHORIZATION)
@AuthorizePage
public class AuthorizationPagesFilter implements ContainerRequestFilter {
    @Context
    private ResourceInfo resourceInfo;
    private UserRep userRep;

    @Autowired

    public AuthorizationPagesFilter(UserRep userRep) {
        this.userRep =userRep ;
    }

    public void filter(ContainerRequestContext requestContext) throws IOException {
        AnnotatedElement annotatedElement = resourceInfo.getResourceMethod();
        List<Pages> pages =new ArrayList<>() ;
        if (annotatedElement != null) {
            AuthorizePage annotationPage = annotatedElement.getAnnotation(AuthorizePage.class);
            Pages[] requestedPages = annotationPage.value();
            pages = Arrays.asList(requestedPages);
        }

        Pages page = pages.get(0) ;
        List<Page> userPages =userRep.getUserPages(1) ;
        boolean isFound =false ;
        if(userPages.size()==0)
        {
            requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).build());

        }
        else {
            for (Page pageElement : userPages) {
                if (pageElement.getId() == page.getID()) ;
                {
                    isFound = true;
                    break;
                }
            }

            if (!isFound) {
                requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).build());
            }
        }

    }
}
