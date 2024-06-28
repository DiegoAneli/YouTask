'use client';

import React, { useEffect, useRef } from 'react';

const VideoConference: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((error) => {
          console.error('Errore durante l\'accesso alla videocamera', error);
        });
    }
  }, []);

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Videoconferenza</h2>
      <div className="flex justify-center">
        <video ref={videoRef} autoPlay className="w-full rounded-lg border" />
      </div>
    </div>
  );
};

export default VideoConference;
