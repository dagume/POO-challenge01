class Taller extends Contribucion{
    constructor(titulo, autor, calificacion, capacidadMaxima, duracion){
        super(titulo, autor, calificacion)
        this.capacidadMaxima = capacidadMaxima
        this.duracion = duracion
    }
}