import React from 'react'
import Nav from '../../components/navber/Nav'
import { useLocation} from "react-router-dom"
import Videop from "./Videop"


const Explore = () => {
    let location = useLocation();
    console.log(location.pathname);
    
  return (
    <>
      <Nav/>
      <Videop/>
      
    </>
  )
}

export default Explore