package com.dorrar.model.lookup.rm;

import com.dorrar.model.lookup.CorLevel;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CorLevelVTORM implements RowMapper<CorLevel> {
    @Override
    public CorLevel mapRow(ResultSet rs, int rowIndex) throws SQLException {
        CorLevel level = new CorLevel();
        level.setId(rs.getInt("id"));
        level.setLabelEN(rs.getString("label_en"));
        return level;
    }
}
