// Desestructuración
// Asignacion 

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};
// en vez de tener que repetir el nombre del objeto, punto y la propiedad...
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

/*  ...extraemos cada propiedad de la persona o las proiedades que necesitemos , no es necesario TODAS

const { nombre, edad, clave } = persona;
console.log(nombre);
console.log(edad);
console.log(clave); 

*/

// Desestructuracion en el argumento y tomamos lo que necesitamos de la persona. En el siguiente caso solo tomamos el nombre.
const elContext = ({ nombre, edad, clave, rango = 'Capitán' }) => {
    // console.log(nombre, edad, rango);
    return {
        nombre,
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}
// Cuando hacemos la llamada a persona, nos devuelve el objeto completo
// pero como en el caso anterior de persona solo tomamos el nombre entonces nos devuelve el nombre
const {nombreClave, anios, nombre, latlng} = elContext( persona );
const {lat,lng} = latlng;
console.log(nombreClave,anios, nombre);
console.log(lat, lng);
console.log(latlng); 
// si necesitamos otro valor, podemos poner otro valor en el argumento de la funcion que no este en el objeto lo inicializamos con un valor por defecto.