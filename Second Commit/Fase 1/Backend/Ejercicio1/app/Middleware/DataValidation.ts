import { allUsers } from "Database/UsersBBDD";

export const emailExists = (data, lineNumber) => {

  let exists: boolean = false;

  allUsers.forEach((user) => {
    if(user.email == data.email){
      exists = true;
      console.error(`Error en la linea ${lineNumber}: El email '${data.email}' ya existe`);
    }
  })

  return exists;

}

export const lineFormatCorrect = (data, lineNumber) => {

  const regex: string = "^[^@]+@[^@]+\.[a-zA-Z]{2,}$";

  if((data.email != null && data.email != '' && data.email.match(regex)) &&
    (data.name != null && data.name != '') &&
    (data.username != null && data.username != '')){
      return true;
    }

  console.error(`Error en la linea ${lineNumber}: Linea mal formada `)
  return false;

}
