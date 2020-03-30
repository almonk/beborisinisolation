"use strict";

const videoTv = document.getElementById("video-tv");
const videoLaptop = document.getElementById("video-laptop");

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
  videoTv.srcObject = stream;
  videoLaptop.srcObject = stream;
}

// Load init
init();
