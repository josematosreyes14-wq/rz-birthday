const spiderman =
    document.getElementById("spiderman");

const frames = [

    "celebrate_transparent.png"

];

let frame = 0;

function animateCharacter(){

    frame++;

    if(frame >= frames.length){

        frame = 0;

    }

    spiderman.style.backgroundImage =

    `url("assets/characters/${frames[frame]}")`;

}

setInterval(

    animateCharacter,

    700

);

animateCharacter();