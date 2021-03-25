import React, { Fragment } from 'react';
//import Container from './Components/Login/container';
import { BrowserRouter as Router} from 'react-router-dom'
import Navbar from './Components/navbar/Navbar';
import Banner from './Components/banner/Banner';
import Search from './Components/search/Search';
import Adventure from './Components/adventure/Adventure';
import Booking from './Components/booking/Booking';
import Gallery from './Components/gallery/Gallery';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import { Container } from '@material-ui/core';

function App() {

  return (
    //<Container/>
    <Router>
      <Fragment>
        <Navbar />
        <Banner />
        <Search />
        <Adventure />
        <Booking />
        <Gallery />
        <Contact />
        <Footer />
      </Fragment>
   </Router>
  );
}

export default App;
