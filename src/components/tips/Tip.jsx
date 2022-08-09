import React from 'react'
import userman from '../../Images/userman.jpg'
import './tip.css'

const Tip = () => {
  return (
    <section id="tip">
        <div className="tip-title">How to get Started</div>
        <div className="tip-container">
            <div className="tip-box">
                <div className="tip-icon"><img src={userman} alt="Tip" /></div>
                <div className="tip-box-title">Set up your wallet</div>
                <div className="tip-info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quisquam ad alias consequuntur. Dolore ipsa ut aliquam? Vel quaerat deleniti dolor porro? </div>
            </div>
            <div className="tip-box">
                <div className="tip-icon"><img src={userman} alt="Tip" /></div>
                <div className="tip-box-title">Add your NFTs to a collection</div>
                <div className="tip-info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quisquam ad alias consequuntur. Dolore ipsa ut aliquam? Vel quaerat deleniti dolor porro? </div>
            </div>
            <div className="tip-box">
                <div className="tip-icon"><img src={userman} alt="Tip" /></div>
                <div className="tip-box-title">List them for sale</div>
                <div className="tip-info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quisquam ad alias consequuntur. Dolore ipsa ut aliquam? Vel quaerat deleniti dolor porro?</div>
            </div>
        </div>
    </section>
  )
}

export default Tip