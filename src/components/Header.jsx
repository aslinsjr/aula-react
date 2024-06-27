import "./Header.css"

import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className='header'>
      <img id="logo" src="./telaflix.png" alt="" />
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/list'>Episódios</Link>
      </nav>
    </div>
  )
}

export default Header