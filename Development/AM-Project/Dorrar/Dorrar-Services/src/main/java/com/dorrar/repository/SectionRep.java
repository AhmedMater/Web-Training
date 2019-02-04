package com.dorrar.repository;

import com.dorrar.CourseData;
import com.dorrar.model.SectionData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class SectionRep {
    private JdbcTemplate jdbc ;

    @Autowired
    public SectionRep(JdbcTemplate jdbc)
    {
        this.jdbc = jdbc ;
    }

    //TODO: Function Argument is SectionData
    public void insertNewSection (SectionData data){

        String sql = "INSERT INTO sections (name , description) value (?,?)";

        this.jdbc.update(sql , data.getName(),data.getDescription());

    }

}
