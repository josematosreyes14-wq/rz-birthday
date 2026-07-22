const preview =
    document.getElementById("proofPreview");

const viewer =
    document.getElementById("proofViewer");

const closeButton =
    document.getElementById("closeProof");

const overlay =
    document.getElementById("proofOverlay");

function openProof(){

    preview.classList.add("hidden");

    viewer.classList.add("open");

    viewer.classList.add("open");

}

function closeProof(){

    viewer.classList.remove("open");

    preview.classList.remove("hidden");

    viewer.classList.remove("open");

}

preview.addEventListener(
    "click",
    openProof
);

closeButton.addEventListener(
    "click",
    closeProof
);

overlay.addEventListener(
    "click",
    closeProof
);

window.addEventListener(
    "keydown",
    (event)=>{

        if(
            event.key === "Escape"
        ){

            closeProof();

        }

    }
);