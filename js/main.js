import {
    initParticles
} from "./effects/particles.js";

import {
    buildPlaylist,
    showSong
} from "./player.js";

import {
    initSidebar,
    closeSidebar
} from "./sidebar.js";

initSidebar();
initParticles();
buildPlaylist();
showSong(0);
closeSidebar();