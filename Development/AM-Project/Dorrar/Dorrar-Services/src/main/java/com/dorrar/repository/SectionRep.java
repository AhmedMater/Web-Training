package com.dorrar.repository;

import com.dorrar.model.SectionData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

@Repository
public class SectionRep {
    private JdbcTemplate jdbc ;
    @Autowired
    public SectionRep(JdbcTemplate jdbc)
    {
        this.jdbc = jdbc ;
    }

    public void insertCourseSection(int courseID , SectionData data){
        String sql = "INSERT INTO course_section ( section_name , description , course_id ) " +
                "value (?,?,?)";
        this.jdbc.update(sql ,data.getName(),data.getDescription() , courseID);
    }

}
