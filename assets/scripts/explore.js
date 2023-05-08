// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;

  const inputTxt = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const img = document.querySelector('img');

  let voices = [];

  // populate the voice list
  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const button = document.querySelector('button');
    button.addEventListener("click", (event) => {
      // change the image when speaking
      img.src = "assets/images/smiling-open.png";

      let utterance = new SpeechSynthesisUtterance(inputTxt.value);

      // change the voice
      const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
          utterance.voice = voices[i];
        }
      }
      synth.speak(utterance);

      // change the image back
      utterance.addEventListener("end",(event) => {
        img.src = "assets/images/smiling.png";
      }); 
    });
}