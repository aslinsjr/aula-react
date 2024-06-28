import "./Header.css"

import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'><img id="logo" src="./telaflix.png" alt="" /></Link>
      <nav>
        <Link to='/list'>Episódios</Link>
      </nav>
    </div>
  )
}

export default Header