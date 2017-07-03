var pubsub = (function () {
  // Actuara como cola de todos los eventos que se produzcan
  // Los guardara con el nombre del evento y su valor sera un
  // array con todas las funciones callback en cola.
  var subscriptores = {};

  // Para poder manejar datos, primero creamos un objeto que maneje
  // los datos ingresados por callback
  function EventObject() {};

  function subscribe(event, callback) {
    // Si no existe el evento, creamos el objeto y el array de callbacks
    // y lo anadimos
    if (!subscriptores[event]) {
      var subscriptoresArray = [callback];
      subscriptores[event] = subscriptoresArray;
    } else {
      // Si existe, anadimos el array de callbacks a la cola de eventos
      subscriptores[event].push(callback);
    }
  }

  // Le anadimos un segundo argumento para los datos
  function publish(event, data) {

    // Creamos el objeto que manejara los datos
    var eventObject = new EventObject();
    eventObject.type = event;

    // Si tenemos datos, los agregamos
    if (data) {
      eventObject.data = data;
    }

    // Si el evento existe, recorremos su array de callbacks y las ejecutamos
    // en orden
    if (subscriptores[event]) {
      subscriptores[event].forEach(function (callback) {
        // Lo agregamos como argumento para que pueda ser accesado
        callback(eventObject);
      });
    }
  }

  return {
    // devolvemos los metodos
    pub: publish,
    sub: subscribe
  };
}());

pubsub.sub('evento', function (e) {
  console.log('El "evento" ha sido lanzado');
});

pubsub.pub('evento');


/*
  Con datos
*/
pubsub.sub('eventoConDatos', function (e) {
  console.log("eventoConDatos lanzado y contiene: ", e.data.datos);
});

//Lo emitimos
pubsub.pub('eventoConDatos', {
  datos: 'Bienvenidos datos'
});
