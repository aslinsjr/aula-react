import './App.css'

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Player from './components/Player'
import Selector from './components/Selector'


import data from './data.json'

function App() {

  const [id, setId] = useState(3)

  function handleClick(e) {
    setId(e.target.id)
  }

  function handleChange(e) {
    const selectSection = document.querySelector("#select-video")

    if (e.target.id === "left") {
      selectSection.scrollLeft = -1440;
    }

    if (e.target.id === "right") {
      selectSection.scrollLeft = 1440;
    }

  }

  return (
    <Router>
      <div className='app-container'>
        <Header />
        <Routes>
          <Route path="/" element={<>
            <Player data={data} id={id} />
            <Selector data={data} handleChange={handleChange} handleClick={handleClick} />
          </>} />
        </Routes>
      </div>
    </Router>
  )
}



export default App
