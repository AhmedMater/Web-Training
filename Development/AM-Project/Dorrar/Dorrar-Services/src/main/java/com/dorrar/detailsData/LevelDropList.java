package com.dorrar.detailsData;

public class LevelDropList {
    String levelLabel ;
    int levelId ;

    public LevelDropList(int levelId ,String levelLabel) {
        this.levelLabel = levelLabel;
        this.levelId = levelId;
    }

    public String getLevelLabel() {
        return levelLabel;
    }

    public void setLevelLabel(String levelLabel) {
        this.levelLabel = levelLabel;
    }

    public int getLevelId() {
        return levelId;
    }

    public void setLevelId(int levelId) {
        this.levelId = levelId;
    }
}
