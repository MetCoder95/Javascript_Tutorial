(function name(params) {
    'use strict';

    /*
     El hoisting es una secuencia de scope realizada por el compilador de javascript
     en el cual la creacion de varialbes es puesta al inicio del scope. Quedando algo como
     el siguiente ejemplo:
    */

    // Manera convencional de programar
    var result = 0;

    var sum = function(n1, n2) {
        console.log(result);
        var result = n1 + n2;

        return result;
    }

    sum(2,1);

    console.log(result);

    // Como javascript compila
    var result;
    result = 0;

    var sum = function(n1, n2){
        var result;
        result = n1 + n2;
        console.log(result);

        return result;
    }

    sum(2,1);

    console.log(result);
})(); 