package am.idas.service;

import am.idas.model.LoginDTO;
import am.idas.model.RegisterDTO;
import am.idas.model.security.AuthUserVTO;
import am.idas.model.user.UserVTO;
import am.idas.repository.SecurityRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class SecuritySer {

    private SecurityRep securityRep;
    private SecurityManagerSer securityManagerSer;

    @Autowired
    public SecuritySer(SecurityRep securityRep,
                       SecurityManagerSer securityManagerSer){
        this.securityRep = securityRep;
        this.securityManagerSer = securityManagerSer;
    }

    public AuthUserVTO login(LoginDTO data) throws Exception{
        UserVTO user = this.securityRep.selectByUserName(data.getUsername());

        if(user == null)
            throw new Exception("USR-0001");
        else {
            String hashedPassword = this.securityManagerSer.dm5Hash(data.getPassword());
            if(!user.getPassword().equals(hashedPassword))
                throw new Exception("USR-0002");
            else{

                String token = this.securityManagerSer.generateToken(user.getUsername(), user.getPassword(), new Date().getTime());

                AuthUserVTO authUser = new AuthUserVTO();
                authUser.setFullName(user.getFirstName() + " " + user.getLastName());
                authUser.setUserID(user.getId());
                authUser.setToken(token);
                authUser.setActionIDs(this.securityRep.getUserActions(user.getId()));
                authUser.setViewIDs(this.securityRep.getUserViews(user.getId()));
                return authUser;
            }
        }
    }

    public void register(RegisterDTO data) throws Exception{
        String hashedPassword = this.securityManagerSer.dm5Hash(data.getPassword());
        data.setPassword(hashedPassword);

        this.securityRep.insertUser(data);
    }
}
