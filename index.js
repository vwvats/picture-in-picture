const videoElement = document.getElementById('video');
const selectButton = document.getElementById('select-btn');
const playButton = document.getElementById('play-btn');

// Select media stream, pass to video element, and play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // catch error here
  }
}

// Choose the screen to display
selectButton.addEventListener('click', selectMediaStream);

// Display the screen
playButton.addEventListener('click', async() => {
  // disable button
  playButton.disabled = true;
  // start picture in picture
  await videoElement.requestPictureInPicture();
  // reset button
  playButton.disabled = false;
});
