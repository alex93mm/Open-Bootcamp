import java.io.File;
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        PDFCreator pdf = new PDFCreator();

        ArrayList<Candidate> candidates = new ArrayList<Candidate>();
        ArrayList<Tag> tags = new ArrayList<Tag>();

        tags.add(new Tag(1, "HTML"));
        tags.add(new Tag(2, "CSS"));
        tags.add(new Tag(3, "JAVASCRIPT"));

        candidates.add(new Candidate(1,
                "Antonio Rodriguez",
                "Spain",
                "Alicante",
                "645565464",
                "alejandro93mm@gmail.com",
                1,
                1,
                null,
                new File("Curriculum_Prueba1.pdf"),
                tags));
        candidates.add(new Candidate(2,
                "Enrique Perez",
                "Spain",
                "Vigo",
                "612999999",
                "enriquerules@gmail.com",
                1,
                0,
                null,
                new File("Curriculum_Prueba2.pdf"),
                tags));

        for(Candidate candidate : candidates){
            pdf.create(candidate);
        }
    }
}
