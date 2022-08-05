import React from 'react'
import './toprank.css'
import { IoIosArrowDown } from 'react-icons/io'
import { FaEthereum } from 'react-icons/fa'
import girl from '../../Images/girl.jpg'

function showDropDown() {
  if (document.getElementById('toprank-range-id').style.display === 'inline-block') { document.getElementById('toprank-range-id').style.display = 'none' }
  else { document.getElementById('toprank-range-id').style.display = 'inline-block' }
}
let modal = document.getElementById('toprank-range')
window.onclick = function (event) {
  console.log(event.target, "Modal", modal)
  if (event.target == modal) {
    console.log("Rabbit hole")
  }
  else {
    document.getElementById('toprank-range-id').style.display = 'none'
  }
}

const Toprank = () => {
  return (
    <section id="toprank">
      <h1 className="toprank-title">Top Ranking in the last   <span className='toprank-range' id='toprank-range' onClick={() => showDropDown()}>24 hours &#8744;</span> <div className="toprank-range-dropdown" id='toprank-range-id'><small>12 Hours</small><small>12 Hours</small><small>12 Hours</small><small>12 Hours</small></div></h1>
      <div className="toprank-container">
        <div className="toprank-chart-ranking">
          <div className="tp-column">
            <div className="tp-rk-ct-item">
              <p className="tp-no">1</p>
              <img src={girl} alt="" className='rank-p-pic' />
              <div className="item-tp-details">
                <div className='tp-l-left'>
                  <div className="it-tp-name">Athena</div>
                  <div className="it-tp-floorPrice">Floor Price: <span className='tp-currency'><FaEthereum /></span> <span className="tp-floorPrice-value">7.6</span></div>
                </div>
                <div className="tp-l-right">
                  <div className="tp-p-rise "><span className="tp-gaining">+324%</span></div>
                  <div className="it-tp-price"> <span className='tp-currency'><FaEthereum /></span>3</div>
                </div>
              </div>
            </div>
            <div className="tp-rk-ct-item">
              <p className="tp-no">2</p>
              <img src={girl} alt="" className='rank-p-pic' />
              <div className="item-tp-details">
                <div className='tp-l-left'>
                  <div className="it-tp-name">Zeus</div>
                  <div className="it-tp-floorPrice">Floor Price: <span className='tp-currency'><FaEthereum /></span> <span className="tp-floorPrice-value">7.6</span></div>
                </div>
                <div className="tp-l-right">
                  <div className="tp-p-rise "><span className="tp-gaining">+324%</span></div>
                  <div className="it-tp-price"> <span className='tp-currency'><FaEthereum /></span>3</div>
                </div>
              </div>
            </div>
            <div className="tp-rk-ct-item">
              <p className="tp-no">3</p>
              <img src={girl} alt="" className='rank-p-pic' />
              <div className="item-tp-details">
                <div className='tp-l-left'>
                  <div className="it-tp-name">Etrigan</div>
                  <div className="it-tp-floorPrice">Floor Price: <span className='tp-currency'><FaEthereum /></span> <span className="tp-floorPrice-value">7.6</span></div>
                </div>
                <div className="tp-l-right">
                  <div className="tp-p-rise "><span className="tp-gaining">+324%</span></div>
                  <div className="it-tp-price"> <span className='tp-currency'><FaEthereum /></span>3</div>
                </div>
              </div>
            </div>
            <div className="tp-rk-ct-item">
              <p className="tp-no">4</p>
              <img src={girl} alt="" className='rank-p-pic' />
              <div className="item-tp-details">
                <div className='tp-l-left'>
                  <div className="it-tp-name">Neptune</div>
                  <div className="it-tp-floorPrice">Floor Price: <span className='tp-currency'><FaEthereum /></span> <span className="tp-floorPrice-value">7.6</span></div>
                </div>
                <div className="tp-l-right">
                  <div className="tp-p-rise "><span className="tp-gaining">+324%</span></div>
                  <div className="it-tp-price"> <span className='tp-currency'><FaEthereum /></span>3</div>
                </div>
              </div>
            </div>
          </div>

          <div className="tp-column">
            <div className="tp-rk-ct-item">
              <p className="tp-no">5</p>
              <img src={girl} alt="" className='rank-p-pic' />
              <div className="item-tp-details">
                <div className='tp-l-left'>
                  <div className="it-tp-name">Dart vader</div>
                  <div className="it-tp-floorPrice">Floor Price: <span className='tp-currency'><FaEthereum /></span> <span className="tp-floorPrice-value">7.6</span></div>
                </div>
                <div className="tp-l-right">
                  <div className="tp-p-rise "><span className="tp-gaining">+324%</span></div>
                  <div className="it-tp-price"> <span className='tp-currency'><FaEthereum /></span>3</div>
                </div>
              </div>
            </div>
            <div className="tp-rk-ct-item">
              <p className="tp-no">6</p>
              <img src={girl} alt="" className='rank-p-pic' />
              <div className="item-tp-details">
                <div className='tp-l-left'>
                  <div className="it-tp-name">Chin Tau</div>
                  <div className="it-tp-floorPrice">Floor Price: <span className='tp-currency'><FaEthereum /></span> <span className="tp-floorPrice-value">7.6</span></div>
                </div>
                <div className="tp-l-right">
                  <div className="tp-p-rise "><span className="tp-gaining">+324%</span></div>
                  <div className="it-tp-price"> <span className='tp-currency'><FaEthereum /></span>3</div>
                </div>
              </div>
            </div>
            <div className="tp-rk-ct-item">
              <p className="tp-no">7</p>
              <img src={girl} alt="" className='rank-p-pic' />
              <div className="item-tp-details">
                <div className='tp-l-left'>
                  <div className="it-tp-name">Athena</div>
                  <div className="it-tp-floorPrice">Floor Price: <span className='tp-currency'><FaEthereum /></span> <span className="tp-floorPrice-value">7.6</span></div>
                </div>
                <div className="tp-l-right">
                  <div className="tp-p-rise "><span className="tp-gaining">+324%</span></div>
                  <div className="it-tp-price"> <span className='tp-currency'><FaEthereum /></span>3</div>
                </div>
              </div>
            </div>
            <div className="tp-rk-ct-item">
              <p className="tp-no">8</p>
              <img src={girl} alt="" className='rank-p-pic' />
              <div className="item-tp-details">
                <div className='tp-l-left'>
                  <div className="it-tp-name">Fat Crab</div>
                  <div className="it-tp-floorPrice">Floor Price: <span className='tp-currency'><FaEthereum /></span> <span className="tp-floorPrice-value">7.6</span></div>
                </div>
                <div className="tp-l-right">
                  <div className="tp-p-rise "><span className="tp-gaining">+324%</span></div>
                  <div className="it-tp-price"> <span className='tp-currency'><FaEthereum /></span>3</div>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-column">
            <div className="tp-rk-ct-item">
              <p className="tp-no">9</p>
              <img src={girl} alt="" className='rank-p-pic' />
              <div className="item-tp-details">
                <div className='tp-l-left'>
                  <div className="it-tp-name">Rafael</div>
                  <div className="it-tp-floorPrice">Floor Price: <span className='tp-currency'><FaEthereum /></span> <span className="tp-floorPrice-value">7.6</span></div>
                </div>
                <div className="tp-l-right">
                  <div className="tp-p-rise "><span className="tp-gaining">+324%</span></div>
                  <div className="it-tp-price"> <span className='tp-currency'><FaEthereum /></span>3</div>
                </div>
              </div>
            </div>
            <div className="tp-rk-ct-item">
              <p className="tp-no">10</p>
              <img src={girl} alt="" className='rank-p-pic' />
              <div className="item-tp-details">
                <div className='tp-l-left'>
                  <div className="it-tp-name">Quick Silver</div>
                  <div className="it-tp-floorPrice">Floor Price: <span className='tp-currency'><FaEthereum /></span> <span className="tp-floorPrice-value">7.6</span></div>
                </div>
                <div className="tp-l-right">
                  <div className="tp-p-rise "><span className="tp-gaining">+324%</span></div>
                  <div className="it-tp-price"> <span className='tp-currency'><FaEthereum /></span>3</div>
                </div>
              </div>
            </div>
            <div className="tp-rk-ct-item">
              <p className="tp-no">11</p>
              <img src={girl} alt="" className='rank-p-pic' />
              <div className="item-tp-details">
                <div className='tp-l-left'>
                  <div className="it-tp-name">Dr Zoom</div>
                  <div className="it-tp-floorPrice">Floor Price: <span className='tp-currency'><FaEthereum /></span> <span className="tp-floorPrice-value">7.6</span></div>
                </div>
                <div className="tp-l-right">
                  <div className="tp-p-rise "><span className="tp-gaining">+324%</span></div>
                  <div className="it-tp-price"> <span className='tp-currency'><FaEthereum /></span>3</div>
                </div>
              </div>
            </div>
            <div className="tp-rk-ct-item">
              <p className="tp-no">12</p>
              <img src={girl} alt="" className='rank-p-pic' />
              <div className="item-tp-details">
                <div className='tp-l-left'>
                  <div className="it-tp-name">Hercules</div>
                  <div className="it-tp-floorPrice">Floor Price: <span className='tp-currency'><FaEthereum /></span> <span className="tp-floorPrice-value">7.6</span></div>
                </div>
                <div className="tp-l-right">
                  <div className="tp-p-rise "><span className="tp-gaining">+324%</span></div>
                  <div className="it-tp-price"> <span className='tp-currency'><FaEthereum /></span>3</div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="toprank-chart-ranking-mobile">
          <div className="tp-rk-ct-item">
            <p className="tp-no">1</p>
            <img src={girl} alt="" className='rank-p-pic' />
            <div className="item-tp-details">
              <div className='tp-l-left'>
                <div className="it-tp-name">Athena</div>
                <div className="it-tp-floorPrice">Floor Price: <span className='tp-currency'><FaEthereum /></span> <span className="tp-floorPrice-value">7.6</span></div>
              </div>
              <div className="tp-l-right">
                <div className="tp-p-rise "><span className="tp-gaining">+324%</span></div>
                <div className="it-tp-price"> <span className='tp-currency'><FaEthereum /></span>3</div>
              </div>
            </div>
          </div>
          <div className="tp-rk-ct-item">
            <p className="tp-no">2</p>
            <img src={girl} alt="" className='rank-p-pic' />
            <div className="item-tp-details">
              <div className='tp-l-left'>
                <div className="it-tp-name">Zeus</div>
                <div className="it-tp-floorPrice">Floor Price: <span className='tp-currency'><FaEthereum /></span> <span className="tp-floorPrice-value">7.6</span></div>
              </div>
              <div className="tp-l-right">
                <div className="tp-p-rise "><span className="tp-gaining">+324%</span></div>
                <div className="it-tp-price"> <span className='tp-currency'><FaEthereum /></span>3</div>
              </div>
            </div>
          </div>
          <div className="tp-rk-ct-item">
            <p className="tp-no">3</p>
            <img src={girl} alt="" className='rank-p-pic' />
            <div className="item-tp-details">
              <div className='tp-l-left'>
                <div className="it-tp-name">Etrigan</div>
                <div className="it-tp-floorPrice">Floor Price: <span className='tp-currency'><FaEthereum /></span> <span className="tp-floorPrice-value">7.6</span></div>
              </div>
              <div className="tp-l-right">
                <div className="tp-p-rise "><span className="tp-gaining">+324%</span></div>
                <div className="it-tp-price"> <span className='tp-currency'><FaEthereum /></span>3</div>
              </div>
            </div>
          </div>
          <div className="tp-rk-ct-item">
            <p className="tp-no">4</p>
            <img src={girl} alt="" className='rank-p-pic' />
            <div className="item-tp-details">
              <div className='tp-l-left'>
                <div className="it-tp-name">Neptune</div>
                <div className="it-tp-floorPrice">Floor Price: <span className='tp-currency'><FaEthereum /></span> <span className="tp-floorPrice-value">7.6</span></div>
              </div>
              <div className="tp-l-right">
                <div className="tp-p-rise "><span className="tp-gaining">+324%</span></div>
                <div className="it-tp-price"> <span className='tp-currency'><FaEthereum /></span>3</div>
              </div>
            </div>
          </div>
          <div className="tp-rk-ct-item">
            <p className="tp-no">5</p>
            <img src={girl} alt="" className='rank-p-pic' />
            <div className="item-tp-details">
              <div className='tp-l-left'>
                <div className="it-tp-name">Dart vader</div>
                <div className="it-tp-floorPrice">Floor Price: <span className='tp-currency'><FaEthereum /></span> <span className="tp-floorPrice-value">7.6</span></div>
              </div>
              <div className="tp-l-right">
                <div className="tp-p-rise "><span className="tp-gaining">+324%</span></div>
                <div className="it-tp-price"> <span className='tp-currency'><FaEthereum /></span>3</div>
              </div>
            </div>
            <div className="tp-rk-ct-item">
              <p className="tp-no">6</p>
              <img src={girl} alt="" className='rank-p-pic' />
              <div className="item-tp-details">
                <div className='tp-l-left'>
                  <div className="it-tp-name">Chin Tau</div>
                  <div className="it-tp-floorPrice">Floor Price: <span className='tp-currency'><FaEthereum /></span> <span className="tp-floorPrice-value">7.6</span></div>
                </div>
                <div className="tp-l-right">
                  <div className="tp-p-rise "><span className="tp-gaining">+324%</span></div>
                  <div className="it-tp-price"> <span className='tp-currency'><FaEthereum /></span>3</div>
                </div>
              </div>
            </div>
          </div>

          <div className="tp-rk-ct-item">
            <p className="tp-no">7</p>
            <img src={girl} alt="" className='rank-p-pic' />
            <div className="item-tp-details">
              <div className='tp-l-left'>
                <div className="it-tp-name">Athena</div>
                <div className="it-tp-floorPrice">Floor Price: <span className='tp-currency'><FaEthereum /></span> <span className="tp-floorPrice-value">7.6</span></div>
              </div>
              <div className="tp-l-right">
                <div className="tp-p-rise "><span className="tp-gaining">+324%</span></div>
                <div className="it-tp-price"> <span className='tp-currency'><FaEthereum /></span>3</div>
              </div>
            </div>
          </div>
          <div className="tp-rk-ct-item">
            <p className="tp-no">8</p>
            <img src={girl} alt="" className='rank-p-pic' />
            <div className="item-tp-details">
              <div className='tp-l-left'>
                <div className="it-tp-name">Fat Crab</div>
                <div className="it-tp-floorPrice">Floor Price: <span className='tp-currency'><FaEthereum /></span> <span className="tp-floorPrice-value">7.6</span></div>
              </div>
              <div className="tp-l-right">
                <div className="tp-p-rise "><span className="tp-gaining">+324%</span></div>
                <div className="it-tp-price"> <span className='tp-currency'><FaEthereum /></span>3</div>
              </div>
            </div>
          </div>
          <div className="tp-rk-ct-item">
            <p className="tp-no">9</p>
            <img src={girl} alt="" className='rank-p-pic' />
            <div className="item-tp-details">
              <div className='tp-l-left'>
                <div className="it-tp-name">Rafael</div>
                <div className="it-tp-floorPrice">Floor Price: <span className='tp-currency'><FaEthereum /></span> <span className="tp-floorPrice-value">7.6</span></div>
              </div>
              <div className="tp-l-right">
                <div className="tp-p-rise "><span className="tp-gaining">+324%</span></div>
                <div className="it-tp-price"> <span className='tp-currency'><FaEthereum /></span>3</div>
              </div>
            </div>
          </div>
          <div className="tp-rk-ct-item">
            <p className="tp-no">10</p>
            <img src={girl} alt="" className='rank-p-pic' />
            <div className="item-tp-details">
              <div className='tp-l-left'>
                <div className="it-tp-name">Quick Silver</div>
                <div className="it-tp-floorPrice">Floor Price: <span className='tp-currency'><FaEthereum /></span> <span className="tp-floorPrice-value">7.6</span></div>
              </div>
              <div className="tp-l-right">
                <div className="tp-p-rise "><span className="tp-gaining">+324%</span></div>
                <div className="it-tp-price"> <span className='tp-currency'><FaEthereum /></span>3</div>
              </div>
            </div>
            <div className="tp-rk-ct-item">
              <p className="tp-no">11</p>
              <img src={girl} alt="" className='rank-p-pic' />
              <div className="item-tp-details">
                <div className='tp-l-left'>
                  <div className="it-tp-name">Dr Zoom</div>
                  <div className="it-tp-floorPrice">Floor Price: <span className='tp-currency'><FaEthereum /></span> <span className="tp-floorPrice-value">7.6</span></div>
                </div>
                <div className="tp-l-right">
                  <div className="tp-p-rise "><span className="tp-gaining">+324%</span></div>
                  <div className="it-tp-price"> <span className='tp-currency'><FaEthereum /></span>3</div>
                </div>
              </div>
            </div>
            <div className="tp-rk-ct-item">
              <p className="tp-no">12</p>
              <img src={girl} alt="" className='rank-p-pic' />
              <div className="item-tp-details">
                <div className='tp-l-left'>
                  <div className="it-tp-name">Hercules</div>
                  <div className="it-tp-floorPrice">Floor Price: <span className='tp-currency'><FaEthereum /></span> <span className="tp-floorPrice-value">7.6</span></div>
                </div>
                <div className="tp-l-right">
                  <div className="tp-p-rise "><span className="tp-gaining">+324%</span></div>
                  <div className="it-tp-price"> <span className='tp-currency'><FaEthereum /></span>3</div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="show-more">Show more</div>
      </div>
    </section>
  )
}

export default Toprank