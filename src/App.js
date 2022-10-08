import React from 'react'
import Topheader from './Topheader';
import Navigation from './Navigation';
import Slider from './Slider';
import Product from './Product';
import Offer from './Offer';
import Footer from './Footer';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

const App = () => {
  return (
    <>
        <Topheader/>
        <Navigation/>1
        <Slider/>
        <Product/>
        <Offer/>
        <Footer/>
    </>
  )
}

export default App