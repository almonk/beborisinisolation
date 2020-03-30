"use strict";

const video = document.getElementById("video");

const constraints = {
  audio: false,
  video: {
    width: 1280,
    height: 720
  }
};

// Access webcam
async function init() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
  } catch (e) {
    console.log("Oop.")
    console.log(e)
  }
}

// Success
function handleSuccess(stream) {
  window.stream = stream;
  video.srcObject = stream;
}

// Load init
init();
