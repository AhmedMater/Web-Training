package am.idas.model.security;

import java.io.Serializable;
import java.util.List;

public class AuthUserVTO implements Serializable {
    private int userID;
    private String fullName;
    private String token;
    private List<Integer> actionIDs;
    private List<Integer> viewIDs;

    public AuthUserVTO() {
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public List<Integer> getActionIDs() {
        return actionIDs;
    }

    public void setActionIDs(List<Integer> actionIDs) {
        this.actionIDs = actionIDs;
    }

    public List<Integer> getViewIDs() {
        return viewIDs;
    }

    public void setViewIDs(List<Integer> viewIDs) {
        this.viewIDs = viewIDs;
    }
}
