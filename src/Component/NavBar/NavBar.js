import React, { Component } from 'react'
import './NavBar.css'
import SearchIcon from '../Icons/SearchIcon';
import GlobalIcon from '../Icons/GlobalIcon';

class NavBar extends Component {
  render() {
    return (
        <nav>
            <div className="menu">
                <a href="#">
                    <i className="fa-solid fa-bars"></i>
                </a>
            </div>
            <img src="https://cdn2.downdetector.com/static/uploads/logo/UDEMY_3_0KKraw2.png" alt="udemy_image" />
            <h4>Categories</h4>
            <div className="container-search">
                <form className="search-bar" action="" >
                    <SearchIcon />
                    <input type="text" placeholder="Search for anything" /> 
                    <button>submit</button>
                    {/* <button onsubmit="searchFunction()">submit</button> */}
                </form>
            </div>
            <h4>Udemy Business</h4>
            <h4>Teach on Udemy</h4>
            <i id="icon" className="fa-solid fa-shop"></i>
            <div className="services">
                <button className="btn-1">Log in</button>
                <button className="btn-2">Sign up</button>
                <div className="nav-icon">
                    <GlobalIcon />
                </div>
            </div>
        </nav>
    )
  }
}

export default NavBar
