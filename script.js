
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

if (bgMusic && musicToggle) {

    bgMusic.volume = 0.35;

    function updateButton() {
        musicToggle.textContent = bgMusic.paused
            ? "♫ Music: OFF"
            : "♫ Music: ON";
    }

    // Attempt autoplay
    bgMusic.play()
        .then(updateButton)
        .catch(() => {
            musicToggle.textContent = "♫ Click to play";
        });

    // Music button
    musicToggle.addEventListener("click", async () => {
        if (bgMusic.paused) {
            try {
                await bgMusic.play();
            } catch (error) {
                console.error("Music playback failed:", error);
            }
        } else {
            bgMusic.pause();
        }

        updateButton();
    });

    // Start music after the visitor interacts elsewhere
    document.addEventListener("pointerdown", (event) => {
        if (event.target.closest("#musicToggle")) return;

        if (bgMusic.paused) {
            bgMusic.play().then(updateButton).catch(console.error);
        }
    }, { once: true });

    bgMusic.addEventListener("play", updateButton);
    bgMusic.addEventListener("pause", updateButton);
}
