class Autor {
    constructor(nombre, universidad, email, calificacionMaxima, canPublicaciones, promedioCalificacion){
        this.id
        this.nombre = nombre
        this.universidad = universidad
        this.email = email
        this.calificacionMaxima = calificacionMaxima
        this.canPublicaciones = canPublicaciones
        this.promedioCalificacion = promedioCalificacion
    } 

    verificarCalificacion(){
        return this.calificacionMaxima
    }
    calcularPromedio(calificaciones){
        var sumatoria = calificaciones.reduce(function(a, b){
          return a + b; //Regresa el acumulador más el siguiente
        }, 0); //Pero si no encuentras nada o no hay siguiente, regresa 0
        var promedio = sumatoria / calificaciones.length;
        this.promedioCalificacion = promedio
    }
    getNombre(){
        return this.nombre
    }
    
    setNombre(nombre){
        this.nombre = nombre
    }
    getUniversidad(){
        return this.universidad
    }
    
    setUniversidad(universidad){
        this.universidad = universidad
    }
    getEmail(){
        return this.email
    }
    
    setEmail(email){
        this.email = email
    }
    getCalificacionMaxima(){
        return this.calificacionMaxima
    }
    
    setCalificacionMaxima(calificacionMaxima){
        this.calificacionMaxima = calificacionMaxima
    }
    getCanPublicaciones(){
        return this.canPublicaciones
    }
    
    setCanPublicaciones(canPublicaciones){
        this.canPublicaciones = canPublicaciones
    }
    getPromedioCalificacion(){
        return this.promedioCalificacion
    }
    
    setPromedioCalificacion(promedioCalificacion){
        this.promedioCalificacion = promedioCalificacion
    }

}