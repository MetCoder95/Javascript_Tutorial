'use strict';
/**
  Valores "truthy":
  true
  'string' => Cualquier string
  {}
  []
  3
  3.14
  new Object() => Cualquier objeto

  Valores "falsy":
  false
  0 (zero)
  "" => Cadena vacia
  null
  undefined
  NaN
**/

let a = !!(0); // False
let b = !!("0"); // True
let c = (false == 0); // True
let d = (false == ""); // True
let e = (0 == ""); // False


// Los valores falsy, null y undefined no son equivalentes a nada, excepto a si mismos
let f = (null ==  false); // False
let g = (null == null); // True
let h = (undefined == undefined); // True
let i = (undefined == null); // False

// NaN no equivale a nada, ni a si mismo
let j = (NaN == null); // False
let k = (NaN == NaN); // False

// Validaciones que son estrictas
let l = (false === 0); // False
let m = (false == 0); // True
