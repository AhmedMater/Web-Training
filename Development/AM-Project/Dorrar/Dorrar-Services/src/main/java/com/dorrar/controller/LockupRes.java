package com.dorrar.controller;

import com.dorrar.data.CorRefType;
import com.dorrar.model.College;
import com.dorrar.model.Country;
import com.dorrar.model.University;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;

//TODO: Hala -  This should have Path: 'lookup'
public class LockupRes {

    @GET
    @Path("/colleges")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<College> findallcollege(){
        College college1 =new College(1,"Science");
        College college2 =new College(2,"Nursing");

        ArrayList<College> collegeArrayList=new ArrayList<>() ;
        collegeArrayList.add(college1);
        collegeArrayList.add(college2);
        return collegeArrayList;

    }
    @GET
    @Path("/university")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<University> findalluniversity(){
        University university1 =new University(1,"Benha");
        University university2 =new University(2,"Cairo");

        ArrayList<University> universityArrayList=new ArrayList<>();
        universityArrayList.add(university1);
        universityArrayList.add(university2);
        return universityArrayList;

    }
    public ArrayList<Country> findallcountry(){
        Country country1=new Country(1,"Egypt");
        Country country2=new Country(2,"sudan");

        ArrayList<Country> countryArrayList=new ArrayList<>();
        countryArrayList.add(country1);
        countryArrayList.add(country2);
        return countryArrayList;
    }
    //TODO: Hala - Select CorRefType from Database instead of Hard coded values
    //TODO: Hala - Move this function to Lookup Res
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    //TODO: Hala - Path to corRefType
    @Path("/findData")
    public ArrayList<CorRefType> findData() {
        ArrayList<CorRefType> list = new ArrayList<CorRefType>();
        list.add(new CorRefType(1, "Course"));
        list.add(new CorRefType(2, "Book"));

        return list;

    }
}
