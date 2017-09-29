'use strict';

/*
 * Cola de tareas que se ira ejecutando conforme se programe.
 * Funciona muy bien cuando existe demasiada cantidad de informacion
 * o tareas extremadamente pesadas que pueden dejarnos sin recursos
 */

const numberStream = {
  each: () => {
    setTimeout(() => {
      console.log(1);
    }, 1000);
    setTimeout(() => {
      console.log(2);
    }, 2000);
    setTimeout(() => {
      console.log(3);
    }, 3000);
  }
}

/* Se ejecutaran conforme cada timeout vaya siendo completado */
numberStream.each();

/* Ejemplo Complejo */
const fs = require('fs');
const path = require('path');
const highland = require('highland');

/*
  Primero leeemos el archivo txt con fs, colocando su path y el encoding
  que deseamos utilizar
*/
highland(fs.createReadStream(path.join(__dirname + "/ticket.csv"), 'utf8'))
  // Lo separamos por saltos de linea, transformandolo en un array
  .split()
  // Transformamos cada elemento en un array, dividiendolos por las comas
  .map((linea) => linea.split(','))
  // Ahora lo transformamos en un objeto, utilizando el array anterior
  .map((oracion) => ({
    name: oracion[0],
    qty: oracion[1]
  }))
  // Ahora lo filtramos para obtener todos aquellos que tienen mas de 150
  .filter(cliente => cliente.qty > 150)
  // Terminamos simplemente imprimiendolo
  .each((object) => {
    console.log(object);
  });
