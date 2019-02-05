package com.dorrar.controller;

import com.dorrar.model.User;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserRowMapper implements RowMapper<User> {
    @Override
    public User mapRow(ResultSet row, int rowNum) throws SQLException {
        User user = new User();
        user.setId(row.getInt("id"));
        user.setUserName(row.getString("user_name"));
        user.setUserPassword(row.getString("user_pass"));
        user.setFirstName(row.getString("first_name"));
        user.setLastName(row.getString("last_name"));
        user.setEmail(row.getString("email"));
        user.setActive(row.getBoolean("is_active"));
        return user;
    }
}
