import React from 'react'
import main from '../../Images/main.jpg'
import userpic from '../../Images/userman.jpg'
import {MdOutlineExplore} from 'react-icons/md'
import {GiTeacher} from 'react-icons/gi'
import {FiTrendingUp} from 'react-icons/fi'
import {IoIosStats} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'
import './header.css'

const HamburgerNav = () => {
    return (
        <div id="mobile-menu">
            <div className="m-up">
                <div><MdOutlineExplore className='m-navt'/> <div className="m-explore">Explore</div> <div className="fl-right" ><IoIosArrowForward/></div></div>
                <div><GiTeacher className='m-navt'/><div className="m-tutorial">Tutorial</div> <div className="fl-right" ><IoIosArrowForward/></div></div>
                <div><FiTrendingUp className='m-navt'/><div className="m-trend">Trending</div> <div className="fl-right" ><IoIosArrowForward/></div></div>
                <div><IoIosStats  className='m-navt'/><div className="m-stats">Stats</div> <div className="fl-right" ><IoIosArrowForward/></div></div>
            </div>
            <div className="c-wallet">Connect wallet</div>
        </div>
    )
}

const Header = () => {
    return (
        <header>
            <HamburgerNav />
            <div className="header-container">
                <div className="left">
                    <h1 className='main-w'>Buy and Sell NFTs Collections here</h1>
                    <h3 className='sub-w'>Tributes to  the most high Poseidon, ruler of the sea and slayer of sky daddy</h3>

                    <div className="explore">Explore</div>
                    <div className="create">Create</div>
                </div>
                <div className="right">
                    <div className="image-container">
                        <img src={main} alt="Landing" className='header-main-img' />
                        <div className="info-container">
                            <div className="user-det">
                                <img src={userpic} alt="User" />
                                <div className="info">
                                    <h3 className='username'>LordSeidon</h3>
                                    <p className="caption">Ruler of the High Sea; Poseidon The great and Mighty!!!</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header