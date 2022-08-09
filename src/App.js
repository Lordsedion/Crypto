import './App.css';
import Nav from "./components/Nav/Nav"
import Header from "./components/Header/Header"
import Maintrend from './components/mainTrend/Maintrend';
import Toprank from './components/toprank/Toprank';
import Tip from './components/tips/Tip';
import  {Outlet} from 'react-router-dom'
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Nav/>
    <Outlet/>
    </>
  );
}

export default App;
