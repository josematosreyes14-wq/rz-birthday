import { night } from "./presets/night.js";
import { sunset } from "./presets/sunset.js";
import { forest } from "./presets/forest.js";
import { rain } from "./presets/rain.js";
import { freedom } from "./presets/freedom.js";
import { ui } from "../ui.js";

const scenes = {

    night,

    sunset,

    forest,

    rain,

    freedom

};

let currentScene = null;

function changeScene(sceneId){

    if(currentScene === sceneId){
        return;
    }

    currentScene = sceneId;

    const scene = scenes[sceneId];
    

    ui.sceneBackground.style.opacity = 0;

    setTimeout(() => {

        ui.sceneBackground.style.backgroundImage =
        `url("${scene.background}")`;

        ui.sceneBackground.style.opacity = 1;

    },250);

}

export {
    changeScene
};