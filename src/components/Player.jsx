import { useState, useEffect } from "react"

import "./Player.css"

const Player = ({ data, id }) => {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
  },[id])

  return (
    <div id='video-player'>
      <img id="loader-img" style={loaded ? {display: "none"} : {}} src="loader.gif" alt="Loader Image" />
      <iframe
      onLoad={() => setLoaded(true)}
      width="560"
      height="315"
      src={data[id].src}
      title={data[id].title}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen="true">
    </iframe>
    </div>
  )
}

export default Player