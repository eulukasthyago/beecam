window.addEventListener('load', () => {
  if(navigator.mediaDevices){
    const videoWebCam:HTMLVideoElement | null = document.querySelector('#video');
    // const mediaStream = await navigator.mediaDevices.getUserMedia({video: true});
    // videoWebCam.srcObject = mediaStream;
    // videoWebCam?.play();
    if(!videoWebCam?.paused){
    }else{
    }
  }
});