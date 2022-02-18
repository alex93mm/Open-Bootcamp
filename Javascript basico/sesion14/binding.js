
      /*
      var x = 5;
      var modulo = {
          x:65,
          getX: function() {
            return this.x
          }
      }
      
      modulo.getX()
      var devuelveX = modulo.getX
      devuelveX()

       var context = {
        x:1000
      }
       
      var bindDevuelveX = devuelveX.bind(context)
      bindDevuelveX()
     */
   
      // ########################### ejemplo2

      /*
      var nombre = "Pepe Pérez"
      var person  = {
          other: { nombre: "Carlos García"},
          nombre: "María Gracia",
          getNombre: function() { return this.nombre}
      }
      
      var dameNombre = person.getNombre.bind(person.other)
      dameNombre()
      */

      