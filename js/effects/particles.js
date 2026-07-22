const container = document.getElementById("particles");


function createParticles(amount = 25){

    for(let i = 0; i < amount; i++){

        const particle = document.createElement("span");

        particle.className = "particle";


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.animationDuration =
            (8 + Math.random() * 12) + "s";


        particle.style.animationDelay =
            Math.random() * 10 + "s";


        particle.style.width =
            (3 + Math.random() * 5) + "px";


        particle.style.height =
            particle.style.width;


        container.appendChild(particle);

    }

}


function initParticles(){

    createParticles();

}


export {
    initParticles
};