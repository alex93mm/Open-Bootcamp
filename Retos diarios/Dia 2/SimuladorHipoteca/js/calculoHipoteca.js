function calcularHipoteca(){
    var cantidad = document.getElementById("cantidadHipoteca").value;
    var meses = document.getElementById("mesesHipoteca").value;
    var interes = document.getElementById("interesHipoteca").value;

    var cuota = (cantidad * interes) / meses;

    document.getElementById("resultado").innerHTML = "CUOTA MENSUAL: " + cuota;
}