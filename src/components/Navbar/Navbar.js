import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'
import Logo from './logo-placeholder.svg'

function Navbar(){

  const [showMenu, setShowMenu] = React.useState(false);

  const visible = {
    display: "flex",
  }
  
  const notVisible = {
    display: "none",
  }

  return(
    <div className="full-nav">
      <header className="load">
        <Link to='./' className="logo float-left">
          <img src={Logo} />
        </Link>
      <div className="hamburger float-right">
        <div className="nav-icon" onClick={() => setShowMenu(true)}>
          <span />
          <span />
        </div>
      </div>
      </header>
      <nav id="full-menu" class="fullmenu" style={showMenu? visible: notVisible} onClick={() => setShowMenu(false)}>
    <div class="menu-container">
        <div class="menu-holder">
            <ul class="navmenu">
                <li>
                    <Link exact path to="/">Home</Link>
                </li>
                <li >
                    <Link to="/weather">Weather</Link>
                </li>
                <li >
                    <Link to="/vegetables">Vegetables</Link>
                </li>
            </ul>                 
        </div>
    </div>
</nav>
    </div>
  )
}


export default Navbar;