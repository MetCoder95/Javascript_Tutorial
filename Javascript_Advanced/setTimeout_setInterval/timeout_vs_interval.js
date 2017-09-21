(function(){
  'use strict';

  /**
   * setTimeout realiza una o un conjunto de instrucciones despues de un intervalo de tiempo
   */
  var loading = document.querySelector('#loading');

  var timer = setTimeout(function(){
    console.log('Me he ejecutado con setTimeout');
    loading.innerText = 'Complete!';
  }, 3000);

  if (loading.innerText === 'completed') {
      // Elimina espacio de tiempo especificado
      clearTimeout(timer);
  }

  /**
   * setInterval, realiza una o un conjunto de instrucciones en un intervalo especifico de tiempo
   * expresado en milisegundos
   */

  var loading2 = document.querySelector('#loading2');

  var counter = 0;

  // Importante asignarlo a una variable para poder cancelarlo
  var second_timer = setInterval(function(){
    counter += 1;
    
    if (counter === 100) {
        loading2.innerText = 'Completed ' + counter + " times. It's exhausting.";
        clearInterval(second_timer);
    } else {
        loading2.innerText = 'Completed ' + counter + ' times';
    }
    
  }, 500)
})();