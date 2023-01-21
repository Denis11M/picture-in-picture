const videoElement = document.getElementById('video');
const buttonElement = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch error Here
        console.log('Whooops error Here!', error);
    }
}

buttonElement.addEventListener('click', async () => {
    // Disable the Button
    button.disabled = true;
    // Start Picture in Picture 
    await videoElement.requestPictureInPicture();
    // Reset the Button
    button.disabled = false;
});

// on Load
selectMediaStream();