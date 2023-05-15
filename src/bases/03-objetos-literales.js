const persona  = {
    nombre: 'Javi',
    apellido: 'Garcia',
    edad: 60,
    profesion : {
        nombre: 'Ingeniero',
        especialidad: 'Programacion',
        lenguajes: ['Java', 'Python', 'JavaScript']
    
    },
    rango: [  
        {
            categoria: 'Pro',
            precio: '100'
        }, true
    ]
}

console.table(persona);
console.table(persona.profesion.especialidad);
console.table(persona.profesion.lenguajes[1]);
console.table(persona.rango[0].precio);