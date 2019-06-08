package am.dorrar.model;

import java.io.Serializable;

//TODO: Manar - Move to /model/user/
//TODO: Manar - Rename to UserVTO
public class UserList  implements Serializable {
    //TODO: should be camelcase
    private String fullname;
    private String college;
    private String university;
    private String country;
    //TODO: should be camelcase & should be birthDate Only
    private Integer birthdatefrom;
    private Integer birthdateto;

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getCollege() {
        return college;
    }

    public void setCollege(String college) {
        this.college = college;
    }

    public String getUniversity() {
        return university;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Integer getBirthdatefrom() {
        return birthdatefrom;
    }

    public void setBirthdatefrom(Integer birthdatefrom) {
        this.birthdatefrom = birthdatefrom;
    }

    public Integer getBirthdateto() {
        return birthdateto;
    }

    public void setBirthdateto(Integer birthdateto) {
        this.birthdateto = birthdateto;
    }

    public UserList() {

    }

    @Override
    public String toString() {
        return "UserList{" +
                "fullname='" + fullname + '\'' +
                ", college='" + college + '\'' +
                ", university='" + university + '\'' +
                ", country='" + country + '\'' +
                ", birthdatefrom=" + birthdatefrom +
                ", birthdateto=" + birthdateto +
                '}';
    }
}
