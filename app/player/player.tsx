import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";
import { Link } from "react-router";
import ControlIconButton from "./control_button";
import { ArrowLeft, Download } from "lucide-react";
import "./player.css";

const VIDEO_URL =
  "https://stream.mux.com/maVbJv2GSYNRgS02kPXOOGdJMWGU1mkA019ZUjYE7VU7k.m3u8";

export default function Player() {
  const controllerRef = useRef<HTMLMediaControllerElement>(null);

  useEffect(() => {
    controllerRef.current?.focus();
  }, []);

  function handleDownload() {
    const link = document.createElement("a");
    link.href = VIDEO_URL; // Ensure the VIDEO_URL points to a downloadable video file (not a stream like .m3u8)
    link.download = "video.mp4"; // Set desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="w-screen h-screen overflow-hidden bg-black flex justify-center items-center">
      <MediaController
        ref={controllerRef}
        tabIndex={0}
        className="relative w-full h-full outline-none"
      >
        {/* Back Button */}
        <div className="absolute top-0 left-0 w-full p-4 flex justify-start z-10">
          <Link
            to={"/"}
            className="
      hover:bg-white/20 
      text-white 
      rounded-full 
      w-10 h-10 
      flex items-center justify-center
      transition
    "
          >
            <ArrowLeft />
          </Link>
        </div>

        {/* Video */}
        <ReactPlayer
          slot="media"
          src={VIDEO_URL}
          playing={true}
          controls={false}
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />

        {/* Progress Bar */}
        <MediaTimeRange className="w-full custom-progress bg-transparent" />

        {/* Control Bar */}
        <MediaControlBar className="flex items-center justify-between p-2">
          <div className="flex items-center space-x-2">
            <MediaPlayButton className="media-button" />
            <MediaSeekBackwardButton seekOffset={10} className="media-button" />
            <MediaSeekForwardButton seekOffset={10} className="media-button" />
            <MediaTimeDisplay
              showDuration
              className="bg-transparent media-button-wide py-2 px-3 rounded-xl"
            />
            <div className="relative group">
              {/* Mute Button */}
              <MediaMuteButton className="media-button" />

              {/* Volume Slider */}
              <MediaVolumeRange
                className="
                custom-progress
      bg-transparent 
      absolute left-full top-1/2 
      transform -translate-y-1/2
      opacity-0 group-hover:opacity-100
      transition-opacity duration-200
    "
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <MediaPlaybackRateButton className="media-button" />
            <ControlIconButton
              Icon={Download}
              onClick={handleDownload}
              title="Download Video"
            />
            <MediaFullscreenButton className="media-button" />
          </div>
        </MediaControlBar>
      </MediaController>
    </div>
  );
}
