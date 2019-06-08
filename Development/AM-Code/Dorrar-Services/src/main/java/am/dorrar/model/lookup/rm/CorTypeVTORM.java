package am.dorrar.model.lookup.rm;

import com.dorrar.model.lookup.CorType;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CorTypeVTORM implements RowMapper<CorType> {
    @Override
    public CorType mapRow(ResultSet rs, int rowIndex) throws SQLException {
        CorType type = new CorType();
        type.setId(rs.getInt("id"));
        type.setLabelEN(rs.getString("label_en"));
        return type;
    }
}
