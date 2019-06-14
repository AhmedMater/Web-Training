package am.dorrar.controller;

import am.dorrar.data.CorRefType;
import am.dorrar.model.*;
import am.dorrar.model.annotation.Authenticate;
import am.dorrar.model.enums.Actions;
import am.dorrar.model.lookup.*;
import am.dorrar.repository.LookupRep;
import am.dorrar.repository.ReferenceRep;
import am.dorrar.service.LookupSer;
import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;

//import am.am.dorrar.model.annotation.AuthorizeAction;

@Path("/lookup")
public class LookupRes {
    private ReferenceRep repository;
    private LookupSer service;
    private LookupRep LookupRep;

    @Autowired
    public LookupRes(ReferenceRep repository , LookupSer service , LookupRep lookUpRep) {
        this.repository = repository;
        this.service=service ;
        this.LookupRep=lookUpRep;


    }

    @Path("/roles")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Authenticate(actions = {Actions.VIEW_ASSIGNMENT})
    public List<Role> getRoles()
    {
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
    public ArrayList<Universty> findalluniversity(){
        Universty university1 =new Universty(1,"Benha");
        Universty university2 =new Universty(2,"Cairo");

        ArrayList<Universty> universityArrayList=new ArrayList<>();
        universityArrayList.add(university1);
        universityArrayList.add(university2);
        return universityArrayList;

    }

    @GET
    @Path("/country")
    @Produces(MediaType.APPLICATION_JSON)
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
        return this.repository.findRefType();
    }

    @GET
    @Path("/corType")
    @Produces(MediaType.APPLICATION_JSON)
    public List<CorType> findType (){
        return this.LookupRep.findTypeListData();
    }

    @GET
    @Path("/corLevel")
    @Produces(MediaType.APPLICATION_JSON)
    public List<CorLevel> findLevel (){
        return this.LookupRep.findLevelListData();

    }
}
