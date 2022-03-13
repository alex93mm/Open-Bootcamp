import { login, register } from "App/Services/UserService";

// ? Controllers from Services to endpoints

export const registerUser = (email: string, password: string) => {
  return register(email, password);
}

export const loginUser = (email: string, password: string) => {
  return login(email, password);
}
