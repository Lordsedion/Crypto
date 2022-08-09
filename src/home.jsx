import React from 'react'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Maintrend from './components/mainTrend/Maintrend'
import Toprank from './components/toprank/Toprank'
import Tip from './components/tips/Tip'
import Footer from './components/footer/Footer'
const Home = () => {
  return (
    <>
    <Header/>
    <Maintrend/>
    <Toprank/>
    <Tip/>
    <Footer/>
    </>
  )
}

export default Home