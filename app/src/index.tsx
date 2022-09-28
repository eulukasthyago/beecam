import React, { useEffect, useRef } from 'react';
import { ElementDraggable } from './components/ElementDraggable';
import LoadingMessage from './components/LoadingMessage';
import { WebCam } from './components/WebCam';
import GlobalStyles from './styles';

export default function (){
    const videoRef = useRef(null);
    useEffect(() => {
        (async () => {
            if(navigator.mediaDevices){
                //const mediaStream = await navigator.mediaDevices.getUserMedia({video: true});
                //videoRef.current.srcObject = mediaStream;
                //videoRef.current?.play();
            }
        })();
    }, []);
    return(
        <>
            <GlobalStyles />
            <ElementDraggable>
                <LoadingMessage />
                <WebCam id='video' ref={videoRef} />
            </ElementDraggable>
        </>
    );
}