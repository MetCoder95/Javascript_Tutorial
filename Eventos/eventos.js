// Buscamos y asociamos al elemento, el listener de eventos

var link = document.querySelector("#respuesta");
link.addEventListener('click', function(e) {
  /*
    Evita que se dispare una accion por defecto.
    Por ejemplo:
      Al hacer click sobre un enlace o un boton de formulario,
      evitaremos que nos redireccione o envie el formulario; controlando
      el flujo de la accion del evento.
  */
  e.preventDefault();
  console.log(e);
}, false);

/*
 Otra forma de hacerlo
*/
// document.getElementById('respuesta').addEventListener('click', function(e) {
//   e.preventDefault();
//   console.log(e);
// }, false);

/*
  Propagacion de eventos
*/

// Buscamos y anidamos el evento a un header que contendra un h1 y h2
// cada que hagamos click en ellos nos imprimira donde se ha dado
// click, junto con el tag padre de ellos, en este caso, header.
var header = document.querySelector('header');
header.addEventListener('click', function (e) {
  // Los eventos se propagaran siempre de abajo hacia arriba
  console.log('Has hecho click en ' + e.target.nodeName);

  // Evitara la propagacion de eventos de abajo hacia arriba
  e.stopPropagation();
})

// Lo mismo al enterior, solo que en todo el documento
document.addEventListener('click', function(e) {
  console.log('Has hecho click en el documento');
})
