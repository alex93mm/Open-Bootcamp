import { emailExists, hashPassword, verifyPassword } from "App/Middlewares/AuthController";
import { User } from "App/Models/User"
import { allUsers } from "Database/UserBBDD";


/**
 * Metodo que gestiona el login de manera sencilla - Comprueba email y password hasheada
 * @param email Email recibido por body
 * @param password Password recibido por body
 * @returns 1 - Usuario y pass correctos, -2 - Password incorrecta, -1 - Email no existe
 */
export const login = async (email: string, password: string) => {

  if(emailExists(email)){
    const user: User = getUserByEmail(email);

    if(await verifyPassword(user.password, password)){
      return 1;
    }
    return -2;
  }
  return -1;
}


/**
 * Metodo para registrar un usuario en la BBDD (ArrayList de usuarios)
 * @param email Email recibido por body
 * @param password Password recibida por body
 * @returns True - Usuario registrado / False - Usuario ya existe
 */
export const register = async (email: string, password: string) => {

  if(!emailExists(email)){
    allUsers.push(new User(email, await hashPassword(password)))
    return true;
  }

  return false;
}

/**
 * Metodo para retornar un usuario de la base de datos en funcion a su email.
 * @param email Email a buscar // Previa comprobacion de que el email existe.
 * @returns User obtenido de la base de datos.
 */
export const getUserByEmail = (email: string) => {

  const actualUser: User = { email: '', password: ''};

  allUsers.forEach((user) => {
    if(user.email == email){
      actualUser.email = user.email;
      actualUser.password = user.password;
    }
  })

  return actualUser;
}
