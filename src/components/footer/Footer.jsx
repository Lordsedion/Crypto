import React from 'react'
import './footer.css'
import logo from '../../Images/bitcoin.png'

const Footer = () => {
    return (
        <section id="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <img src={logo} alt="Logo" />
                    <div className="footer-logo">LordSeidon</div>
                    <div className="footer-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis qui quibusdam magni asperiores quaerat nam soluta, magnam iste blanditiis provident!</div>
                </div>
                <div className="footer-right">
                    <div className="right-sec">
                        <div className="right-sec-title">Marketplace</div>
                        <div className="right-sec-content">Solana NFTs</div>
                        <div className="right-sec-content">Solana NFTs</div>
                        <div className="right-sec-content">Solana NFTs</div>
                        <div className="right-sec-content">Solana NFTs</div>
                        <div className="right-sec-content">Solana NFTs</div>
                    </div>
                    <div className="right-sec">
                        <div className="right-sec-title">Marketplace</div>
                        <div className="right-sec-content">Solana NFTs</div>
                        <div className="right-sec-content">Solana NFTs</div>
                        <div className="right-sec-content">Solana NFTs</div>
                        <div className="right-sec-content">Solana NFTs</div>
                        <div className="right-sec-content">Solana NFTs</div>
                    </div>
                    <div className="right-sec">
                        <div className="right-sec-title">Marketplace</div>
                        <div className="right-sec-content">Solana NFTs</div>
                        <div className="right-sec-content">Solana NFTs</div>
                        <div className="right-sec-content">Solana NFTs</div>
                        <div className="right-sec-content">Solana NFTs</div>
                        <div className="right-sec-content">Solana NFTs</div>
                    </div>
                </div>
            </div>

            <div className="footer-last">
                <div className="copyright-f">@2017 - 2022 LordSeidon Groups, Inc</div>
                <div className="footer-others">
                    <div className="privacy-pol">Privacy Policies</div>
                    <div className="tems-n-con">Terms and Conditions</div>
                </div>
            </div>
        </section>
    )
}

export default Footer