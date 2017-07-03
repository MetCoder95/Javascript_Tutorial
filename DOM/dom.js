// Document Object Model, es un conjunto de utilidades disenadas para manipular
// documentos HTML
// El DOM, transforma el archivo HTML en un arbol de nodos jerarquico,
// haciendolo facil de manipular

/*
  Ejemplo
*/
var new_element = document.createElement('div');
new_element.id = 'nuevoElemento';
new_element.className = 'bloque';
new_element.style = 'background:red; width:200px; height:200px';
var body = document.querySelector('body');
body.appendChild(new_element);
