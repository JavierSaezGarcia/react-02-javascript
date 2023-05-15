

const activo = true;

// let mensaje = "";

// if(activo){
//     mensaje = "Activo"; 
// }else{
//     mensaje = "Inactivo";
// }


// Forma en ternario con las dos opciones activo e inactivo
// const mensaje = activo ? "Activo" : "Inactivo";

// Forma de hacerlo con ternario pero que devuelva un null en caso negativo
// const mensaje = activo ? "Activo" : null;

// esta forma es cuando en React trabajemos para que solo muestre algo cuando se cumple una condicion determinada
const mensaje = activo && "Activo"; // forma corta de hacer un if
console.log(mensaje);