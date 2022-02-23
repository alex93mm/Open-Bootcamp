function eliminarUltimo(array){
    if(array.constructor === Array && array.length > 0){
      array.pop();
        return array;
    } else{
      console.log("Esto no es un array")
      return array
    }
  }