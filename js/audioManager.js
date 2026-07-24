const audio = document.getElementById("ambientAudio");
const DEFAULT_VOLUME = 0.20;

const tracks = {

    sunset:
        "assets/scenes/sunset/music.mp3",

    night:
        "assets/scenes/night/music.mp3",

    forest:
        "assets/scenes/forest/music.mp3",

    rain:
        "assets/scenes/rain/music.mp3",

    freedom:
        "assets/scenes/freedom/music.mp3"

};

let currentTrack = null;

let changing = false;

async function changeTrack(scene){

    if(currentTrack === scene)
        return;

    if(changing)
        return;

    changing = true;

    const targetVolume = DEFAULT_VOLUME;

    // Fade Out
    while(audio.volume > 0.01){

        audio.volume = Math.max(
        0,
        audio.volume - 0.02
        );

        await new Promise(resolve=>{

            setTimeout(resolve,40);

        });

    }

    audio.pause();

    currentTrack = scene;

    audio.src = tracks[scene];

    audio.load();

    audio.volume = 0;

    await audio.play().catch(()=>{});

    // Fade In
    while(audio.volume < targetVolume){

        audio.volume = Math.min(
            
            targetVolume,
            audio.volume + 0.02

        );

        await new Promise(resolve=>{

            setTimeout(resolve,40);

        });

    }

    audio.volume = targetVolume;

    changing = false;

}

window.audioManager = {

    changeTrack

};