package am.dorrar.model.course;

import com.dorrar.data.CourseReference;
import com.dorrar.model.SectionData;

import java.io.Serializable;
import java.util.ArrayList;

public class CourseData implements Serializable {
    ArrayList<CourseReference> references;
    ArrayList<SectionData> sections ;
    public CourseData() {
    }

    public ArrayList<CourseReference> getReferences() {
        return references;
    }

    public void setReferences(ArrayList<CourseReference> references) {
        this.references = references;
    }

    public ArrayList<SectionData> getSections() {
        return sections;
    }

    public void setSections(ArrayList<SectionData> sections) {
        this.sections = sections;
    }

    @Override
    public String toString() {
        return "CourseData{" +
                "sections=" + sections +
                '}';
    }
}
