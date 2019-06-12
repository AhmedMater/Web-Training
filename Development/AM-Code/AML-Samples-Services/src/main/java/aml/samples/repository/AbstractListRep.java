package aml.samples.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class AbstractListRep {
    private JdbcTemplate jdbc ;

    @Autowired
    public AbstractListRep(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }
}
