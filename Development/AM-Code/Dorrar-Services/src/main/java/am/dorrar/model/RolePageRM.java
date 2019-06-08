package am.dorrar.model;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

//TODO: Fathy - Move to model/user/auth/rowMapper
public class RolePageRM implements RowMapper<Role> {

    @Override
    public Role mapRow(ResultSet rs, int rowindex) throws SQLException {

        Role role =new Role() ;
        role.setRoleid(rs.getInt("role_id"));
        role.setLabelEN(rs.getString("role_name_en"));
        String allpages =rs.getString("page_labels") ;
        String page[] =allpages.split(",");
        String allpageids =rs.getString("pageids") ;
        String pageid[] =allpageids.split(",") ;
        List<Page> pageList =new ArrayList<>() ;
        for(int counter =0 ;counter<pageid.length;counter++)
        {
              int a =Integer.parseInt(pageid[counter]);
              Page p =new Page();
              p.setId(a);
              p.setLabelEN(page[counter]);
              pageList.add(p) ;
        }
         role.setPageList(pageList);
        return role ;
    }
}
