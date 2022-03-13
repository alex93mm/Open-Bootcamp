import User from "App/Models/User";
import argon2 from "argon2";

export const login = async (email: string, password: string) => {

  const user: Promise<User | null> = User.findBy("email", email)

  return await user.then(async (user) => {
    if(user != null){
      if(await argon2.verify(user.password, password)){
        return 1;
      } else {
        return -2;
      }
    } else {
      return -1;
    }
  })

}


export const register = async (email: string, password: string) => {

  const user: Promise<User | null> = User.findBy("email", email)

  const exampleUser: User = new User()

  return await user.then(async (user) => {
    if(user == null){
      User.create({id: 10,name: "alejandro", email, password, image:"src/none",role: "user"});
      return true;
    } return false;
  })


}
