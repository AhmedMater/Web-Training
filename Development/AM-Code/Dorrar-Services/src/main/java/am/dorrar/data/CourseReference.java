package am.dorrar.data;

//TODO: Hala - Move File to model/course/
//TODO: Hala - Rename Class to CourseRefDTO
public class CourseReference {
    private String refName;
    private  int refTypeID;
    private String refUrl;

    public CourseReference() {
    }

    public String getRefName() {
        return refName;
    }

    public void setRefName(String refName) {
        this.refName = refName;
    }

    public int getRefTypeID() {
        return refTypeID;
    }

    public void setRefTypeID(int refTypeID) {
        this.refTypeID = refTypeID;
    }

    public String getRefUrl() {
        return refUrl;
    }

    public void setRefUrl(String refUrl) {
        this.refUrl = refUrl;
    }

    @Override
    public String toString() {
        return "CourseReference{" +
                "refName='" + refName + '\'' +
                ", refTypeID='" + refTypeID + '\'' +
                ", refUrl='" + refUrl + '\'' +
                '}';
    }
}
