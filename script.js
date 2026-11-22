
// ======================================
// AFTERIMAGE: BLUEHOUR
// MUSIC PLAYER SYSTEM
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const bgMusic = document.getElementById("bgMusic");
    const musicToggle = document.getElementById("musicToggle");

    // Stop if the music player is not on this page
    if (!bgMusic || !musicToggle) {
        return;
    }

    // Starting volume
    bgMusic.volume = 0.35;

    // Update button appearance and text
    function updateMusicButton() {

        if (bgMusic.paused) {
            musicToggle.textContent = "♫ Music: OFF";
            musicToggle.setAttribute("aria-pressed", "false");
        } else {
            musicToggle.textContent = "♫ Music: ON";
            musicToggle.setAttribute("aria-pressed", "true");
        }
    }

    // Try to autoplay when the page loads
    bgMusic.play()
        .then(() => {
            updateMusicButton();
            console.log("BLUEHOUR soundtrack started!");
        })
        .catch(() => {
            updateMusicButton();
            console.log("Autoplay blocked. Click the music button.");
        });

    // Floating music button
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

        updateMusicButton();
    });

    // Keep button synchronized with audio controls
    bgMusic.addEventListener("play", updateMusicButton);
    bgMusic.addEventListener("pause", updateMusicButton);

    // Detect loading problems
    bgMusic.addEventListener("error", () => {
        console.error(
            "Could not load soundtrack:",
            bgMusic.currentSrc
        );
    });

    // Initial button state
    updateMusicButton();

});
