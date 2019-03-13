package com.ism.repository;

import com.ism.model.RegisterDTO;
import com.ism.model.user.UserVTO;
import com.ism.model.user.rm.UserVTORM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SecurityRep {


    private JdbcTemplate jdbc;

    @Autowired
    public SecurityRep(JdbcTemplate jdbc){
        this.jdbc = jdbc;
    }


    public void insertUser(RegisterDTO data){
        String sql = "INSERT INTO auth_user (first_name, last_name, username, password, email) " +
                "VALUES (?, ?, ?, ?, ?)";

        this.jdbc.update(sql, data.getFirstName(), data.getLastName(), data.getUsername(),
                data.getPassword(), data.getEmail());
    }

    public UserVTO selectByUserName(String username){
        String sql = "SELECT id, first_name, last_name, username, password, email " +
                "FROM auth_user where username = ?";
        List<UserVTO> list = this.jdbc.query(sql, new UserVTORM(), username);

        return (list.size() == 0) ? null: list.get(0);
    }
}
