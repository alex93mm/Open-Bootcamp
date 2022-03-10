import argon2 from "argon2";
import { allUsers } from "Database/UserBBDD";


/**
 * Metodo para comprobar si el email existe en la BBDD //TODO: Gestionar la devolucion del user (Ahorra el metodo getUserByEmail)
 * @param email Email para busqueda
 * @returns True - Si el email existe // False - El email no se ha encontrado en la base de datos
 */
export const emailExists = (email: string) => {
  let exists: boolean = false;

  allUsers.forEach(user => {
    if(user.email == email){
      exists = true;
    }
  });

  return exists;
}

// Metodos para el hasheo de password y verificacion
//! No son necesarios, pero si clarifican el uso de los middlewares en la autenticacion

export const hashPassword = (password: string) => {

  return argon2.hash(password);

}

export const verifyPassword = (hashedPassword: string, password: string) => {

  return argon2.verify(hashedPassword, password);

}
