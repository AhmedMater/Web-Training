package com.dorrar.service;


import com.dorrar.model.Role;
import com.dorrar.repository.LookupRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LookupSer {

    @Autowired
    private LookupRep rep ;
    public LookupSer(LookupRep rep) {
        this.rep =rep ;
    }

    public List<Role> getAllRoles()
    {
        List<Role> roles =new ArrayList<>();
        for(Role role: rep.getRoleActions() )
            roles.add(role);

        for(Role role: rep.getRolePages() ){
            boolean isFound = false;
            for(Role r:roles)
                if(role.getRoleid() == r.getRoleid()){
                    isFound = true;
                    r.setPageList(role.getPageList());
                    break;
                }
            if(!isFound)
                roles.add(role);
        }
        return roles ;
    }







}
