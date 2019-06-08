package am.dorrar.repository;

import com.dorrar.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRep {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public UserRep(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Action> getUserActions(int userID) {
        String sql = "SELECT aa.id , aa.label_en as user_actions FROM auth_user_action ua " +
                "LEFT JOIN auth_user au ON ua.user_id = au.id " +
                "LEFT JOIN auth_action aa ON ua.action_id = aa.id " +
                //TODO: Fathy - We pass Parameters using queryForObject function
                "WHERE ua.user_id = ?";
        RowMapper<Action> userActionRM = new UserActionsRM();
        List<Action> userActionsList = this.jdbcTemplate.query(sql,userActionRM,userID);
        return userActionsList;
    }

    public List<Page> getUserPages(int userID) {
        String sql = "SELECT ap.id ,   ap.label_en as user_pages FROM auth_user_page up" +
                "LEFT JOIN auth_user au ON up.user_id = au.id " +
                "LEFT JOIN auth_page ap ON up.page_id = ap.id " +
                //TODO: Fathy - We pass Parameters using queryForObject function
                "WHERE up.user_id =" + userID + ";";
        RowMapper<Page> userPageRM = new UserPageRM();
        List<Page> userPagesList = this.jdbcTemplate.query(sql ,userPageRM) ;
        return userPagesList;
    }

    public List<UserVTO> findAll(){

        String sql="SELECT first_name,last_name,birthdate,college_id,university_id," +
                "country_id FROM personal_info";

        List<UserVTO> users= this.jdbcTemplate.query(sql,new UserVTORM());
        return users;

    }

}
