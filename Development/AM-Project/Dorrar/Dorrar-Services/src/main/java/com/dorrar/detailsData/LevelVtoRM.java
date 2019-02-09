package com.dorrar.detailsData;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class LevelVtoRM implements RowMapper<LevelVto> {
    @Override
    public LevelVto mapRow(ResultSet rs, int rowIndex) throws SQLException {
        LevelVto level = new LevelVto();
        level.setLevelID(rs.getInt("id"));
        level.setLevelLabel(rs.getString("label"));
        return level;
    }
}
