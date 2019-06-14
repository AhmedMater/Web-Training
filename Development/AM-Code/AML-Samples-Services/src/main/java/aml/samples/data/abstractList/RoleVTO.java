package aml.samples.data.abstractList;

import java.io.Serializable;

public class RoleVTO implements Serializable {
    private int id;
    private String titleAR;
    private String titleEN;

    public RoleVTO() {
    }

    public RoleVTO(String titleAR, String titleEN) {
        this.titleAR = titleAR;
        this.titleEN = titleEN;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitleAR() {
        return titleAR;
    }

    public void setTitleAR(String titleAR) {
        this.titleAR = titleAR;
    }

    public String getTitleEN() {
        return titleEN;
    }

    public void setTitleEN(String titleEN) {
        this.titleEN = titleEN;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("RoleVTO{");
        sb.append("id=").append(id);
        sb.append(", titleAR='").append(titleAR).append('\'');
        sb.append(", titleEN='").append(titleEN).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
