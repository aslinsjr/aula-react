import './List.css'

import data from '/src/data.json'

const List = () => {
  return (
    <div className='episode-list'>{data.map((episode) => {
        return (
            <div key={episode.title}>
                <img src={episode.image} alt="" />
            </div>
        )
    })}</div>
  )
}

export default List