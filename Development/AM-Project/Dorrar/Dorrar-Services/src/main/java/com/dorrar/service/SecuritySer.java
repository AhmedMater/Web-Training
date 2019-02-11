package com.dorrar.service;

import com.dorrar.model.security.AuthUser;
import com.dorrar.model.security.LoginUserDTO;
import com.dorrar.model.user.User;
import com.dorrar.repository.SecurityRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.ws.rs.core.Response;
import java.util.Date;

@Service
public class SecuritySer {

    private SecurityRep userData;
    private SecurityManager securityManager;

    @Autowired
    public SecuritySer(
            SecurityRep userData,
            SecurityManager securityManager){
        this.securityManager = securityManager;
        this.userData = userData;
    }

    public Response Login(LoginUserDTO data) throws Exception {
        User user = userData.getUserByUserName(data.getUsername());
        if(user != null){
            if(user.isActive()){
                String hashedPassword = securityManager.dm5Hash(data.getPassword());
                if(hashedPassword.equals(user.getUserPassword())){
                    String token = securityManager.generateToken(user.getUserName(), hashedPassword, new Date().getTime());
                    AuthUser authUser = new AuthUser();
                    authUser.setUserId(user.getId());
                    authUser.setFullName(user.getFirstName()+ ' ' + user.getLastName());
                    authUser.setToken(token);
                    return Response.ok().entity(authUser).build();
                }else{
                    return Response.status(400).entity("Wrong Password!").build();

                }
            }else {
                return Response.status(400).entity("User is inactive").build();
            }

        }
        return Response.status(400).entity("User Not Found").build();
    }
}
