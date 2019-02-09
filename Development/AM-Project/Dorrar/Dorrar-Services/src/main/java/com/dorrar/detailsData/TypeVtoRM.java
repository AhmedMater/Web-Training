package com.dorrar.detailsData;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class TypeVtoRM implements RowMapper<TypeVto> {
    @Override
    public TypeVto mapRow(ResultSet rs, int rowIndex) throws SQLException {
        TypeVto type = new TypeVto();
        type.setTypeID(rs.getInt("id"));
        type.setTypeLabel(rs.getString("label_en"));
        return type;
    }
}
