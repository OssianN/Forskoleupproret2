import React, { useState } from "react"
import "./videoIframe.css"

const VideoIframe = ({ video, thumb }) => {
  const [play, setPlay] = useState(false)

  if (!thumb) {
    return <></>
  }

  const handlePlay = () => {
    setPlay(!play)
  }

  return (
    <div className={"video__container"}>
      {!play ? (
        <img className={"video__thumb"} src={thumb} alt="video thumbnail" />
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={video}
          frameBorder="0"
          allowFullScreen
          title="Embedded youtube"
        />
      )}
      {video && (
        <button className="video__play-button" onClick={handlePlay}>
          {play ? "Stoppa" : "Spela"} video &#x203A;
        </button>
      )}
    </div>
  )
}

export default VideoIframe
