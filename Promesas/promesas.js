// Una promesa sirve para reserver el resultado de una operacion futura
// Regularmente, a travez de una operacion asincrona como una peticion HTTP
// o una lectura de ficheros que tiene un tiempo de ejecucion considerable
// y no instantaneo.

/*
  Callback tipico de Javascript
*/
// Creamos el callback
function loadCSS(url, callback) {
  var elem = window.document.createElement('link');
  elem.rel = "stylesheet";
  elem.href = url;
  window.document.head.appendChild(elem);
  callback();
}

// Lo ejecutamos
loadCSS('style.css', function() {
  console.log('Estilos Cargados!');
})


/*
  Ahora con Promises (asumiendo que loadCSS como una promesa)
*/
// Obtenemos el resultado de la promesa
var promise = loadCSS('style.css');

// Ejecutamos una tarea que queramos realizar con el resultado
promise.then(function() {
  console.log("Estilos Cargados");
});

// Es importante controlar el error
promise.catch(function(err) {
  console.log(err);
});

// Anidado es un poco mas estetico
loadCSS('style.css')
  .then(function() {
    console.log('Estilos Cargados');
  })
  .catch(function(err) {
    console.log(err);
  });
