// ? Modelo de datos de nuestra app, unicamente los usuarios recibidos en el archivo csv

export class User {
  email: string;
  name: string;
  username: string;

  constructor(email: string, name: string, username: string){
    this.email = email;
    this.name = name;
    this.username = username;
  }
}
