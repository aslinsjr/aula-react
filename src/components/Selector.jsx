import "./Selector.css"

const Selector = ({data, handleChange, handleClick}) => {
  return (
    <div className="select-controll">
      <i className="bi bi-caret-left" id='left' onMouseOver={(e) => handleChange(e)}></i>
      <div id="select-video">
        {data.map((episode) => {
          return (<div className='episode-container' key={episode.title} id={episode.id} onClick={(e) => handleClick(e)}>
            <p id={episode.id} >{episode.title}</p>
            <img id={episode.id} src={episode.image} alt="" />
          </div>)
        })}
      </div>
      <i className="bi bi-caret-right" id='right' onMouseOver={(e) => handleChange(e)}></i>
      </div>
  )
}

export default Selector