package am.dorrar.data;

import java.io.Serializable;

//TODO: Hala - Move File to model/lookup/
public class CorRefType  implements Serializable {
    private  int id;
   private String labelEN;

    public CorRefType() {
    }

    public CorRefType(int id, String labelEN) {
        this.id = id;
        this.labelEN = labelEN;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLabelEN() {
        return labelEN;
    }

    public void setLabelEN(String labelEN) {
        this.labelEN = labelEN;
    }
}


