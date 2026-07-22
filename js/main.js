import {
    buildPlaylist,
    showSong
} from "./player.js";

import {
    initSidebar,
    closeSidebar
} from "./sidebar.js";

initSidebar();
buildPlaylist();
showSong(0);
closeSidebar();