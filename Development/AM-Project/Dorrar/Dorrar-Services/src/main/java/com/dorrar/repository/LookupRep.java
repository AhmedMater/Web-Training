package com.dorrar.repository;


import com.dorrar.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class LookupRep {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public LookupRep(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    public List<Role> getRoleActions() {
        String sql =
                "SELECT  ar.id as role_id , ar.label_en  as role_name_en, " +
                        "group_concat( aa.label_en separator ',') as role_actions,   " +
                        "   group_concat( aa.id separator ',') as action_ids" +
                        "               FROM role_action ra " +
                        "               LEFT JOIN auth_role ar ON ra.role_id = ar.id" +
                        "               LEFT JOIN auth_action aa ON ra.action_id = aa.id" +
                        "   group by ra.role_id ;";
        RowMapper<Role> rowMapper = new RoleActionRM();
        List<Role> roleActions = this.jdbcTemplate.query(sql, rowMapper);
        return roleActions;

    }

    public List<Role> getRolePages() {
        String sql = "SELECT ar.id as role_id , ar.label_en as role_name_en,     " +
                "                group_concat( ap.label_en separator ',') as page_labels, " +
                "               group_concat(ap.id separator ',')  as pageids" +
                "               FROM role_page rp" +
                "               LEFT JOIN auth_role ar ON rp.role_id = ar.id" +
                "   LEFT JOIN auth_page ap ON rp.page_id = ap.id" +
                "               group by rp.role_id;";

        RowMapper<Role> rowMapper2 = new RolePageRM();
        List<Role> rolePages = this.jdbcTemplate.query(sql, rowMapper2);
        return rolePages;
    }

    //TODO: Fathy - These Functions should be in UserRep
    public List<Action> getUserActions(int userID) {
        // userID= 1 ;
        String sql = "SELECT aa.id , aa.label_en as user_actions FROM auth_user_action ua" +
                "LEFT JOIN auth_user au ON ua.user_id = au.id " +
                "LEFT JOIN auth_action aa ON ua.action_id = aa.id " +
                //TODO: Fathy - We pass Parameters using queryForObject function
                "WHERE ua.user_id =" + userID + ";";
        RowMapper<Action> userActionRM = new UserActionsRM();
        List<Action> userActionsList = this.jdbcTemplate.query(sql, userActionRM);
        return userActionsList;
    }


    //TODO: Fathy - These Functions should be in UserRep
    public List<Page> getUserPage(int userID) {
        // userID =1 ;
        String sql = "SELECT ap.id ,   ap.label_en as user_pages FROM auth_user_page up" +
                "LEFT JOIN auth_user au ON up.user_id = au.id " +
                "LEFT JOIN auth_page ap ON up.page_id = ap.id " +
                //TODO: Fathy - We pass Parameters using queryForObject function
                "WHERE up.user_id =" + userID + ";";
        RowMapper<Page> userPageRM = new UserPageRM();
        List<Page> userPagesList = this.jdbcTemplate.query(sql, userPageRM);
        return userPagesList;
    }

}


