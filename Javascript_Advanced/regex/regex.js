'use strict';

/*
    Expresiones regulares:
    Son un lenguaje de que permite buscar patrones en cadenas de
    caracteres. Es muy funcional cuando se busca encontrar un patron
    exacto en una cadena de caracteres
 */

 /* Usando de ejemplo las siguientes dos cadenas */
const s1 = 'find this'
const s2 = 'Find that'

/* Podemos utilizar el metodo @match de una cadena (recordando que cada string es un objeto en JS)
    Este regex obtendra, exactamente, el primer index o indice donde haya una f seguida de una letra i
 */
console.log(s1.match(/fi/))

/* Es sensible a mayusculas y minusculas. Si queremos omitir esto, podemos usar el modificador i
    (i) nos indica que ignore entre mayusculas y minusculas
 */
console.log(s2.match(/fi/))

/* Al igual que una cadena, una expresion regular o regex es un objeto */
console.log(/fi/.test(s1))
console.log(/fi/.test(s2))

/* Digamos que queremos obtener la  */
const email =  'example@example.com'

/* Utilizamos el metodo @split de la variable string, que tambien acepta regex */
console.log(email.split(/@/)[0])

/* (g) nos devolvera todas las coindicencias */
const regex = /i+/g

console.log(regex.exec(s1))
console.log(regex.exec(s1))
/* Hasta el final, donde nos devolvera null */
console.log(regex.exec(s1))

/* Ahora queremos que coincida exactamente con el formato de un correo electronico
    Explicando seccion por seccion:
    [a-z0-9\.\-\_] => cualquier caracter entre a y z (minuscula), 0 y 9, _, - o .
    +@ -> Seguido por el simbolo arroba
    [a-z0-9\-] => seguido de una combinacon de caracteres entre a y z, o y 9 y -
    +[\.][a-z]{2,} => seguido de un punto y cualquier combinacion de letra entre a y z (se puede repetir esta combinacion dos o mas veces)
*/
const r = /[a-z0-9\.\-\_]+@[a-z0-9\-]+[\.][a-z]{2,}/

console.log(r.test(email))
