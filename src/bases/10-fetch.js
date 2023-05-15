

const apiKey = 'rqI2mKa3QTjxgqJhkx45M6ccJvrpOzES';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    
peticion
    .then( resp => resp.json()) // el resultado de la promesa se pasa al siguiente then()
    .then( ({data}) => {
        // console.log(data);
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;        
        document.body.append(img);
    })
    
    .catch(console.warn);

    
   