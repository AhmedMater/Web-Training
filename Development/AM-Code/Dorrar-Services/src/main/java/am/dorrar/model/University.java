package am.dorrar.model;

//TODO: Manar - Move to /model/lookup/
public class University {
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


    public University(){

    }
    public University(int id, String labelEN) {
        this.id = id;
        this.labelEN = labelEN;
    }

    @Override
    public String toString() {
        return "University{" +
                "id=" + id +
                ", labelEN='" + labelEN + '\'' +
                '}';
    }
}
