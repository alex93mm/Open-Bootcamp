public class Personaje {

    private final String nombre;
    private int vida, ataque, defensa, magia, fuerza;

    public Personaje(String nombre){
        this.nombre = nombre;
        asignarHabilidades();
    }

    private void asignarHabilidades() {

        // Asignar 15 puntos en total, vida minimo 3, resto sin minimo y maximo de 4 por habilidad.

        // Total de puntos a asignar
        int totalPuntos = 15;

        // Se asignan los puntos de uno en uno hasta el maximo
        for(int punto = 1; punto <= totalPuntos ; punto++){

            int habilidad;
            // La vida obtiene un minimo de tres puntos
            if(vida < 3) {
                habilidad = 1;
            } else {
                //En funcion al valor del 1 al 5 se selecciona una habilidad a la que sumar un punto
                habilidad = (int) (Math.random() * 5+1);
            }

            switch (habilidad){
                // Para cada caso se puede asignar un punto mientras la habilidad no supere los 4 puntos
                case 1:
                    if(vida < 4){
                        vida++;
                    } else {
                        // En caso de que la habilidad sea de 4 puntos, este punto se reparte a otra habilidad
                        punto--;
                    }
                    break;
                case 2:
                    if(ataque < 4){
                        ataque++;
                    } else {
                        punto--;
                    }
                    break;
                case 3:
                    if(defensa < 4){
                        defensa++;
                    } else {
                        punto--;
                    }
                    break;
                case 4:
                    if(magia < 4){
                        magia++;
                    } else {
                        punto--;
                    }
                    break;
                case 5:
                    if(fuerza < 4){
                        fuerza++;
                    } else {
                        punto--;
                    }
                    break;
            }
        }
    }

    @Override
    public String toString() {
        return "Caracteristicas de " + nombre + '\n' +
                "Vida=" + vida + '\n' +
                "Ataque=" + ataque + '\n' +
                "Defensa=" + defensa + '\n' +
                "Magia=" + magia + '\n' +
                "Fuerza=" + fuerza;
    }

}
