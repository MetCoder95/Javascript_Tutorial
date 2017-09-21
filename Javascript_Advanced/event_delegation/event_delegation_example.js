(function () {
    'use strict';

    /*
     Permite conocer la informacion de los elementos y tratar sus eventos
     de hijo a padre. Es decir, desde la etiqueta con menor jerarquia a la de mayor jerarquia
    */

    // var books = document.querySelector('#books');
    // books.addEventListener('click', function (e) {
    //     console.log(e.target.innerText);
    // }, false)

    /*
     Si tratamos un nodo en especifico
    */
    var books =  document.querySelector('#books');
    books.addEventListener('click', function(e) {
        
        if (e.target.matches('a#book5')) {
            console.log(e.target.innerText, 'comprar libro: www.amazon.com');
        } else {
            console.log(e.target.innerText);
        }
    }, false)
})();