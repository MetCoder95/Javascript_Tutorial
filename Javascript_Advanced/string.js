// Funcionalidades con String

let username = "MetCoder95";

/* El String se comporta como un arreglo, por lo cual
tiene indices */
console.log(username.length)

// Obtiene la posicion donde comienza el argumento
console.log(username.indexOf("95"));

// Obtiene un string cortado comprendido desde el indice de inicio
// hasta el indice final
console.log(username.substring(0,8));

// Funciona igual que en un array
console.log(username.split("95"));
