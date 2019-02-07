package com.dorrar.detailsData;

public class OptionDropList {
    String typeLabel ;
    int typeId ;

    public OptionDropList( int typeId , String typeLabel) {
        this.typeLabel = typeLabel;
        this.typeId = typeId;
    }

    public String getTypeLabel() {
        return typeLabel;
    }

    public void setTypeLabel(String typeLabel) {
        this.typeLabel = typeLabel;
    }

    public int getTypeId() {
        return typeId;
    }

    public void setTypeId(int typeId) {
        this.typeId = typeId;
    }
}
