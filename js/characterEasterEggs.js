const easterEggState = {

    combo:0,

    lastTouch:0

};

let recentMessages = [];

const tripleTouchMessages = [

    "Dato curioso: ¿Sabías que el que creó la página casi se pega un tiro cuando hizo estos mensajes emergentes?",

    "¿Qué pasa?",

    "¿Necesitas algo?",

    "¿Otra vez tú?",

    "Estoy aqui para vigilar que nadie que no sea Rz entre aqui, asi que tu eliges, sales por las buenas o por las malas 😡",

    "¿Te gusta la playlist?",

    "Espero que te guste esta playlist, el tipo que nos creó le puso muchísimo esfuerzo y tiempo, y la verdad me gusta vivir aquí",

    "La verdad no hago mucho, solo existo por aquí y por allá, me cansé de salvar Manhattan",

    "Si no eres Rodriguez por favor abandona la página lentamente, o puede que me ponga un poco loco",

    "¿Sabes? creo que esta es una de mis canciones favoritas",

    "He luchado contra muchisimas cosas horribles y malas en mi vida, pero nunca contra el amor. No creo que tú tampoco tengas que hacerlo",

    "Déjame disfrutar del paisaje..."

];

let popup;
let popupText;
let closeWin;


function initPopup(){

    popup =
        document.getElementById(
            "characterPopup"
        );


    popupText =
        document.getElementById(
            "characterPopupText"
        );


    closeWin =
        document.getElementById(
            "closeCharacterPopup"
        );


    if(closeWin){

        closeWin.onclick =
            hidePopup;

    }

}


window.addEventListener(
    "DOMContentLoaded",
    initPopup
);

let popupOpen = false;

function registerTouch(){

    console.log("Click recibido");

    if(popupOpen){

        return;

    }

    const now = Date.now();

    if(now - easterEggState.lastTouch < 1000){

        easterEggState.combo++;

    }else{

        easterEggState.combo = 1;

    }

    easterEggState.lastTouch = now;

    console.log(
        "Combo:",
        easterEggState.combo
    );

    if(easterEggState.combo === 3){

        //console.log("Triple Touch")

        triggerTripleTouch();

    }

}

function getRandomMessage(messages){

    let random;

    do{

        random = Math.floor(

            Math.random() *

            messages.length

        );

    }while(

        recentMessages.includes(random) &&

        recentMessages.length < messages.length

    );

    recentMessages.push(random);

    if(recentMessages.length > 3){

        recentMessages.shift();

    }

    return messages[random];

}

function triggerTripleTouch(){

    console.log("Triple touch!");

    const message =

        getRandomMessage(

            tripleTouchMessages

        );

    showPopup(

        message

    );

}

function showPopup(message){

    console.log("showPopup");

    console.log(popup);

    console.log(popupText);

    popupText.textContent = message;

    popup.classList.add("show");

    popupOpen = true;

}

function hidePopup(){

    if(!popup){

        return;

    }

    popup.classList.remove("show");

    easterEggState.combo = 0;

    popupOpen = false;

}


window.characterEasterEggs = {

    registerTouch,

    showPopup,

    hidePopup

};