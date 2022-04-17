import java.io.File;
import java.util.ArrayList;

public class Candidate {

    private int id;
    private String name;
    private String country;
    private String city;
    private String phone;
    private String email;
    private int remote;
    private int transfer;
    private File image;
    private File cv;
    private ArrayList<Tag> tags;

    public Candidate() {
    }

    public Candidate(int id, String name, String country, String city, String phone, String email, int remote, int transfer, File image, File cv, ArrayList<Tag> tags) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.city = city;
        this.phone = phone;
        this.email = email;
        this.remote = remote;
        this.transfer = transfer;
        this.image = image;
        this.cv = cv;
        this.tags = tags;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getRemote() {
        return remote;
    }

    public void setRemote(int remote) {
        this.remote = remote;
    }

    public int getTransfer() {
        return transfer;
    }

    public void setTransfer(int transfer) {
        this.transfer = transfer;
    }

    public File getImage() {
        return image;
    }

    public void setImage(File image) {
        this.image = image;
    }

    public File getCv() {
        return cv;
    }

    public void setCv(File cv) {
        this.cv = cv;
    }

    public ArrayList<Tag> getTags() {
        return tags;
    }

    public void setTags(ArrayList<Tag> tags) {
        this.tags = tags;
    }
}
