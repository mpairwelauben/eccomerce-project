import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark m-4">
  <Link className="navbar-brand" to="/">Javax</Link>
  <Link className="nav-link" to="/note">confirm payment</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
   
      <li className="nav-item dropdown">
        
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Toys</a>
          <a className="dropdown-item" href="#">Sports</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">few</a>
        </div>
      </li>
     
    </ul>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Nav
