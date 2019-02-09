package com.dorrar.repository;

import com.dorrar.detailsData.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class DetailsRep {

    private JdbcTemplate jdbc ;

    @Autowired
    public DetailsRep(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public void createNewCourse (detailsData data){
        String sql = "INSERT INTO cor_main_details(name, duration , start_date, description" +
                " , type_id , level_id ) Values (?,?,?,?,?,?)";

        this.jdbc.update(sql , data.getCourseName(),data.getDuration(),data.getStartDate()
        ,data.getDescription(),data.getTypeID(),data.getLevelID());
    }
    public List<TypeVto> findTypeListData() {
        String sql = "SELECT id , label_en FROM cor_type";
        List<TypeVto> typeList = this.jdbc.query(sql, new TypeVtoRM());
        return typeList;
    }

    public List<LevelVto> findLevelListData() {
        String sql = "SELECT id , label FROM cor_level";
        List<LevelVto> levelList = this.jdbc.query(sql, new LevelVtoRM());
        return levelList;
    }
}
