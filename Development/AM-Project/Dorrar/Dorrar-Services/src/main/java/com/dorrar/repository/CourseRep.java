package com.dorrar.repository;

import com.dorrar.model.course.CorMainDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CourseRep {
    private JdbcTemplate jdbc ;
    @Autowired
    public CourseRep(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }
    //TODO: Youssef - should be moved to CourseRep
    public void createNewCourse (CorMainDetail data){
        String sql = "INSERT INTO cor_main_details(name, duration , start_date, description" +
                " , type_id , level_id ) Values (?,?,?,?,?,?)";

        this.jdbc.update(sql , data.getCourseName(),data.getDuration(),data.getStartDate()
                ,data.getDescription(),data.getCorTypeID(),data.getCorLevelID());
    }

}
