package com.dorrar.repository;

import com.dorrar.data.CorRefType;
import com.dorrar.data.CourseReference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository

public class ReferenceRep {

    private JdbcTemplate jdbc;

    @Autowired
    public ReferenceRep(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public void insertCourseRef(int course_id, CourseReference data) {
        String sql = "INSERT INTO reference (course_id ,referenceName  ,ref_type_id, referenceUrl) VALUES(?,?,?,?)";
        this.jdbc.update(sql, course_id ,data.getreferenceName(), data.getreferenceType(), data.getreferenceUrl());

    }



}
