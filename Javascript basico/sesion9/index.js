
const fs = require('fs'); // estos métodos son asíncronos por defecto
const path = require('path');
let datetime = new Date();

try {
    let a = []
    a = null
    let b = a[0] /// lanza un TypeError
  }  
  catch(err) {
    if(err instanceof TypeError) {
        fs.appendFile('log_err.txt', datetime + ', Errorcito,' + err + ', ID Error\n', function (err) {
            //console.log('Error Saved!');
        });
    } 
    else {
      fs.appendFile('log_err.txt', datetime + ',Errorazo,' + err + ', ID Error\n', function (err) {
        //console.log('Error Saved!');
      });
      throw err
    }
  }

  fs.appendFile('log_accesos.txt', datetime + ',"Aquí hemos llegado bien", éxito\n', function (err) {
        //console.log('Saved!');
  });


// ---------------------
//let datetime = new Date()
//console.log("Hemos llegado a este punto en fecha " + datetime);


//node index.js > app.log 2>&1