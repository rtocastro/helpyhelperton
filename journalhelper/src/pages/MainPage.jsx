import React from 'react';

import { Link } from 'react-router-dom'

import NavTabs from '../components/NavTabs';
import Footer from '../components/Footer'


export default function MainPage() {
  return (
    <>

      <NavTabs />
      <h2>Please select one of the links</h2>
      <Footer />

    </>
  )
}