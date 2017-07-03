// Ejemplo de metodos en arrays

var mi_array = [1,2,4,5,6];

console.log(mi_array.reverse());


// Transforma el arreglo en un string, siendo concatenado a partir de los "separadores"
// que se le pase como argumento a la funcion
var template = [
  "<li>",
  3,
  "</li>"
].join("");

console.log(template);

// Aplicar una funcion a todos los elementos de un arreglo
console.log(mi_array.map(function(elemento){
  return elemento * elemento;
}));

// Realiza un filtrado de los elementos mediante a travez de una
// funcion que entra como argumento.

console.log(mi_array.filter(function(elemento){
  return elemento % 2 === 0;
}));

/* Para partir el array, se le pasa como argumento el indica a partir
del cual iniciar y en el cual terminar el corte. Si es negativo, comenzara a contar
desde el fin del arreglo */

console.log(mi_array.slice(2));
console.log(mi_array.slice(2, 3));
console.log(mi_array.slice(2, -1));
