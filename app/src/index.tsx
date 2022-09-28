import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { ElementDraggable } from './components/ElementDraggable';
import LoadingMessage from './components/LoadingMessage';
import { WebCam } from './components/WebCam';
import GlobalStyles from './styles';

export default function (){
    const videoRef = useRef() as MutableRefObject<HTMLVideoElement> ;
    const [ showVideo, setShowVideo ] = useState(true);
    useEffect(() => {
        (async () => {
            if(navigator.mediaDevices){
                const mediaStream = await navigator.mediaDevices.getUserMedia({video: true});
                videoRef.current.srcObject = mediaStream;
                videoRef.current?.play();
                if(!videoRef.current.paused){
                    setShowVideo(true);
                }else{
                    setShowVideo(false);
                }
                console.log(videoRef.current.paused);
            }
        })();
    }, []);
    return(
        <>
            <GlobalStyles />
            <ElementDraggable>
                <LoadingMessage />
                <WebCam id='video' ref={videoRef} show={showVideo}/>
            </ElementDraggable>
        </>
    );
}