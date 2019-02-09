package com.dorrar.controller;

import com.dorrar.data.CorRefType;
import com.dorrar.model.*;
import com.dorrar.repository.ReferenceRep;
import com.dorrar.service.LookupSer;
import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;

@Path("/lookup")
public class LockupRes {
    private ReferenceRep repositry;
    private LookupSer service;
    @Autowired
    public LockupRes(ReferenceRep repositry ,LookupSer service) {
        this.repositry = repositry;
        this.service=service ;
    }
    @Path("/roles")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Role> getRoles() {

        return service.getAllRoles();

    }

    @Path("/page")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Page> getPages(){
        List<Action> actionList =new ArrayList<>();
        Action a = new Action(1,"view course details") ;
        Action a2 =new Action(2,"view assignment") ;
        Action a3 =new Action(3,"View grades") ;
        actionList.add(a) ;
        actionList.add(a2) ;
        actionList.add(a3) ;
        Page page1 =new Page(1,"course details" ) ;
        page1.setActionList(actionList);


        List<Action> actionList2 =new ArrayList<>();
        Action a4 = new Action(4,"create course") ;
        Action a5 =new Action(5,"create assignment") ;
        Action a6 =new Action(6,"submit  grades") ;
        actionList2.add(a4) ;
        actionList2.add(a5) ;
        actionList2.add(a6) ;
        Page page2=new Page(2,"courses");
        page2.setActionList(actionList2);
        ArrayList<Page> pageList =new ArrayList<>() ;
        pageList.add(page1) ;
        pageList.add(page2) ;
        return pageList ;

    }

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

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/corRefType")
    public List<CorRefType> findData() {
        List<CorRefType> list =this.repositry.findRefType();
        return list;
    }
}
