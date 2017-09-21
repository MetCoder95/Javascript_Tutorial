'use strict';

// Para obtener la informacion del servidor JSON
/*
  Por predeterminado acepta GET
  Se puede configurar con un metodo, un header y un body
  para user metodo POST. Por ejemplo:

  * * *
  let new_header = new Header();
  new_header.append('Content-Type', 'application/json');

  fetch('URL', {
  method: 'GET',
  headers: new_header,
  mode: 'cors',
  cache: 'default'
  });
  * * *
*/
fetch("http://jsonplaceholder.typicode.com/photos")
  .then((response) => {
    // Obtenemos la respuesta, la transformamos a json
    // y la pasamos a la siguiente promesa
    return response.json();
  })
  .then((albums) => {
    // Buscamos el objeto HTML con el selector colocado como argumento
    let respuestaHTML = document.querySelector('#res');
    // Creamos un fragmento HTML donde iremos agregando elementos
    let tpl = document.createDocumentFragment();
    let elemento;
    // Una vez ya en formato JSON, comenzamos a recorrer los elementos del
    // array
    albums.forEach(function(elem) {
      // Por cada elemento del array, lo agregamos como un conjunto de elementos
      // en String para ser anadido al fragmento HTML
      elemento = document.createTextNode(`<a	href="${elem.url}">										<img	src="${elem.thumbnailUrl}"	/>									</a>									<br/>									<span>${elem.title}</span>`);
      // Lo unimos al fragmento
      tpl.appendChild(elemento);
    });
    // y este al tag HTML deseado
    respuestaHTML.appendChild(tpl);
  })
  .catch((err) => {
    console.error(err);
  });
