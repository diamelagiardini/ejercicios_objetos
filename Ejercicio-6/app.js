// Crear una funcion llamada mostrarTecnologias que reciba como parametros las propiedades recien creadas
// Dentro de la funcion, crear la siguiente lógica:
// Si la propiedad "sabeProgramar" es true, mostrar en consola la siguiente frase: "Hola, mi nombre es [ACA EL NOMBRE] y programo en [ACA EL LISTADO DE LENGUAJES/TECNOLOGIAS]"
// Ejecutar la funcion

tecnologiasConocidas = ["HTML", "CSS", "JavaScript"]

const user = {
    firstName: "Diamela", 
    lastName: "Giardini", 
    email: "giardinidiamela@gmail.com", 
    age: 22,
}

user.sabeProgramar = true
user.tecnologiasConocidas = tecnologiasConocidas

// console.log(user)


const mostrarTecnologias = (sabeProgramar, tecnologiasConocidas) => {
    if (sabeProgramar) {
        console.log(`Hola, mi nombre es ${user.firstName} y programo en ${tecnologiasConocidas}`)
    }
}

mostrarTecnologias(true, ["HTML", "CSS", "JavaScript"])