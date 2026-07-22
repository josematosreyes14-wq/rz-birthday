const container = document.getElementById("particles");
console.log(container);


function clearParticles(){

    container.innerHTML = "";

}



function createParticles(
    type = "stars",
    amount = 25
){

    console.log("CREANDO PARTICULAS");


    for(let i = 0; i < amount; i++){

        console.log("PARTICULA", i);


        const particle = document.createElement("span");


        particle.className = "particle";


        container.appendChild(particle);


    }


    console.log(
        "HIJOS DEL CONTENEDOR:",
        container.children.length
    );

}


function createStars(amount){

    console.log(
        "creando estrellas",
        amount
    );

    createParticles(
        "stars",
        amount
    );

}



function createRain(amount){

}



function createLeaves(amount){

}



function createFireflies(amount){

}



function changeParticles(config){

    console.log(
        "CAMBIANDO PARTICULAS:",
        config
    );


    if(!config){
        clearParticles();
        return;
    }


    clearParticles();


    switch(config.type){

        case "stars":

            console.log("CREANDO STARS");

            createStars(config.amount);

        break;


        case "rain":

            createRain(config.amount);

        break;


        case "fireflies":

            createFireflies(config.amount);

        break;

    }

}



function initParticles(){

    console.log("particles iniciadas");

    createStars(25);

}



export {
    initParticles,
    changeParticles
};