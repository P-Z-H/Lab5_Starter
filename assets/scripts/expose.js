// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();

function init() {
  // the horn-select elements
  const horn = document.getElementById("horn-select");

  horn.addEventListener("change", (event) => {
    //differet actions for different selections
    if (horn.value == "air-horn"){
      // change image
      const img = document.querySelector('img');
      img.src="assets/images/air-horn.svg";

      // play audio
      const audio = document.getElementsByClassName("hidden")[0];
      audio.src="assets/audio/air-horn.mp3";
      const button = document.querySelector('button');
      button.addEventListener("click", (event) => {audio.play();});
    }
    else if (horn.value == "car-horn"){
      // change image
      const img = document.querySelector('img');
      img.src="assets/images/car-horn.svg";

      // play audio
      const audio = document.getElementsByClassName("hidden")[0];
      audio.src="assets/audio/car-horn.mp3";
      const button = document.querySelector('button');
      button.addEventListener("click", (event) => {audio.play();});
    }
    else if (horn.value == "party-horn"){
      // change image
      const img = document.querySelector('img');
      img.src="assets/images/party-horn.svg";

      // play audio
      const audio = document.getElementsByClassName("hidden")[0];
      audio.src="assets/audio/party-horn.mp3";
      const button = document.querySelector('button');
      button.addEventListener("click", (event) => {
        audio.play();
        // add the confetti animation
        jsConfetti.addConfetti();
      });
    };
  });

  // volume elements
  const volume = document.getElementById("volume");

  volume.addEventListener("change", (event) => {
    // set the volume
    document.getElementsByClassName("hidden")[0].volume = volume.value / 100;

    //differet images for differnt volumes
    if (volume.value == 0){
      const img = document.querySelector("img[alt='Volume level 2']");
      img.src="assets/icons/volume-level-0.svg";
    }
    else if (1<= volume.value && volume.value < 33){
      const img = document.querySelector("img[alt='Volume level 2']");
      img.src="assets/icons/volume-level-1.svg";
    }
    else if (33<= volume.value && volume.value < 67){
      const img = document.querySelector("img[alt='Volume level 2']");
      img.src="assets/icons/volume-level-2.svg";
    }
    else if (67<= volume.value && volume.value <= 100){
      const img = document.querySelector("img[alt='Volume level 2']");
      img.src="assets/icons/volume-level-3.svg";
    }
  });


}