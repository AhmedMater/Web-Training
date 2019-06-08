package am.dorrar.model;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserVTORM implements RowMapper<UserVTO> {
    @Override
    public UserVTO mapRow(ResultSet rs, int rowIndex) throws SQLException {
       UserVTO data=new UserVTO();
       String firstName=rs.getString("first_name");
       String lastName=rs.getString("last_name");
       data.setFullName(firstName + " " +lastName);
        return data;
    }
}
