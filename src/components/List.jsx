import './List.css'

import { useState } from 'react'

import data from '/src/data.json'

import Player from './Player'

const List = () => {

  const [topPosition, setTopPosition] = useState(0)
  const [leftPosition, setLeftPosition] = useState(0)

  const [episodeId, setEpisodeId] = useState(0)

  const [mouseOver, setMouseOver] = useState(false)
  const [mouseClick, setMouseClick] = useState(false)

  function handleMouseMove(e) {
    setMouseOver(true)

    setTopPosition(e.pageY + 16)
    setLeftPosition(e.pageX + 16)

    setEpisodeId(+e.target.id)
  }

  return (<>
  {mouseClick ? <div className='list-player'>
    <Player data={data} id={episodeId}/>
    <button onClick={() => setMouseClick(false)}><i class="bi bi-arrow-return-left"></i></button>
  </div>  : <> </> }
    <div className='episode-list'>{data.map((episode) => {
      return (<>
        <div className='episode-element'
          style={{ backgroundImage: `url(${episode.image})` }}
          id={episode.id}
          key={episode.title}
          onMouseMove={(e) => handleMouseMove(e)}
          onMouseLeave={() => setMouseOver(false)}
          onClick={() => setMouseClick(true)}
          >
        </div>
      </>)
    })}</div>
    {topPosition !== 0 && mouseOver ?
      <div id='show-episode-card' style={{ top: topPosition, left: leftPosition }}>
        <p>Nome do Episódio: <span>{data[episodeId].title}</span></p>
        <img src={data[episodeId].image} alt="" />
      </div> : <></>}
  </>)
}

export default List