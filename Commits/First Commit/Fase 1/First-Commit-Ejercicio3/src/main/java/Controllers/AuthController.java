package Controllers;
import Entities.User;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.util.ArrayList;
import java.util.Base64;

public class AuthController {
    private ArrayList<User> users = new ArrayList();
    private String hashPass;

    //Registro de usuarios en la bbdd local
    public boolean register(String email, String password){
        //Comprueba si existe el email en la bbdd
        for(User user : users){
            if(user.getEmail().equalsIgnoreCase(email)){
                return false;
            }
        }
        //Si no existe codifica la pass y la añade a la bbdd
        try {
            hashPass = argon2(password);
        } catch (Exception e) {
            e.printStackTrace();
        }
        users.add(new User(email, hashPass));
        return true;
    }

    public int login(String email, String password){
        //Comprobamos si el email esta en la bbdd
        for(User user : users){
            if(user.getEmail().equalsIgnoreCase(email)){
                //Si la pass coincide devuelde 1, si no coincide devuelve -2
                if(verifyPassword(user.getPassword(), password)){
                    return 1;
                } else {
                    return -2;
                }
            }
        }
        //Si el email no esta registrado devuelve -1
        return -1;
    }

    //Codificicacion de la password en argon2
    private String argon2(String password){
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        return argon2.hash(4, 1024 * 1024, 8, password.getBytes());
    }

    //Verificar que la pass es correcta
    private boolean verifyPassword(String hash, String password){
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        return argon2.verify(hash, password.getBytes());
    }
//    private String sha256(String text, String key) throws Exception{
//        SecretKeySpec sk = new SecretKeySpec(key.getBytes(), "hMACsha256");
//        Mac mac = Mac.getInstance("HmacSHA256");
//        mac.init(sk);
//        byte[] rawHmac = mac.doFinal(text.getBytes());
//        return new String(Base64.getEncoder().encode(rawHmac));
//    }
}
