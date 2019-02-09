package com.dorrar.model;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserActionsRM implements RowMapper<Action> {
    @Override
    public Action mapRow(ResultSet rs, int rowindex) throws SQLException {
        Action action =new Action() ;
        action.setId(rs.getInt("id"));
        action.setLabelEN(rs.getString("user_actions"));
        return action;
    }
}
