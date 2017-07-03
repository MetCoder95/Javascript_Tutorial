// Las promesas no son nativas con ECM5, por lo cual es necesario
// implementar una libreria, como Q

// Importamos Q
var Q = require('q');

// Creamos la promesas
function loadCSS(url) {
  // Creamos un objeto de la libreria Q
  var deferred = Q.defer();

  // Operaciones de la funcion que creamos anteriormente
  var elem = window.document.createElement('link');
  elem.rel = "stylesheet";
  elem.href = url;
  window.document.head.appendChild(elem);
  // Indica que la operacion ha resultado exitosa y devuelve la promesa
  deferred.resolve();
  /*
    En caso de que haya algo salido mal, utilizamos "deferred.reject();"
    para indicar un error y retornar un error como promesa.
    .catch() sera el encargado de capturar y controlar el error.
  */
  return deferred.promise();
}

/*
  Un ejemplo de un error
*/
function division(num1, num2) {
  var deferred = Q.defer();

  if (num2 == 0) {
    // Necesitamos pasarle un objeto del tipo Error como parametro
    deferred.reject(new Error("Dividir entre cero es infinito"));
  } else {
    deferred.resolve(num1 / num2);
  }

  return deferred.promise;
}

// Ejecutamos
division(1, 2)
  .then(function(result) {
    console.log('El resultado es: ' + result);
  })
  .catch(function(err) {
    console.log(err);
  });
