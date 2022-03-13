// ? El controlador es el punto de union entre el service y el endpoint de la api

import { obtainAllUsers } from "App/Service/UserService";

export const getAllUsers = () => {
  return  obtainAllUsers();
}
