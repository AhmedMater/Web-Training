package am.idas.model.authorization;

public enum AuthViews {
    VIEW_COURSE(1), CREATE_COURSE(2), CREATE_TRANSLATION(3), VIEW_ATTENDENCE(5), VIEW_GRADE(6);
    private int id;

    AuthViews(int id){
        this.id = id;
    }

    public int getID(){ return id; }
}
