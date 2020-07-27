class Ponencia extends Contribucion{
    constructor(titulo, autor, calificacion, fechaPublicacion, ejeTematico){
        super(titulo, autor, calificacion)
        this.fechaPublicacion = fechaPublicacion
        this.ejeTematico = ejeTematico
    }
}