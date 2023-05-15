// Funciones en javascript
const saludar = function(nombre){
    return `Hola ${nombre}`;
}
console.log(saludar("Juan"));

// Flecha
const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
};
console.log(saludar2("Joan"));

// Flecha simplificada
const saludar3 = (nombre) => `Hola ${nombre}`;
console.log(saludar3("Rapido"));

// cuando queramos regresar un objeto de manera implicita lo siguiente dara error
// const getUser = () => {
//     {
//         uid: 'ABC123',
//         username: 'XXXX'
//     };
// }
// pero a rodear entre parentesis un objeto podemos hacerlo sin necesidad de añadir return y quitandolo no nos de error
const getUser = () => ({
            uid: 'ABC123',
            username: 'XXXX'
        
});
console.log(getUser());

// Un ejemplo mas complejo TAREA
// 1.- transformen a una funcion de flecha
// 2.- Tiene que retornar un objeto
// 3.- pruebalo
const user = getUser();
console.log(user);
// function getUsuarioActivo(nombre){
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// }   

const getUsuarioActivo = (nombre) => (
    {
        uid: 'ABC567',
        username: nombre
    }
)  
const usuarioActivo = getUsuarioActivo('Pepito');
console.log(usuarioActivo);



