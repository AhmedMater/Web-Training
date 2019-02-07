package com.dorrar.controller;

import com.dorrar.model.AuthUser;
import com.dorrar.model.LoginUserDto;
import com.dorrar.model.User;
import com.dorrar.repository.SecurityRep;
import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.Date;
@Path("/security")
public class SecurityRes {

    //TODO: Aya - Use Constructor Injection same as in
    @Autowired
    SecurityRep userData;
    @Autowired
    SecurityManager securityManager;

    @Path("/login")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response login(LoginUserDto data) throws Exception {
//        System.out.println("Data received successfully");
//        System.out.println(data.toString());
//        System.out.println(securityManager.dm5Hash(data.getPassword()));
        if(userData.userExist(data.getUserName())){
            User user = userData.getUserByUserName(data.getUserName());
//            String firstNAme = user.getFirstName();
//            String lastNAme = user.getLastName();
//            System.out.println("Welcome " + firstNAme + ' ' + lastNAme + "^~^");
//            System.out.println(user.toString());
            String hashedPassword = securityManager.dm5Hash(data.getPassword());
            if(hashedPassword.equals(user.getUserPassword())){
//                System.out.println("correct password");
                String token = securityManager.generateToken(user.getUserName(), hashedPassword, new Date().getTime());
//                System.out.println(token);
                AuthUser authUser = new AuthUser();
                authUser.setUserId(user.getId());
                authUser.setFullName(user.getFirstName()+ ' ' + user.getLastName());
                authUser.setToken(token);
                return Response.ok().entity(authUser).build();
            }else{
//                System.out.println("Wrong password");
                return Response.status(400).entity("Wrong Password!").build();

            }
//            if(user.isActive()){
//                System.out.println("Active user");
//            }else{
//                System.out.println("Inactive user");
//            }
        }
//        System.out.println("User exist? " + userData.userExist(data.getUserName()));
        return Response.status(404).entity("User Not Found").build();
    }
}
