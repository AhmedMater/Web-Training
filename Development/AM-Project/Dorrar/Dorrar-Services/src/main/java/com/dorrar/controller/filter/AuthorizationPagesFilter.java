package com.dorrar.controller.filter;

import com.dorrar.model.Page;
import com.dorrar.model.annotation.AuthorizeAction;
import com.dorrar.model.annotation.AuthorizePage;
import com.dorrar.model.enums.Actions;
import com.dorrar.model.enums.Pages;
import com.dorrar.repository.UserRep;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.ResourceInfo;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.lang.reflect.AnnotatedElement;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class AuthorizationPagesFilter implements ContainerRequestFilter {
    @Context
    private ResourceInfo resourceInfo;
    private UserRep userRep;
    public void filter(ContainerRequestContext requestContext) throws IOException {
        List<Pages> pages =getAnnotatedPage() ;
        Pages page = pages.get(0) ;
        List<Page> userPages =userRep.getUserPages(1) ;

        for(Page pageElement:userPages)
        {
            if(pageElement.getId()==page.getID()) ;

            if(pageElement.getId()!=page.getID()) {
                requestContext.abortWith(getResponse());
            }
        }


    }


    public List<Pages> getAnnotatedPage()
    {
        AnnotatedElement annotatedElement = resourceInfo.getResourceMethod();

        if (annotatedElement == null) {
            return new ArrayList<>();
        } else {
            AuthorizePage annotationPage= annotatedElement.getAnnotation(AuthorizePage.class);
            Pages[] requestedPages = annotationPage.value();
            return Arrays.asList(requestedPages);
        }

    }

     public Response getResponse()
     {
         return Response.status(Response.Status.UNAUTHORIZED).build() ;
     }


}
