import React, { useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    
    console.log("play");
  };
  const handlePause = () => {
    console.log("pause");
  };

  return (
    <>
      <div>
        <h2>Interactive Video Player</h2>
        <video
          src="https://www.youtube.com/watch?v=xxRAA0v2lvM&pp=0gcJCfwAo7VqN5tD"
          width={"400"}
          ref={videoRef}
        >
          Sorry Browser is not properly working
        </video>
        <div>
          <button onClick={handlePlay}>play</button>
          <button onClick={handlePause}>pause</button>
        </div>
      </div>
    </>
  );
}

export default VideoPlayer;
