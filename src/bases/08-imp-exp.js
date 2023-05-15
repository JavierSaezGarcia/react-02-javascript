import heroes from "../data/heroes";
// import heroes from "../data/heroes"; // importacion por default que lo llamamos heroes pero podriamos llamaorlo pepito

console.log(heroes);



export const getHeroeById = (id) => {

    return heroes.find(heroe => heroe.id === id);
}


console.log(getHeroeById(2));

const getLastHeroe = () => {    
    return heroes.findLast(heroe => heroe.id > 1);

}

console.log(getLastHeroe());

export const getHeroesByOwner = (owner) => {

    return heroes.filter(heroe => heroe.owner === owner);
    // return heroes.find(heroe => heroe.owner === owner); // solo regresa uno por lo tanto no vale

}

console.log(getHeroesByOwner('DC'));