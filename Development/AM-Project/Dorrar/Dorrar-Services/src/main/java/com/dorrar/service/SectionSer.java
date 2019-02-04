package com.dorrar.service;
import com.dorrar.model.SectionData;
import com.dorrar.repository.SectionRep;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class SectionSer {

    private SectionRep repository ;
    public void sectionList (ArrayList<SectionData> sec ){
        for (int i =1 ; i<sec.size() ;i++ )
        {

//            this.repository.insertNewSection(sec);
            System.out.print("data inserted");

        }

    }

}
