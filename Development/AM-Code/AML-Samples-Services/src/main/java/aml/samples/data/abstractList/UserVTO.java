package aml.samples.data.abstractList;

import java.io.Serializable;

public class UserVTO implements Serializable {
    private String fullNameAR;
    private String fullNameEN;
    private boolean isActive;
    private String email;
    private String expiryDate;
    private RoleVTO role;

    public UserVTO() {
    }

    public String getFullNameAR() {
        return fullNameAR;
    }

    public void setFullNameAR(String fullNameAR) {
        this.fullNameAR = fullNameAR;
    }

    public String getFullNameEN() {
        return fullNameEN;
    }

    public void setFullNameEN(String fullNameEN) {
        this.fullNameEN = fullNameEN;
    }

    public boolean getIsActive() {
        return isActive;
    }

    public void setIsActive(boolean isActive) {
        isActive = isActive;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(String expiryDate) {
        this.expiryDate = expiryDate;
    }

    public RoleVTO getRole() {
        return role;
    }

    public void setRole(RoleVTO role) {
        this.role = role;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("UserVTO{");
        sb.append("fullNameAR='").append(fullNameAR).append('\'');
        sb.append(", fullNameEN='").append(fullNameEN).append('\'');
        sb.append(", isActive=").append(isActive);
        sb.append(", email='").append(email).append('\'');
        sb.append(", expiryDate='").append(expiryDate).append('\'');
        sb.append(", role=").append(role);
        sb.append('}');
        return sb.toString();
    }
}
