import React from 'react';

import { Link } from 'react-router-dom'

import NavTabs from '../components/NavTabs';
import Footer from '../components/Footer'
import CalFresh from './CalFresh';

export default function MainPage() {
  return (
    <>

      <NavTabs />
      <h2>Please select a program</h2>
      <Footer />

    </>
  )
}