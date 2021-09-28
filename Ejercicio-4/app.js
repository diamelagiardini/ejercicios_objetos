// Tenemos un objeto con información de un disco:

const disco = {
    id: 1,
    nombre: 'Wasting Light',
    anioLanzamiento: 2011,
    cantidadDeTemas: 12,
    banda: {
      nombre: 'Foo Fighters',
      anioFormacion: 1994
    }
  };
  
// Mostrar en consola el siguiente mensaje usando las propiedades del objeto: El disco Wasting Light de la banda Foo Fighters se lanzó en el año 2011

console.log(`El disco ${disco.nombre} de la banda ${disco.banda.nombre} se lanzo en el año ${disco.anioLanzamiento}.`)