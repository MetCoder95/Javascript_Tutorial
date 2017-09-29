'use strict';

/**
 * Son todos aquellos objetos que pueden o hacen uso de la funcion "map"
 * Un String no puede ser un functor, porque los objetos que contiene no Son
 * polimorficos.
 * A su vez, debe regresar un nuevo functor capaz de volver a transformar os valores que contiene
 **/

let animals = [{
  name: 'Cocaine',
  its: 'cat'
}, {
  name: 'Toby',
  its: 'dog'
}, {
  name: 'Sherlock',
  its: 'cat'
}]

/* Esto es un fuctor */
let animalsName = animals.map((object, index) => object.name)
  .map((name) => name.length);

console.log(animalsName);
