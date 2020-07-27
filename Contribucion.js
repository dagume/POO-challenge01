class Contribucion {
    constructor( titulo, autor, calificacion){
        this.id 
        this.titulo = titulo
        this.autor = autor
        this.calificacion = calificacion
    }

    actualizarAutor(data){
        this.autor.nombre = data.nombre
        this.autor.universidad = data.universidad
        this.autor.email = data.email
        this.autor.calificacionMaxima = data.calificacionMaxima
        this.autor.canPublicaciones = data.canPublicaciones
        this.autor.promedioCalificacion = data.promedioCalificacion
    }
    imprimirContribucion(){
        console.log(this.titulo, this.autor, this.calificacion)
    }
    getTitulo(){
        return this.titulo
    }
    
    setTitulo(titulo){
        this.titulo = titulo
    }
    
    getAutor(){
        return this.autor
    }
    
    setAutor(autor){
        this.autor = autor
    }
    
    getCalificacion(){
        return this.calificacion
    }
    
    setCalificacion(calificacion){
        this.calificacion = calificacion
    }
}