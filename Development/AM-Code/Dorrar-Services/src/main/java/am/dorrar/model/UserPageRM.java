package am.dorrar.model;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserPageRM implements RowMapper<Page> {
    @Override
    public Page mapRow(ResultSet rs, int rowindex) throws SQLException {
        Page page =new Page() ;
        page.setId(rs.getInt("id"));
        page.setLabelEN(rs.getString("user_pages"));
        return page ;
    }
}
