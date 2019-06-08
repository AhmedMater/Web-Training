package am.dorrar.model.lookup;


//TODO: Manar - Move to /model/lookup/
public class College {
    private int id;
    private String labelEN;

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

    public College(){

    }

    public College(int id, String labelEN) {
        this.id = id;
        this.labelEN = labelEN;
    }

    @Override
    public String toString() {
        return "College{" +
                "id=" + id +
                ", labelEN='" + labelEN + '\'' +
                '}';
    }
}
