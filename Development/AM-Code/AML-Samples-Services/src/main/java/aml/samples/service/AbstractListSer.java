package aml.samples.service;

import aml.data.ResultSet;
import aml.samples.data.abstractList.UserVTO;
import aml.samples.repository.AbstractListRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AbstractListSer {

    private AbstractListRep abstractListRep;

    @Autowired
    public AbstractListSer(AbstractListRep abstractListRep){
        this.abstractListRep = abstractListRep;
    }

    public ResultSet<UserVTO> findAll(){
        List<UserVTO> data = this.abstractListRep.findAll();
        int total = this.abstractListRep.findAllCount();

        ResultSet<UserVTO> resultSet = new ResultSet<>();
        resultSet.setData(data);
        resultSet.setTotal(total);

        return resultSet;
    }
}
