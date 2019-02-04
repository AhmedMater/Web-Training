package com.dorrar.service;


import com.dorrar.model.Action;
import com.dorrar.model.Page;
import com.dorrar.model.Role;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;

@Path("/user")
public class UserPrivligeService {

    @Path("/role")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Role> getRoles(){

        List<Action> actionList = new ArrayList<>();
        Action a = new Action(1 ,"view course details") ;
        Action a2 =new Action(2,"view assignment") ;
        Action a3 =new Action(3,"View grades") ;
        actionList.add(a) ;
        actionList.add(a2) ;
        actionList.add(a3) ;

        List<Action> actionList2 =new ArrayList<>();
        Action a4 = new Action(4,"create course") ;
        Action a5 =new Action(5,"create assignment") ;
        Action a6 =new Action(6,"submit  grades") ;
        actionList2.add(a4) ;
        actionList2.add(a5) ;
        actionList2.add(a6) ;



        List<Page> pageList =new ArrayList<>(); ;
        pageList.add(new Page(1 ,"course details")) ;
        pageList.add(new Page(2 ,"courses")) ;

        ArrayList<Role> roleList= new ArrayList<Role>() ;

        Role role1 =new Role(1,"Student" ,actionList ,pageList) ;
        roleList.add(role1) ;

        Role role2 =new Role(2,"instructor" ,actionList2 ,pageList) ;
        roleList.add(role2) ;

        return roleList ;

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




}
