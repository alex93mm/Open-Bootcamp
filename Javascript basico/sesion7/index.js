
    // como escribir en pantalla
   
    process.stdout.write("hola, dime tu nombre\n")
    
    process.stdin.on('data', function(data) {
        process.stdout.write('Hola ' + data.toString() + "\n")
        process.exit()
    })
