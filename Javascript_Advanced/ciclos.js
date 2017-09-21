/*
  Ciclos
*/

/*
  ForEach
*/
let array_each = [1,2,3,4,5,6];
array_each.forEach(function(elemento, index){
  console.log(`El valor de la posicion ${index} es igual a ${elemento}`);
});

// Si queremos iterar un objeto JSON con informacion
let libro = {
  titulo: "JavaScript From Scratch",
  autor: "Carlos Fuentes",
  no_paginas: 120,
  editorial: "Carlos Fuentes S.A. de C.V.",
  precio: 156.3
}

// Obtenemos propiedades del objeto, devolviendonos un array
let propiedades = Object.getOwnPropertyNames(libro);

// Accedemos al valor mediante un ForEach
propiedades.forEach(function(name){
  let valor = Object.getOwnPropertyDescriptor(libro, name).value;
  console.log(`La propiedad de ${name} contiene el valor: ${valor}`);
});

/*
  ForIn
*/
for(let property in libro){
  console.log(`La propiedad ${property} contiene: ${libro[property]}`);
}
