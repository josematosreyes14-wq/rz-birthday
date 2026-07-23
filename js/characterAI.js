const characterAI = {

    active:true,


    start(){

        this.think();

    },


    think(){


        if(!this.active)
            return;



        const state =
            window.character.getState();



        // Si está haciendo algo,
        // esperamos

        if(state.action !== "idle"){

            setTimeout(
                ()=>this.think(),
                3000
            );

            return;

        }



        const choice =
            Math.random();



        console.log(
            "Spiderman piensa:",
            choice
        );



        /*
            0 - 0.45
            quedarse quieto

            0.45 - 0.8
            caminar

            0.8 - 1
            trepar
        */


        if(choice < 0.45){


            window.character.play(
                "idle"
            );



        }else if(choice < 0.8){



            const direction =

                Math.random() > 0.5

                ? "right"

                : "left";



            const distance =

                Math.random()*180 + 40;



                window.character.walk(

                    direction,

                    distance

                );



        }else{

            window.character.climb(
                Math.random()*250 + 100
            );


        }




        const nextDecision =

            Math.random()*1000 + 1000;



        setTimeout(

            ()=>this.think(),

            nextDecision

        );


    }

};










function fall(){


    window.character.state.action =
        "falling";



    window.character.play(
        "slide"
    );



    character.style.transition =

        "top .8s ease";



    character.style.top =

        `${window.character.places.bottom}px`;



    setTimeout(()=>{


        window.character.state.action =
            "idle";


        window.character.play(
            "idle"
        );


    },800);


}




characterAI.start();