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


    @Autowired
    private DetailsRep repository ;

    @POST
    //TODO: Youssef - Path should be /mainDetails
    @Path("/mainDetails")
    @Consumes(MediaType.APPLICATION_JSON)
    //TODO: Youssef - move this function to CourseRes
    public void createNewCourse(detailsData data){
        System.out.printf("success.");
        System.out.printf(data.toString());

        repository.createNewCourse(data);

    }
    @GET
    //TODO: Youssef - Path should be /corType
    @Path("/corType")
    @Produces(MediaType.APPLICATION_JSON)
    //TODO: Youssef - move this function to LookupRes
    //TODO: Youssef - This Function should retreive the Data from Database instead of Hardcoded
    public List<TypeVto> findType (){

        List<TypeVto> result = this.repository.findTypeListData();
        return result;
    }

    @GET
    //TODO: Youssef - Path should be /corLevel
    @Path("/corLevel")
    @Produces(MediaType.APPLICATION_JSON)
    //TODO: Youssef - move this function to LookupRes
    //TODO: Youssef - This Function should retreive the Data from Database instead of Hardcoded
    public List<LevelVto> findLevel (){

        List<LevelVto> result = this.repository.findLevelListData();
        return result;

    }

}
