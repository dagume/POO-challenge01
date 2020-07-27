var autor = new Autor("Daniel", "UJDC", "guecha@gmail.com", 40, 2)

var updateAutor = {
    nombre: 'yeffer',
    universidad: 'JDC',
    email: 'daniel@gmail.com',
    calificacionMaxima: 48    
}

var contribucion = new Contribucion("contribucion 1", autor, 40)
contribucion.imprimirContribucion()
var contribucion2 = new Contribucion("contribucion 2", autor, 48)
contribucion2.imprimirContribucion()
contribucion.actualizarAutor(updateAutor)
contribucion.imprimirContribucion()
contribucion2.imprimirContribucion()

var calificaciones = [contribucion.calificacion, contribucion2.calificacion]
autor.calcularPromedio(calificaciones)
console.log("Promedio de las contribuciones: " + autor.getPromedioCalificacion())