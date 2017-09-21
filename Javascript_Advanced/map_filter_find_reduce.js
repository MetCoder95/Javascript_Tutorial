'use strict';

let products = [
  {
    name: 'water',
    cost: 5.20
  },
  {
    name: 'gatorade',
    cost: 18.5
  },
  {
    name: 'juice',
    cost: 12.5
  },
  {
    name: 'coca-cola',
    cost: 9.5
  },
]

/*
* Con MAP, realizamos una transformacion a cada objeto de un array
* @param any elemento contenido dentro del array
*/
let new_products = products.map((product) => {
  product.category = 'drinkables';
  return product;
});

console.log(new_products);


/*
* Con FILTER, realizamos un filtrado de acuerdo a nuestras especificaciones
*/
let filter_products = products.filter((product) => {
  if (!(product.cost > 5) || !(product.cost < 10)) {
    return product;
  }
});

console.log(filter_products);

/*
* Con FIND, realizamos una busqueda en el arreglo, de acuerdo a criterios especificos. Obteniendo un solo resultado
*/
let find_product = products.find((product) => {
  if (product.name === 'coca-cola') {
    return product;
  }
});

console.log(find_product);


/*
* Con REDUCE, podemos realizaar una sumatoria de los atributos que requerimos en un arreglo
* @param sum => variable que funjira como acumulador
* @param product(any) => variable que sera el objeto dentro del arreglo
* @param in => En cuanto sera inicializado el acumulador
*/
let total_products = products.reduce((sum, product) => {
  return sum + product.cost;
}, 0);

console.log(total_products);
