const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async () => {
  console.log("Button clicked");
  console.log("Audio file:", music.currentSrc);

  try {
    if (music.paused) {
      await music.play();
      musicBtn.textContent = "Pause Music";
      console.log("Music is playing");
    } else {
      music.pause();
      musicBtn.textContent = "Play Music";
      console.log("Music is paused");
    }
  } catch (error) {
    console.error("Music failed:", error);
  }
});