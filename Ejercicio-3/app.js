// Con los objetos creados en el ejercicio anterior, mostrar en la consola los siguientes datos de cada persona 

// 1. El nombre de Ada:

// 2. El ID de Grace

// 3. El email de Hedy

// 4. El ID y nombre de Radia

// 5. El telefono de Sheryl

const usuarioEjemplo1 = {
    id: 1,
    nombre: "Ada Lovelace",
    email: "ada@gmail.com",
    telefono: "1234567890",
}

const usuarioEjemplo2 = {
    id: 2,
    nombre: "Grace Hopper",
    email: "grace@hotmail.com",
    telefono: "0987654321",
}

const usuarioEjemplo3 = {
    id: 3,
    nombre: "Hedy Lamarr",
    email: "hedy@gmail.com",
    telefono: "6789054321",
}

const usuarioEjemplo4 = {
    id: 4,
    nombre: "Radia Perlman",
    email: "radia@yahoo.com",
    telefono: "1234509876",
}

const usuarioEjemplo5 = {
    id: 5,
    nombre: "Sheryl Sandberg",
    email: "sheryl@facebook.com",
    telefono: "5432167890",
}

console.log(usuarioEjemplo1.nombre) // Ada
console.log(usuarioEjemplo2.id) // 2
console.log(usuarioEjemplo3.email) // hedy@gmail.com
console.log(usuarioEjemplo4.id +", "+ usuarioEjemplo4.nombre) // 4, Radia Perlman
console.log(usuarioEjemplo5.telefono) // 5432167890