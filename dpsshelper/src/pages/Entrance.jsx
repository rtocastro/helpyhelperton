import React from 'react';
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

import jhlogo from '../assets/jhlogo.png'

export default function Entrance() {
  return (
    <>
     <Link to='./MainPage'><img src={jhlogo} /></Link>
      <h2>CLICK IMAGE TO GET STARTED</h2>
      <Footer />
 
    </>
  )
}