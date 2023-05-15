
const nombre = 'Javier';

const apellido = 'Garcia';
const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

const getSaludo = (nombre) => {
    return `Hola ${nombre}`;
}

console.log(getSaludo(nombre));