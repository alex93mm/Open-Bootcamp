import java.util.ArrayList;

public class User {

    private String userName;
    private String email;
    private String password;
    private ArrayList<Candidate> candidates;

    public User() {
    }

    public User(String userName, String email, String password, ArrayList<Candidate> candidates) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.candidates = candidates;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public ArrayList<Candidate> getCandidates() {
        return candidates;
    }

    public void setCandidates(ArrayList<Candidate> candidates) {
        this.candidates = candidates;
    }
}
