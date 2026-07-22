import { ui } from "./ui.js";

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

export { applyTheme };