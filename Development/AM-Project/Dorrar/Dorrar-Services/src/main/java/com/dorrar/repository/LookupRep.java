package com.dorrar.repository;


import com.dorrar.model.lookup.CorLevel;
import com.dorrar.model.lookup.rm.CorLevelVTORM;
import com.dorrar.model.lookup.CorType;
import com.dorrar.model.lookup.rm.CorTypeVTORM;
import com.dorrar.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

import static java.lang.reflect.Array.newInstance;

@Repository
public class LookupRep {
    private final JdbcTemplate jdbcTemplate;
//    private JdbcTemplate jdbc ;


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


    //TODO: Youssef - should be moved to LookupRep
    public List<CorType> findTypeListData() {
        String sql = "SELECT id , label_en FROM cor_type";
        List<CorType> typeList = this.jdbcTemplate.query(sql, new CorTypeVTORM());
        return typeList;
    }

    //TODO: Youssef - should be moved to LookupRep
    public List<CorLevel> findLevelListData() {
        String sql = "SELECT id , label FROM cor_level";
        List<CorLevel> levelList = this.jdbcTemplate.query(sql, new CorLevelVTORM());
        return levelList;
    }

}


