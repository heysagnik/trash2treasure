'use client';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import styles from './upload.module.css';



export default function CameraCapturePage() {
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [photoUrl, setPhotoUrl] = useState<string | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const startCamera = async () => {
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'environment' },
            });
            setStream(mediaStream);
            if (videoRef.current) {
                videoRef.current.srcObject = mediaStream;
            }
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    const stopCamera = () => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            setStream(null);
        }
    };

    const capturePhoto = () => {
        if (videoRef.current && canvasRef.current) {
            const canvas = canvasRef.current;
            const video = videoRef.current;
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            
            const context = canvas.getContext('2d');
            if (context) {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const photoData = canvas.toDataURL('image/jpeg');
                setPhotoUrl(photoData);
                stopCamera();
            }
        }
    };

    const retakePhoto = () => {
        setPhotoUrl(null);
        startCamera();
    };

    return (
        <div className="min-h-screen p-4 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Take a Photo of Your Item</h1>
            
            <div className="relative w-full max-w-md aspect-video bg-gray-900 rounded-lg overflow-hidden">
                {!photoUrl ? (
                    <>
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            className="w-full h-full object-cover"
                        />
                        {!stream && (
                            <Button 
                                onClick={startCamera}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            >
                                Start Camera
                            </Button>
                        )}
                        {stream && (
                            <Button 
                                onClick={capturePhoto}
                                className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                            >
                                Take Photo
                            </Button>
                        )}
                    </>
                ) : (
                    <div className="relative">
                        <img src={photoUrl} alt="Captured" className="w-full h-full object-cover" />
                        <Button 
                            onClick={retakePhoto}
                            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                        >
                            Retake Photo
                        </Button>
                    </div>
                )}
            </div>
            
            <canvas ref={canvasRef} className="hidden" />
        </div>
    );
}