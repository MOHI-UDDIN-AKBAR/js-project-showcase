// DOM Elements
const video = document.querySelector(".video-player__media");
const playBtn = document.querySelector(".video-player__btn-play");
const pauseBtn = document.querySelector(".video-player__btn-pause");

console.log(video, playBtn, pauseBtn);

// Functions

function setActiveButton(isPlaying) {
  playBtn.classList.toggle("active-btn", isPlaying);
  pauseBtn.classList.toggle("active-btn", !isPlaying);
}

function handlePlay() {
  try {
    if (video.paused) {
      video.play();
      setActiveButton(true);
    }
  } catch (e) {
    console.error("Video Failed to play: ", e);
  }
}

function handlePause() {
  if (!video.paused) {
    video.pause();
    setActiveButton(false);
  }
}

// Event Listeners
playBtn.addEventListener("click", () => handlePlay());

pauseBtn.addEventListener("click", () => handlePause());
