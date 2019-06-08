package am.dorrar.model.enums;

public enum Actions {
    view_course_details(1), VIEW_ASSIGNMENT(2) ;

    private int id;

    Actions(int id){
        this.id = id;
    }

    public int getID() {
        return id;
    }
}
