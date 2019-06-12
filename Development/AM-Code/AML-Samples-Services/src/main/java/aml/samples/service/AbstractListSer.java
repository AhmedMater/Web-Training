package aml.samples.service;

import aml.samples.repository.AbstractListRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AbstractListSer {

    private AbstractListRep abstractListRep;

    @Autowired
    public AbstractListSer(AbstractListRep abstractListRep){
        this.abstractListRep = abstractListRep;
    }
}
