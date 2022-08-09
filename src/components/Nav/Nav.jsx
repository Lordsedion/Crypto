import React from 'react'
import './nav.css'
import logo from '../../Images/bitcoin.png'
import { BiUserCircle } from 'react-icons/bi'
import { BiSearchAlt2 } from 'react-icons/bi'
import { FaWallet } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { FaTimes } from 'react-icons/fa'

function showMobileMenu() {
        document.querySelector("#mobile-menu").style.display = 'block'
        document.querySelector('#ham-cancel').style.display = 'block'
        document.querySelector('#hamburger').style.display = 'none'
}
function removeMobileMenu() {
    document.querySelector("#mobile-menu").style.display = 'none'
    document.querySelector('#ham-cancel').style.display = 'none'
    document.querySelector('#hamburger').style.display = 'block'
}
function show_search() {
    document.getElementById('m-sr').style.display = 'flex'
}
function r_search() {
    document.getElementById('m-sr').style.display = 'none'
}

class Nav extends React.Component {
    render() {
        return (     
            <nav className=' nav-container color-dark'>
                <div className="left">
                    <img src={logo} alt="Logo" />
                    <h2>Seidon</h2>
                    <form action="" method="get">
                        <div className="input">
                            <BiSearchAlt2 className='input-search'/>
                            <input type="search" name="search" id="" placeholder='Search items, collections, and profiles' />
                        </div>
                    </form>
                </div>
                <div className="right">
                    <div className="menu-nav">
                        <div className="item">Tutorial</div>
                        <div className="item">Explore</div>
                        <div className="item">Trending</div>
                        <div className="item">Discord</div>
                        <div className="item">About</div>
                    </div>

                    <div className="icons-right">
                        <BiSearchAlt2 className='r-icons' id='mb-search' onClick={() => show_search()}/>
                        <form action="" id='m-sr'>
                            <input type="search" name="search" id="mb-srh-in" placeholder='Search items, collections, and profiles'/>
                           <div className="cancel-ss" onClick={() => r_search()}>&#9587;</div>
                        </form>
                        <BiUserCircle className='r-icons tb-c'/>
                        <FaWallet className='r-icons tb-c'/>
                        <FiMenu className='r-icons hamburger' id='hamburger' onClick={()=> showMobileMenu()}/>
                        <FaTimes className='r-icons none' id='ham-cancel' onClick={()=> removeMobileMenu()}/>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Nav