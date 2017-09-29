/*
  Currying es una propiedad unica de JavaScript, que permite realizar una cadena
  de funciones, las cuales se iran ejecutando conforme los argumentos vayan siendo
  depositados. Al no completar aun los argumentos, retornara una funcion. Esa funcion
  puede ser ejecutada despues, depositando el argumento faltante.

  Se puede utilizar de herramiento Lodash con su funcion .curry() para tener un mejor
  control y dar mayor sencilles al uso de currying
*/

let dragon = name => size => element => name + ' es un dragon ' + size + ', que escupe ' + element

let output = dragon('Coca')('pequeño')('rayos');

console.log(output);
