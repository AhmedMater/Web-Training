package com.ism.model.user.rm;

import com.ism.model.user.UserVTO;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserVTORM implements RowMapper<UserVTO> {
    @Override
    public UserVTO mapRow(ResultSet rs, int rowNum) throws SQLException {
        UserVTO data = new UserVTO();
        data.setId(rs.getInt("id"));
        data.setFirstName(rs.getString("first_name"));
        data.setLastName(rs.getString("last_name"));
        data.setUsername(rs.getString("username"));
        data.setPassword(rs.getString("password"));
        data.setEmail(rs.getString("email"));

        return data;
    }
}
