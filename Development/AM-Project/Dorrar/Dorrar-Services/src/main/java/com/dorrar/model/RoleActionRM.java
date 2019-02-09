package com.dorrar.model;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

//TODO: Fathy - Move to model/user/auth/rowMapper
public class RoleActionRM implements RowMapper<Role> {

    @Override
    public Role mapRow(ResultSet rs, int rowindex) throws SQLException {
        Role role =new Role() ;
        role.setRoleid(rs.getInt("role_id"));
        role.setLabelEN(rs.getString("role_name_en"));
        String allActionsLabels_EN = rs.getString("role_actions");
        String[] actionsSplit = allActionsLabels_EN.split(",");
        String allactionids =rs.getString("action_ids") ;
        String[] actionids=allactionids.split(",") ;
        List<Action> actionList = new ArrayList<>();
        for(int count =0 ;count<actionids.length; count++ )
        {
            int a =Integer.parseInt(actionids[count]) ;
            Action aa =new Action();
            aa.setId(a);
            aa.setLabelEN(actionsSplit[count]);
            actionList.add(aa) ;
        }




        role.setActionList(actionList);



        return role;
    }
}
