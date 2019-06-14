package aml.samples.repository;

import aml.db.DBService;
import aml.samples.data.abstractList.RoleVTO;
import aml.samples.data.abstractList.UserVTO;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class AbstractListRep {
    private JdbcTemplate jdbc ;
    private DBService dbService ;

    @Autowired
    public AbstractListRep(JdbcTemplate jdbc, DBService dbService) {
        this.jdbc = jdbc;
        this.dbService = dbService;
    }

    public List<UserVTO> findAll(){
        String selectSQL = "SELECT u.id, u.username, u.full_name_ar, u.full_name_en, r.title_ar AS role_ar, " +
                "r.title_en AS role_en, u.email, u.is_active, u.expiry_date, u.created_on, " +
                "floor(datediff(curdate(), u.birth_date) / 365) AS age, u.last_updated_on, u.about_brief ";

        String from = "FROM aml_users u " +
                "LEFT JOIN aml_user_role ur ON ur.user_id = u.id AND ur.is_default = 1 " +
                "LEFT JOIN aml_role r ON ur.role_id = r.id";

        String sql = selectSQL + " " + from;

        List<UserVTO> data = this.jdbc.query(sql, new RowMapper<UserVTO>() {
            @Override
            public UserVTO mapRow(ResultSet resultSet, int i) throws SQLException {
                UserVTO record = new UserVTO();
                record.setFullNameAR(resultSet.getString("u.full_name_ar"));
                record.setFullNameEN(resultSet.getString("u.full_name_en"));
                record.setEmail(resultSet.getString("u.email"));
                record.setExpiryDate(resultSet.getString("u.expiry_date"));
                record.setIsActive(dbService.toBoolean(resultSet.getInt("u.is_active")));
                record.setRole(new RoleVTO(resultSet.getString("role_ar"), resultSet.getString("role_en")));
                return record;
            }
        });
        return data;
    }

    public int findAllCount(){
        String selectSQL = "SELECT count(*) AS record_count";

        String from = "FROM aml_users u " +
                "LEFT JOIN aml_user_role ur ON ur.user_id = u.id AND ur.is_default = 1 " +
                "LEFT JOIN aml_role r ON ur.role_id = r.id";

        String sql = selectSQL + " " + from;

        Integer total = this.jdbc.query(sql, new RowMapper<Integer>() {
            @Override
            public Integer mapRow(ResultSet resultSet, int i) throws SQLException {
                return resultSet.getInt("record_count");
            }
        }).get(0);

        return total;
    }
}
