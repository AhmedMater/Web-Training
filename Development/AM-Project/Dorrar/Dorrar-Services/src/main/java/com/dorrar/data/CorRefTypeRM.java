package com.dorrar.data;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

//TODO: Hala - Move File to model/lookup/rm/
public class CorRefTypeRM implements RowMapper<CorRefType> {
    @Override
    public CorRefType mapRow(ResultSet rs, int rowIndex) throws SQLException {
        CorRefType data=new CorRefType();
        data.setId(rs.getInt("id"));
        data.setLabelEN(rs.getString("label_en"));
        return data;
    }
}
