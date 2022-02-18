
// Lo primero que hacemos es requerir el paquete
const express = require('express')

// Nos guardamos la función express en una variable para usarla luego
const app = express();

// ahora podemos definir las rutas de nuestra aplicación
app.get('/', function (req, res) {  // req <<<<< , res >>>>
  res.send('Hello World')
})
 
app.listen(3000)