import com.sparkpost.Client;
import com.sparkpost.exception.SparkPostException;

public class Mail {

    private Client client;

    public void send(){
        String API_KEY = "f529cbf174f1b2a4d36d070b04082e6562c504fe";
        Client client = new Client(API_KEY);
        try {
            client.sendMessage(
                    "hola@ammdev.online",
                    "ammwebdevelop@gmail.com",
                    "BIENVENIDO",
                    "Por fin te has registrado",
                    "<b>Esto es un texto en HTML</b>");
        } catch (SparkPostException e) {
            e.printStackTrace();
        }
    }

}
