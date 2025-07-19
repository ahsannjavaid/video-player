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

const VIDEO_URL =
  "https://stream.mux.com/maVbJv2GSYNRgS02kPXOOGdJMWGU1mkA019ZUjYE7VU7k.m3u8";

export default function Player() {
  const controllerRef = useRef<HTMLMediaControllerElement>(null);

  useEffect(() => {
    controllerRef.current?.focus();
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden m-0 p-[200px] bg-black flex justify-center items-center flex-col">
      
      {/* Back Button */}
      <Link
        to={"/"}
        className="self-start mb-4 hover:text-gray-200 transition"
      >
        ← Back
      </Link>

      <MediaController
        ref={controllerRef}
        tabIndex={0}
        className="w-full max-w-screen aspect-video bg-black outline-none"
      >
        <ReactPlayer
          slot="media"
          src={VIDEO_URL}
          playing={true}
          controls={false}
          width="100%"
          height="100%"
          style={{
            objectFit: "cover",
          }}
        />
        <MediaControlBar>
          <MediaPlayButton />
          <MediaSeekBackwardButton seekOffset={10} />
          <MediaSeekForwardButton seekOffset={10} />
          <MediaTimeRange />
          <MediaTimeDisplay showDuration />
          <MediaMuteButton />
          <MediaVolumeRange />
          <MediaPlaybackRateButton />
          <MediaFullscreenButton />
        </MediaControlBar>
      </MediaController>
    </div>
  );
}
