import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfWriter;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;

public class PDFCreator {

    Font textFont = new Font(Font.FontFamily.HELVETICA, 12, Font.NORMAL);
    Font titleFont = new Font(Font.FontFamily.HELVETICA, 24, Font.BOLD);
    Font subtitleFont = new Font(Font.FontFamily.HELVETICA, 18, Font.BOLD);

    public void create(Candidate candidate){
        Document document = new Document();
        try{
            PdfWriter.getInstance(document, new FileOutputStream(candidate.getCv()));
        } catch (DocumentException e) {
            System.err.println("Error al generar documento");
        } catch (FileNotFoundException e) {
            System.err.println("Error al encontrar el archivo");
        }

        document.open();

        Paragraph title = new Paragraph(new Chunk("Curriculum Vitae de " + candidate.getName(), titleFont));
        title.setAlignment(Element.ALIGN_CENTER);

        Paragraph personalData = new Paragraph(new Chunk("Datos personales"+ "\n", subtitleFont));
        personalData.add(new Phrase("Nombre Completo: " + candidate.getName() + "\n", textFont));
        personalData.add(new Phrase("Email: " + candidate.getEmail() + "\n", textFont));
        personalData.add(new Phrase("Telefono: " + candidate.getPhone()+ "\n", textFont));
        personalData.add(new Phrase("Domicilio: " + candidate.getCity() + "(" + candidate.getCountry() + ")" + "\n", textFont));

        Paragraph skills = new Paragraph(new Chunk("Habilidades"+ "\n", subtitleFont));
        for(Tag tag : candidate.getTags()){
            skills.add(new Phrase(tag.getName()+ "\n", textFont));
        }

        try {
            document.add(title);
            document.add(personalData);
            document.add(skills);
        } catch (DocumentException e) {
            System.err.println("Error al grabar contenido en el documento");
        }

        document.close();
    }
}
