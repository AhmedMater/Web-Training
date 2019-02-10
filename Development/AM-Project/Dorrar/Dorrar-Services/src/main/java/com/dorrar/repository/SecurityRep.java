package com.dorrar.repository;

import com.dorrar.controller.UserRowMapper;
import com.dorrar.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
public class SecurityRep {

    private JdbcTemplate jdbcTemplate;

    @Autowired
    public SecurityRep(JdbcTemplate Jdbc) {
        this.jdbcTemplate = Jdbc;
    }

    public User getUserByUserName(String userName) {
        String sql = "select * from users where user_name = ?;";
        RowMapper<User> rowMapper = new UserRowMapper();
        User user = jdbcTemplate.queryForObject(sql, rowMapper, userName);
        return user;
    }

    public boolean userExist(String userName) {
        String sql = "select count(*) from users where user_name = ?;";
//        RowMapper<User> rowMapper = new UserRowMapper();
        int count = jdbcTemplate.queryForObject(sql, Integer.class, userName);
        if(count == 0) {
            return false;
        } else {
            return true;
        }
    }
}