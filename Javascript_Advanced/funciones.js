// Uso de funciones

/* Utilizar parametros por defecto con el operador OR
Si no existe el parametro, se le sera asignado uno por defecto */
function saludar(tipo, nombre) {
  tipo = tipo || "Hola";
  nombre = nombre || "Carlos";
  return (tipo + ", " + nombre + "!");
}

console.log(saludar());
console.log(saludar("Adios"));
console.log(saludar("Hasta Luego", "Jose"));

/*
  Clousers
 */

// Funciones como objetos
let nuevo_saludo = function(nombre) {
  return "Hola de Nuevo " + nombre;
};

console.log(nuevo_saludo("Carlos"));

// Si imprimimos la variable sin parentesis, nos retornara el codigo de la funcion
console.log(nuevo_saludo)

// Funciones anidadas
let funcion_anidada = function() {
  let a = "Hola,";

  function anidada() {
    let b = "Que Hace?"
    return a + " " + b;
  }

  return anidada;
};

// Devuelve la funcion anidada
console.log(funcion_anidada());

// Ejecuta la funcion anidada
console.log(funcion_anidada()());

// Devolvera lo mismo que funcion_anidada()()
let closure = funcion_anidada();
console.log(closure());

// Funcion de cierre o clouser
// Equivalente a clases, parecido mas no exactamente igual
let contador = (function() {
  var _contador = 0;

  function incrementar() {
    return _contador++;
  }

  function decrementar() {
    return _contador--;
  }

  function valor() {
    return _contador;
  }

  return {
    incrementar: incrementar,
    decrementar: decrementar,
    valor: valor
  }
});


// Ejecutara la funcion valor, dandonos 0
console.log(contador.valor);

// Ejecutara la funcion incrementar
contador.incrementar;
contador.incrementar;

// Nos imprimira el valor, ahora sera 2
console.log(contador.valor);

// Ejecutara el decrementar
contador.decrementar;

// Nos imprimira 1
console.log(contador.valor);

// Funciones como clase
function Inventario_old(nombre) {
  this.nombre = nombre;
  this.articulos = {};

  this.add = function(nombre, cantidad) {
    this.articulos[nombre] = cantidad;
  }

  this.borrar = function(nombre) {
    delete this.articulos[nombre];
  }

  this.cantidad = function(nombre) {
    return this.articulos[nombre];
  }

  this.getNombre = function() {
    return this.nombre
  }
}

// Creamos el objeto y ejecutamos sus metodos
let libros = new Inventario_old("Libros");
libros.add("Angular4", 2);
libros.add('JavaScript', 3);
libros.add('NodeJs', 1);
console.log(libros.cantidad("Angular4")); // Retornara 2
console.log(libros.cantidad("JavaScript")); // Retornara 3
libros.borrar("JavaScript");
console.log(libros.cantidad("JavaScript")); // Retornara undefined

// Prototype
/* Nos permite que objetos de la misma clase, compartan metodos y no sean replicados
en memoria de manera ineficiente */

// Manera correcta de crear una clase
function Inventario_proto(nombre) {
  this.nombre = nombre;
  this.articulos = {};
}

// Creamos el prototype
Inventario_proto.prototype = {
  add: function(nombre, cantidad) {
    this.articulos[nombre] = cantidad;
  },

  delete: function(nombre) {
    delete this.articulos[nombre];
  },

  quantity: function(nombre) {
    return this.articulos[nombre];
  },

  getNombre: function() {
    return this.nombre;
  }
}

// Creamos el objeto y ejecutamos sus metodos
let libros_new = new Inventario_proto("Libros");
libros_new.add("Angular4", 2);
libros_new.add('JavaScript', 3);
libros_new.add('NodeJs', 1);
console.log(libros_new.quantity("Angular4")); // Retornara 2
console.log(libros_new.quantity("JavaScript")); // Retornara 3
libros_new.delete("JavaScript");
console.log(libros_new.quantity("JavaScript")); // Retornara undefined


/*
  Con ECMAScript 6
*/

// Creacion de clases parecida a lenguajes orientados a objetos
class Inventario {
  constructor(nombre) {
    this.nombre = nombre;
    this.articulos = {};
  }

  add(nombre, cantidad) {
    this.articulos[nombre] = cantidad;
  }

  delete(nombre) {
    delete this.articulos[nombre];
  }

  quantity(nombre) {
    return this.articulos[nombre];
  }

  getNombre() {
    return this.nombre
  }
}

let libros_ES6 =  new Inventario("Libros");
libros_ES6.add("Angular4", 2);
libros_ES6.add('JavaScript', 3);
libros_ES6.add('NodeJs', 1);
console.log(libros_ES6.quantity("Angular4")); // Retornara 2
console.log(libros_ES6.quantity("JavaScript")); // Retornara 3
libros_ES6.delete("JavaScript");
console.log(libros_ES6.quantity("JavaScript")); // Retornara undefined

// Herencia
class Vehiculo{
  constructor(tipo, nombre, ruedas){
    this.tipo =  tipo;
    this.nombre = nombre;
    this.ruedas = ruedas;
  }

  getRuedas(){
    return this.ruedas;
  }

  arrancar(){
    console.log(`Arrancando el ${this.nombre}`);
  }

  apagar(){
    console.log(`Apagando el ${this.nombre}`)
  }
}

// Heredamos
class Coche extends Vehiculo{
  constructor(nombre){
    super('coche', nombre, 4);
  }
}

// Creamos el objeto y ejecutamos los metodos
let ford_focus = new Coche("Ford Focus");
console.log(ford_focus.getRuedas());
ford_focus.arrancar();
ford_focus.apagar();
