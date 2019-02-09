package com.dorrar.detailsData;

//TODO: Youssef - Rename to CorLevel
//TODO: Youssef - Move to /model/lookup/
public class LevelVto {
    //TODO: Youssef - Rename to id
    private int levelID ;
    //TODO: Youssef - Rename to labelEN
    private String levelLabel ;

    public LevelVto() {
    }

    public int getLevelID() {
        return levelID;
    }

    public void setLevelID(int levelID) {
        this.levelID = levelID;
    }

    public String getLevelLabel() {
        return levelLabel;
    }

    public void setLevelLabel(String levelLabel) {
        this.levelLabel = levelLabel;
    }
}
