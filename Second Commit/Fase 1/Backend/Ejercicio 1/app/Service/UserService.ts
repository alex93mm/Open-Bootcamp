import { emailExists, lineFormatCorrect } from "App/Middleware/DataValidation";
import csv from 'csv-parser';
import { allUsers } from "Database/UsersBBDD";
import fs from 'fs';



export const obtainAllUsers = () => {

  let lineNumber = 1;
  let totalLineErrors = 0;
  let totalLineProcessed = 0;

  fs.createReadStream('database/users.csv')
  .pipe(csv([ 'email', 'name', 'username']))
  .on('data', (data) => {
    if(!emailExists(data, lineNumber) && lineFormatCorrect(data, lineNumber)){
        allUsers.push(data);
        totalLineProcessed++;
    } else {
      totalLineErrors++;
    }
    lineNumber++;
  })
  .on('end', () => {
    console.log(`Total de lineas procesadas correctamente: ${totalLineProcessed}`);
    console.log(`Total de lineas productoras de error: ${totalLineErrors}`);
  });

  return allUsers;

}
