package aml.samples.controller;

import aml.data.ResultSet;
import aml.samples.data.abstractList.UserVTO;
import aml.samples.service.AbstractListSer;
import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/abstractList")
public class AbstractListRes {

    private AbstractListSer abstractListSer;

    @Autowired
    public AbstractListRes(AbstractListSer abstractListSer){
        this.abstractListSer = abstractListSer;
    }

    @Path("/")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ResultSet<UserVTO> findAll(){
        return this.abstractListSer.findAll();
    }
}
