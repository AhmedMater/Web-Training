package com.dorrar.repository;


import com.dorrar.model.Role;
import com.dorrar.model.RoleActionRM;
import com.dorrar.model.RolePageRM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
// TODO: Fathy - Should be LookupRep
public class LookupRep {
    private final JdbcTemplate jdbcTemplate ;
    @Autowired
    public LookupRep(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }



    public  List<Role> getRoleActions() {

        //TODO: Fathy - Start - This Should be in Separate Function getRoleActions in Repository
        String sql =
                "SELECT  ar.id as role_id , ar.label_en  as role_name_en, group_concat( aa.label_en separator ',') as role_actions,   \n" +
                        "\t\t\t   group_concat( aa.id separator ',') as action_ids\n" +
                        "               FROM role_action ra \n" +
                        "               LEFT JOIN auth_role ar ON ra.role_id = ar.id\n" +
                        "               LEFT JOIN auth_action aa ON ra.action_id = aa.id\n" +
                        "\t\t\t   group by ra.role_id ;";
        RowMapper<Role> rowMapper = new RoleActionRM();
        List<Role> roleActions = this.jdbcTemplate.query(sql, rowMapper);
        return roleActions ;
        //TODO: Fathy - End - This Should be in Separate Function

    }

    public  List<Role> getRolePages()
    {
        //TODO: Fathy - Start - This Should be in Separate Function getRolePages in Repository
        String sql2 ="SELECT ar.id as role_id , ar.label_en as role_name_en,     \n" +
                "                group_concat( ap.label_en separator ',') as page_labels, \n" +
                "               group_concat(ap.id separator ',')  as pageids\n" +
                "               FROM role_page rp\n" +
                "               LEFT JOIN auth_role ar ON rp.role_id = ar.id\n" +
                "\t\t\t   LEFT JOIN auth_page ap ON rp.page_id = ap.id\n" +
                "               group by rp.role_id;" ;

        RowMapper<Role> rowMapper2 =new RolePageRM() ;
        List<Role> rolePages =this.jdbcTemplate.query(sql2, rowMapper2);
        return rolePages ;
        //TODO: Fathy - End - This Should be in Separate Function getRolePages
    }

    }


