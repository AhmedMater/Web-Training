package com.dorrar.controller;

import com.dorrar.detailsData.LevelDropList;
import com.dorrar.detailsData.OptionDropList;
import com.dorrar.detailsData.detailsData;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;

@Path("/course")
public class DetailsRes {
    @POST
    @Path("/new")
    @Consumes(MediaType.APPLICATION_JSON)
    public void next(detailsData data){
        System.out.printf("success.");
        System.out.printf(data.toString());

    }
    @GET
    @Path("/findType")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<OptionDropList> findType (){
        ArrayList<OptionDropList> typeList = new ArrayList<>();
        typeList.add(new OptionDropList(1 , "Acadmic"));
        typeList.add(new OptionDropList(2 , "Practical"));

        return typeList;
    }

    @GET
    @Path("/findLevel")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<LevelDropList> findLevel (){
        ArrayList<LevelDropList> levelList = new ArrayList<>();
        levelList.add(new LevelDropList(1 , "Intern"));
        levelList.add(new LevelDropList(2 , "Entry"));
        levelList.add(new LevelDropList(2 , "Advance"));

        return levelList;
    }

}
