const speechBubble =
    document.getElementById("speechBubble");

const reactions = [

    "😎",
    "🕸️",
    "🙃",
    "😅",
    "😂",
    "🤨",
    "😳",
    "😏",
    "👋",
    "👍"

];

let bubbleTimeout;

const character =
    document.getElementById("character");

const sprite =
    document.getElementById("sprite");


const mode =
    character.dataset.mode;



const animations = {

    idle:{
        frames:[
            "idle.png"
        ],

        speed:700,

        loop:true
    },


    run:{
        frames:[
            "run1.png",
            "run2.png"
        ],

        speed:150,

        loop:true
    },


    climb:{
        frames:[
            "climb1.png",
            "climb2.png"
        ],

        speed:150,

        loop:true
    },


    climbEnd:{
        frames:[
            "climbEnd.png"
        ],

        speed:250,

        loop:false
    },


    slide:{
        frames:[
            "slide.png"
        ],

        speed:180,

        loop:false
    }

};



let currentAnimation = null;

let currentFrame = 0;

let animationTimer = null;



let currentY = 0;

let targetY = 0;


let currentX = 100;

let targetX = 0;



const state = {

    action:"idle",

    location:"bottom"

};

function showReaction(emoji){

    if(!speechBubble)
        return;

    clearTimeout(
        bubbleTimeout
    );

    speechBubble.textContent =
        emoji;

    speechBubble.classList.add(
        "show"
    );

    bubbleTimeout = setTimeout(()=>{

        speechBubble.classList.remove(
            "show"
        );

    },1500);

}

function setState(action){

    state.action = action;

}



function setLocation(location){

    state.location = location;

}



function getState(){

    return state;

}



const places = {

    top:20,

    bottom:0

};



function updatePlaces(){

    places.top = 20;


    places.bottom =
        window.innerHeight - 75;

}

function moveVertical(y, callback){

    const distance =
        Math.abs(currentY - y);

    const climbing =
        y < currentY;

    const speed =
        climbing ? 120 : 220;

    const duration =
        distance / speed;

    character.style.transition =
        `top ${duration}s ${climbing ? "ease-in-out" : "ease-in"}`;

    character.style.top =
        `${y}px`;

    setTimeout(()=>{

        currentY = y;

        if(callback)
            callback();

    }, duration * 1000);

}


function goTo(place){

    updatePlaces();


    targetY =
        places[place];



    if(targetY < currentY){

        setState("climbing");

        play("climb");


    }else if(targetY > currentY){

        setState("falling");

        play("slide");

    }



    moveTo(targetY, place);

}





function moveTo(y, destination){


    moveVertical(

        y,

        ()=>{


            setLocation(destination);



            if(destination === "cover"){


                play("climbEnd");


            }else{


                play("idle");


            }


            setState("idle");


        }

    );

}





function climb(height = 200){


    setState("climbing");


    play("climb");



    const target = Math.max(
        places.top + 80,
        currentY - height
    );



    moveVertical(

        target,

        ()=>{


            play("climbEnd");



            setTimeout(()=>{


                fall();


            },2000);



        }

    );

}





function fall(){


    updatePlaces();


    setState("falling");


    play("slide");



    moveVertical(

        places.bottom,

        ()=>{


            setState("idle");


            setLocation("bottom");


            play("idle");


        }

    );

}






function clampX(x){

    const width =
        window.innerWidth;


    const characterWidth =
        character.offsetWidth;



    return Math.max(

        0,

        Math.min(

            x,

            width - characterWidth

        )

    );

}





function walk(direction, distance = 100){


    setState("walking");


    play("run");



    const amount =

        direction === "right"

        ? distance

        : -distance;



    targetX =

        clampX(
            currentX + amount
        );





    character.style.transform =

        direction === "left"

        ? "scaleX(-1)"

        : "scaleX(1)";

        const travelDistance =
            Math.abs(currentX - targetX);

        const duration =
            travelDistance / 60;


        character.style.transition =
            `left ${duration}s linear`;


        character.style.left =
            `${targetX}px`;


    setTimeout(()=>{


        currentX = targetX;


        setState("idle");


        play("idle");


        checkEdges();



    }, distance / 80 * 1000);


}






function checkEdges(){


    const width =
        window.innerWidth;


    const characterWidth =
        character.offsetWidth;



    if(currentX <= 0){


        walk(
            "right",
            120
        );


    }



    else if(
        currentX >= width - characterWidth
    ){


        walk(
            "left",
            120
        );


    }


}






function isOnCover(){


    const cover =

        document.getElementById("albumCover");



    if(!cover)

        return false;




    const charRect =

        character.getBoundingClientRect();



    const coverRect =

        cover.getBoundingClientRect();




    return (

        charRect.left < coverRect.right &&

        charRect.right > coverRect.left &&

        Math.abs(
            charRect.bottom - coverRect.top
        ) < 80

    );

}




function checkFall(){


    if(!isOnCover()){


        fall();


    }

}






function updateFrame(){


    if(!animations[currentAnimation])

        return;



    sprite.style.backgroundImage =

    `url("assets/characters/${
        animations[currentAnimation].frames[currentFrame]
    }")`;

}






function stopAnimation(){


    clearInterval(animationTimer);


    animationTimer = null;


}






function play(animation){


    if(!animations[animation])

        return;



    if(
        currentAnimation === animation &&
        animation !== "climbEnd"
    ){

        return;

    }



    stopAnimation();


    currentAnimation = animation;


    currentFrame = 0;


    updateFrame();



    const data =
        animations[animation];



    animationTimer = setInterval(()=>{


        currentFrame++;



        if(currentFrame >= data.frames.length){



            if(data.loop){


                currentFrame = 0;



            }else{


                stopAnimation();


                play("idle");


                return;


            }

        }



        updateFrame();



    },data.speed);


}

character.addEventListener(

    "click",

    ()=>{

        const emoji =

            reactions[
                Math.floor(
                    Math.random() *
                    reactions.length
                )
            ];

        showReaction(
            emoji
        );

    }

);

function initCharacter(){


    updatePlaces();



    currentY =
        places.bottom;



    character.style.top =
        `${currentY}px`;



    setState("idle");


    play("idle");



}




initCharacter();






window.character = {


    play,

    goTo,

    walk,

    climb,

    fall,

    places,

    state,

    checkFall,

    checkEdges,

    getState


};