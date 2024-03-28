import React from 'react';
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <>
    <Link to='javascript:void(0)'
    onClick={() => window.location = 'mailto:ricardotorres2@dpss.lacounty.gov'}>
        
     <h5>Developed by Ricardo Torres</h5>
    </Link>
 
    </>
  )
}