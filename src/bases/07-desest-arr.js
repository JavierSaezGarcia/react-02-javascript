const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);
const [b1] = personajes // si queremos el primer elemento de un array podemos hacer lo siguiente    
console.log(b1);
// si queremos el tercer elemento de un array podemos hacer lo siguiente
   
const [ , ,p1 ] = personajes; // cada coma (dos comas en este caso) nos dice que el primero lo ignore, el segundo tambien y extraiga el tercero y lo llamo acomo quiera
console.log(p1);

const retornaArreglo = () => {
    return ['ABC', 123];
}
const arr = retornaArreglo();
console.log(arr);

const [letras, numeros] = retornaArreglo();

console.log(letras);
console.log(numeros);

// Tarea
// 1.- el primer valor del arreglo se llamara nombre
// 2.- el segundo valor del arreglo se llamara setNombre

const miFuncion = ( valor ) => {
    return [ valor, () => console.log('Hola Mundo') ];
}

const [nombre, setNombre] = miFuncion('Goku'); // aqui estamos llamando a la funcion y asignando el valor de la funcion a la variable nombre
console.log(nombre);
setNombre();
