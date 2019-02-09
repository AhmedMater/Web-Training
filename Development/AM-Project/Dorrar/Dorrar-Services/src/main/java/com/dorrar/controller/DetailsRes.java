package com.dorrar.controller;

import com.dorrar.detailsData.LevelVto;
import com.dorrar.detailsData.TypeVto;
import com.dorrar.detailsData.detailsData;
import com.dorrar.repository.DetailsRep;
import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

//TODO: Youssef - After Moving the functions Remove this class
@Path("/course")
public class DetailsRes {
    //TODO: Youssef - Use Constructor Injection same as Course Res
    @Autowired
    private DetailsRep repository ;

    @POST
    @Path("/mainDetails")
    @Consumes(MediaType.APPLICATION_JSON)
    //TODO: Youssef - move this function to CourseRes
    public void createNewCourse(detailsData data){
        repository.createNewCourse(data);

    }
    @GET
    @Path("/corType")
    @Produces(MediaType.APPLICATION_JSON)
    //TODO: Youssef - move this function to LookupRes
    public List<TypeVto> findType (){
        List<TypeVto> result = this.repository.findTypeListData();
        return result;
    }

    @GET
    @Path("/corLevel")
    @Produces(MediaType.APPLICATION_JSON)
    //TODO: Youssef - move this function to LookupRes
    public List<LevelVto> findLevel (){
        List<LevelVto> result = this.repository.findLevelListData();
        return result;

    }

}
