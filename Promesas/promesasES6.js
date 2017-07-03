'use strict';
// Con ES6, las promesas son nativas, por lo que las podemos controlar
// sin necesidad de librerias externas

/*
  Retomando el ejemplo anterior
*/
function loadCSS(url) {
  let promise = new Promise(
    function resolve(resolve, reject) {
      let elem = window.document.createElement('link');
      elem.rel = "stylesheet";
      elem.href = url;
      window.document.head.appendChild(elem);

      resolve();
    }
  );

  return promise;
}

/*
  Division
*/
function division(num1, num2) {
  let promise = new Promise(
    function resolver(resolve, reject) {
      if (num2 == 0) {
        reject(new Error("Dividir entre cero es infinito"));
      } else {
        let result = num1 + num2;
        resolve(result);
      }
    }
  );

  return promise;
}
