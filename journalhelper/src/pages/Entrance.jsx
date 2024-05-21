import React from 'react';
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

import logbook from '../assets/LogbookAssistMain.png'

export default function Entrance() {
  return (
    <>
     <Link to='./MainPage'><img src={logbook} /></Link>
      <h2>CLICK IMAGE TO GET STARTED</h2>
      <Footer />
 
    </>
  )
}