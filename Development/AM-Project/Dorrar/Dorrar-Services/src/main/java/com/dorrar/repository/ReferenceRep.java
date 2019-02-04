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
    public  ReferenceRep(JdbcTemplate jdbc){
        this.jdbc=jdbc;
    }
    public void insertNewCourse(CourseReference data ){
        String sql ="INSERT INTO reference (referenceName  ,referenceType, referenceUrl) VALUES(?,?,?)";
        this.jdbc.update(sql,data.getreferenceName(),data.getreferenceType(),data.getreferenceUrl());

    }
    public void insertNewRef(CorRefType data ){
        String Sql ="INSERT INTO ref-type (id  ,labelEN) VALUES(?,?)";

    }
}
