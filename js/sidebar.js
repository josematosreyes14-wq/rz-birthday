import { ui } from "./ui.js";


function openSidebar(){

    ui.sidebar.classList.add("open");

    ui.overlay.classList.add("visible");

    ui.playlistButton.textContent="✕ Cerrar";

}


function closeSidebar(){

    ui.sidebar.classList.remove("open");

    ui.overlay.classList.remove("visible");

    ui.playlistButton.textContent="☰ Playlist";

}



function initSidebar(){

    ui.playlistButton.addEventListener(
        "click",
        ()=>{

            if(
                ui.sidebar.classList.contains("open")
            ){

                closeSidebar();

            }else{

                openSidebar();

            }

        }
    );


    ui.closeSidebarButton.addEventListener(
        "click",
        closeSidebar
    );


    ui.overlay.addEventListener(
        "click",
        closeSidebar
    );

}



export {
    initSidebar,
    openSidebar,
    closeSidebar
};