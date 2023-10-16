import { } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Rodape from './components/Rodape'
import {register} from 'swiper/element/bundle'
import "./css/Global.css"
register();
import 'swiper/css';
import 'swiper/css/scrollbar';

function App() {


  return (
    <>
      <Nav/>
      <Outlet/>
      <Rodape/>
    </>
  )
}

export default App
