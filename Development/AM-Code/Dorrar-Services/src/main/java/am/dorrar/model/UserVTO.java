package am.dorrar.model;

import java.io.Serializable;

public class UserVTO implements Serializable {
    private String fullName;

    public UserVTO() {
    }

    public String getFullName(String s) {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }
}
