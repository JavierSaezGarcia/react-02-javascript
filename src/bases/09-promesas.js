import { getHeroeById } from "./bases/08-imp-exp";

// Promesas, por naturaleza son asincronas

// const promesa = new Promise( (resolve,reject) => {
//     setTimeout(() => {
//         // Tarea
//        const heroe = getHeroeById(2);
//        // const heroe = getHeroeById(7); // con error
//         if(heroe){
//             resolve(heroe);
//         }else{
//             reject('No se pudo encontrar el héroe');
           
//         }
//         // resolve('Hola mundo');
//     },2000);

// });

// promesa.then( mensaje => {
//     console.log(mensaje);
// }).catch( error => {
//     console.log(error);
// }).finally( () => {
//     console.log('Finalizo');
// });

// esto es lo mismo que antes
const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            // Tarea
           const heroe = getHeroeById(id);
           heroe ? resolve(heroe) : reject('No se pudo encontrar el héroe');
        //    if(heroe){
        //        resolve(heroe);
        //    }else{
        //        reject('No se pudo encontrar el héroe');
              
        //    }
          
       },2000);
    });

    
}

getHeroeByIdAsync(12)
        .then( console.log ) // .then( mensaje => console.log(mensaje));
        .catch( console.warn );// .catch( error => console.log(error));
    