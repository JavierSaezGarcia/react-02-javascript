// Arreglos

const arreglo = [34, 'casa',  true,  null, {nombre: 'javier', edad: 23}]
console.log(arreglo);

// añade un elemento al final del array
arreglo.push('adios'); // 34, 'casa',  true,  null, {nombre: 'javier', edad: 23, 'adios'
console.log(arreglo);

// añade un o varios elementos al inicio del array
arreglo.unshift('hola');
console.log(arreglo);

// elimina el ultimo elemento del array
arreglo.pop();
console.log(arreglo);

// slice copia un array pero no modifica el mismo





// 1.- CONCACT(): Une dos o más arrays y devuelve un nuevo array
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let newArray = array1.concat(array2);
console.log(newArray); // Resultado: [1, 2, 3, 4, 5, 6]

// 2.- copyWithin() Copia una parte del array dentro de sí mismo. 

// 1.- El índice donde se copiará el segmento de elementos. 
// 2.- El índice donde comenzará a copiar. 
// 3.- El número de elementos a copiar. Esta opcion es opcional
let array3 = ['javi', 2, 'martina', true, 'nieve', 345, false];
array3.copyWithin(0, 1, 2);
console.log(array3); // Resultado: [2, 2, 'martina', true, 'nieve', 345, false]


// 3.-  entries(): Devuelve un array de arrays con las claves y los valores del objeto.
let array4 = ['a', 'b', 'c'];
let iterator = array4.entries();
console.log(iterator) // Resultado: [[0, 'a'], [1, 'b'], [2, 'c']]

// 4.- every() : Devuelve true si todos los elementos del array cumplen la condición.
// ejemplo
let arrayEvery = [1, 2, 3, 4, 5];
let result = arrayEvery.every(element => element > 0);
console.log(result); // Resultado: true

// EJERCICIOS
const arr = [1, 2, 3, 4, ];

let arr2 = [ ...arr, 5]; // añado el 5 al arreglo anterior con spread

console.log(arr);
console.log(arr2);

// el metodo map espera una funcion como parametro y retorna un nuevo array
let arr3 = arr2.map(element => element * 2); // multiplico cada elemento del arreglo por 2
console.log(arr3);
console.log(arr2);





