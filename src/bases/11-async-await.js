
// const getImagenPromesa = () => new Promise((resolve) => resolve('https://picsum.photos/200/300'))  
// getImagenPromesa().then(  console.log )


// Para trabajar con await debe necesariamente estar envueltos en una funcion async o asincrona
// Tambien con async await la forma de trabajar los errorres es con un try catch
const getImagen = async () => {

    try {
        const apiKey = 'rqI2mKa3QTjxgqJhkx45M6ccJvrpOzES';
        const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`); // await espera a que termine la peticion
        const { data } = await peticion.json(); // await espera a que termine la peticion
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error) {
        console.error(error);
    }


}
getImagen()



