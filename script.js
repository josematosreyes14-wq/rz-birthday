const TRANSITION_TIME = 250;

const ui = {    
    playlist: document.getElementById("playlist"),

    ambientGlow: document.getElementById("ambientGlow"),

    title: document.getElementById("songTitle"),
    artist: document.getElementById("songArtist"),
    duration: document.getElementById("songDuration"),
    message: document.getElementById("songMessage"),
    counter: document.getElementById("songCounter"),

    previous: document.getElementById("previousButton"),
    next: document.getElementById("nextButton"),
    youtube: document.getElementById("youtubeButton"),

    albumCover: document.getElementById("albumCover"),

    songContent: document.getElementById("songContent"),

    playlistButton: document.getElementById("playlistButton"),
    closeSidebarButton: document.getElementById("closeSidebarButton"),
    sidebar: document.getElementById("sidebar"),
    playlistList: document.getElementById("playlistList"),
    overlay: document.getElementById("overlay")

};


let currentSong = 0;

function updateActiveSong() {

    const items = document.querySelectorAll(".playlist-item");

    items.forEach((item, index) => {

        item.classList.toggle("active", index === currentSong);

    });

    const active = document.querySelector(".playlist-item.active");

    if (active) {

        active.scrollIntoView({

            behavior: "smooth",
            block: "nearest"

        });

    }

}

function applyTheme(song) {

    document.documentElement.style.setProperty(
        "--bg-primary",
        song.theme.background
    );

    document.documentElement.style.setProperty(
        "--glow",
        song.theme.glow
    );

    document.documentElement.style.setProperty(
        "--accent",
        song.theme.accent
    );


    ui.ambientGlow.style.background = `
        radial-gradient(
            circle,
            ${song.theme.glow},
            transparent 60%
        )
    `;

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateSongChange(index) {

    ui.songContent.classList.add("fade-out");

    await sleep(TRANSITION_TIME);

    showSong(index);

    ui.songContent.classList.remove("fade-out");
    ui.songContent.classList.add("fade-in");

    await sleep(TRANSITION_TIME);

    ui.songContent.classList.remove("fade-in");

}

// Actualiza toda la interfaz con la información de la canción actual
function showSong(index) {

    const song = songs[index];

    ui.title.textContent = song.title;
    ui.artist.textContent = song.artist;
    ui.duration.textContent = song.duration || "";
    ui.message.textContent = song.message || "";

    ui.counter.textContent =
        `Canción ${index + 1} de ${songs.length}`;

    
    ui.albumCover.src = song.cover || "assets/covers/default.jpg";
    ui.albumCover.alt = `${song.title} - ${song.artist}`;

    applyTheme(song);

    updateActiveSong();

    ui.previous.disabled = (index === 0);
    ui.next.disabled = (index === songs.length - 1);

}

function buildPlaylist() {

    ui.playlistList.innerHTML = "";

    songs.forEach((song, index) => {

        const button = document.createElement("button");

        button.className = "playlist-item";

        button.dataset.index = index;
        button.innerHTML = `
            <div class="playlist-number">
                ${String(index + 1).padStart(2, "0")}
            </div>

            <div class="playlist-text">
                <div class="playlist-title">${song.title}</div>
                <div class="playlist-artist">${song.artist}</div>
            </div>
        `;

        button.addEventListener("click", () => {

            currentSong = index;

            animateSongChange(currentSong);

        });

        ui.playlistList.appendChild(button);

    });

}
function openSidebar() {

    ui.sidebar.classList.add("open");
    ui.overlay.classList.add("visible");

    ui.playlistButton.textContent = "✕ Cerrar";

}

function closeSidebar() {

    ui.sidebar.classList.remove("open"); 
    ui.overlay.classList.remove("visible");

    ui.playlistButton.textContent = "☰ Playlist";

}

ui.playlistButton.addEventListener("click", () => {

    if(ui.sidebar.classList.contains("open")){

        closeSidebar();

    } else {

        openSidebar();

    }

});

ui.closeSidebarButton.addEventListener("click", () => {

    closeSidebar();

});

ui.overlay.addEventListener("click", () => {

    closeSidebar();

});

ui.next.addEventListener("click", () => {

    if(currentSong < songs.length - 1){

        currentSong++;

        animateSongChange(currentSong);

    }

});

ui.previous.addEventListener("click", () => {

    if(currentSong > 0){

        currentSong--;

        animateSongChange(currentSong);

    }

});

ui.youtube.addEventListener("click", () => {

    const song = songs[currentSong];

    if (!song.videoId) {

        alert("Esta canción todavía no tiene un vídeo asociado.");

        return;

    }

    const url = `https://www.youtube.com/watch?v=${song.videoId}`;

    window.open(url, "_blank");

});

buildPlaylist();

showSong(currentSong);

closeSidebar();