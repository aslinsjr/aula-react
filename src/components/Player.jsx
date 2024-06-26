import "./Player.css"

const Player = ({data, id}) => {

  return (
    <div id='video-player'>
        <iframe
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