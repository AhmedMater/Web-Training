package com.dorrar.repository;

import com.dorrar.data.CorRefType;
import com.dorrar.data.CorRefTypeRM;
import com.dorrar.data.CourseReference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository

public class ReferenceRep {

    private JdbcTemplate jdbc;

    @Autowired
    public ReferenceRep(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public void insertCourseRef(int course_id, CourseReference data) {
        String sql = "INSERT INTO course_reference (course_id, ref_type_id, name, url) " +
                "VALUES(?,?,?,?)";
        this.jdbc.update(sql, course_id , data.getRefTypeID(),data.getRefName(), data.getRefUrl());

    }

    //TODO: Hala - Move this function to LookupRep
public List<CorRefType> findRefType(){
        String sql="SELECT id,label_en FROM cor_ref_type";
    List<CorRefType> list = this.jdbc.query(sql,new CorRefTypeRM());
        return list;
}

}
