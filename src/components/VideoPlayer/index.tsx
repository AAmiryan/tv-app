import { useEffect, useRef } from "react";
import type { VideoPlayerProps } from "../../types";
import { VideoPlayerContainer } from "./styled";

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, isVisible }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isVisible && videoRef.current && videoUrl) {
      const fallbackVideoUrl =
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
      const finalVideoUrl = videoUrl || fallbackVideoUrl;

      videoRef.current.src = finalVideoUrl;
      videoRef.current.load();

      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
        if (videoUrl !== fallbackVideoUrl) {
          videoRef.current!.src = fallbackVideoUrl;
          videoRef.current!.load();
          videoRef.current!.play().catch((fallbackError) => {
            console.error("Fallback video also failed:", fallbackError);
          });
        }
      });
    } else if (!isVisible && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.src = "";
    }
  }, [isVisible, videoUrl]);

  if (!isVisible || !videoUrl) {
    return null;
  }

  return (
    <VideoPlayerContainer>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundColor: "black",
        }}
      />
    </VideoPlayerContainer>
  );
};

export default VideoPlayer;
