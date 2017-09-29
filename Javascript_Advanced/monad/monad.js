"use strict";
/**
  Un Monad es un functor mucho mas poderoso que, parecido a los functors
  que son aquellos que implementan "map", monad son todos aquellos
  objetos capaces de implementar "flattMap"
**/

// Ejemplo
const Bacon = require('baconjs');

/**
  Algo mas complejo, utilizaremos el TranslateAPI de Google para realizar
  unas pequenas traducciones
**/
// Llamamos fetch para realizar peticiones asincronas
const fetch = require('node-fetch');

const api_key = "AIzaSyCOPszyyjlXqjSao_EFKV7xcxsQO7imun0"
const url = "https://translation.googleapis.com/language/translate/v2" +
  "?key=" + api_key;

function translate(word, lang) {
  // Creamos el URL completo
  let trans_url = url + "&target=" + lang + "&q=" + encodeURIComponent(word);

  // Creamos una promesa a travez de fetch, ya que fetch retorna una promesa
  let promise = fetch(trans_url)
    // transformamos a JSON
    .then(response => response.json())
    // Ahora obtenemos la traduccion de dicho JSON
    .then(json_response => json_response.data.translations[0].translatedText)

  /**
    Las promesas tambien son monads, ya que implementan 'then', asi como otros
    objetos que implementen bind, chain, entre otros.
  **/
  let stream = Bacon.fromPromise(promise);
  return stream;
}

// Creamos un stream sencillo
const stream = Bacon.Bus();

// Como functor, implementamos flatMap, para que solamente la palabra
// en lugar del stream completo, se trducida.
// A su vez, hacemos que cada palabra que entre sea impresa en la consola
stream.flatMap((word) => translate(word, 'es'))
  .map(word => word.toUpperCase())
  .onValue(word => console.log(word));

// Enviamos algunas palabras
stream.push('cat');
stream.push('dog');
stream.push('fish');

// Cerramos el string para liberar recursos
stream.end();
