/*
  ECMAScript v6 es la nueva version del estandar de Javascript
  Contiene novedades que lo acemejan mas a un lenguaje tipo
  Python o Java, con el fin de atraer mas programadores al stack de la
  comunidad
*/
// Para hacer uso de este estandar, es necesario utilizar la siguiente linea
// al inicio de cualquier documento JS
'use strict';

/*
  Arroy Function
*/
// Nos permite simplificar funciones de callback y/o anonimas
// Por ejemplo:
let datos = [1, 2, 3, 4, 5, 6];
datos.forEach((num) => {
  console.log(num);
});
// O aun mas simple
datos.forEach(num => console.log(num));

// Tambien funciona para crear funciones
let saludar = () => console.log('Hola Mundo!');

/*
  Objeto this
*/
let obj = {
  foo: function() {

  },
  bar: function() {
    // Podemos acceder al contexto general, gracias a la arroy function
    document.addEventListener('click', (e) => this.foo());
  }
}

/*
  Template Strings
*/
// Nueva forma de imprimir String mediante interpolacion de variables
let dato1 = 1;
let dato2 = 2;
console.log(`La suma de ${dato1} y ${dato2} es igual a ${dato1 + dato2}`);

// Tambien podemos imprimir multilnea, sin necesidad de concatenar, solo
// usando la comilla invertida (``)
let template = `<div>
  <ul>
    <li>Item 1 </li>
    <li>Item 2 </li>
    <li>Item 3 </li>
  </ul>
</div>`;

/*
  let y const
*/
// Nos permite un mayor control del scope dentro de las funciones y objetos.
// Con let, podemos declarar una variable que sera ejecutada dentro de un bloque
// exclusivo de codigo, sin necesidad de usar var ya que podia considerarse
// global.
// Con const, declaramos una variable constante que no puede ser alterada una
// una vez que se la ha asignado el valor. Algo parecido a Java.

var num = 5;
const mult = 10;

function() {
  let num = 6;
  console.log(num * mult); //Imprimira 60
}
mult = 6; //Nos marcara error
console.log(num * mult); //Imprimira 50

/*
  Modulos
*/
// Con ES6 es posible la importacion y exportacion de modulos de manera nativa
// sin necesidad de librerias externas.

// Por ejemplo: para exportar un modulo y que sea visible para toda la aplicacion
// lo hacemos con al expresion export.

class Coche {
  // Este tipo de construccion de objetos tambien es propio de ES6
  constructor(nombew, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }

  arrancar() {
    console.log(`Arrancando el ${this.nombre}`);
  }
}
// Se usa default cuando solamente tenemos un fragmento a exportar en todo
// el documento
export default Coche;

// Si exportamos varios, quedaria de la siguiente manera:
function caminar() {

}

function correr() {

}

//Exportamos
export caminar;
export correr;

// Si lo importamos desde otro archivo de la aplicacion, quedaria de la
// siguiente manera
import Coche from './coche';
let ford = new Coche('Ford', '4 puertas');
ford.arrancar();

// Si queremos importar varios al mismo tiempo
import {
  caminar,
  correr
} from './modulo';

/*
  Si bien, ES6 se esta adaptando en los navegadores rapidamente, no todos
  lo soportan actualmente. Chrome es uno de los cuales lo va adaptando
  con una mayor velocidad. Si quisieras utilizar estas funcionalidades
  en otros navegadores, seria necesario el uso de la libreria Babel.
  La cual es capaz de transpilar ES6 a ES5.
*/
