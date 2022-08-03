import React from 'react'
import './toprank.css'
import { IoIosArrowDown } from 'react-icons/io'
import girl from '../../Images/girl.jpg'

const Toprank = () => {
  return (
    <section id="toprank">
      <h1 className="toprank-title">Top Ranking in the last   <span className='toprank-range'>24 hours <IoIosArrowDown className='toprankArrow-range' /></span> </h1>
      <div className="toprank-container">
        <div className="toprank-chart-ranking">
          <div className="tp-rk-ct-item">
            <p className="tp-no">1</p>
            <img src={girl} alt="" className='rank-p-pic' />
            <div className="item-tp-details">
              <div className='tp-l-left'>
                <div className="it-tp-name">Athena</div>
              <div className="it-tp-floorPrice">Floor Price: <span className="tp-floorPrice-value">7.6</span></div>
              </div>
              <div className="tp-l-right">
                <div className="tp-p-rise"> <span className="tp-sign">+</span> 324%</div>
                <div className="it-tp-price">3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Toprank