import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import Image1 from '../Photos/Image1.jpg';
import Image2 from '../Photos/Image2.jpg';
import Image3 from '../Photos/Image3.jpg';
//import Image4 from '../Photos/Image4.jpg';
//import Image5 from '../Photos/Image5.jpg';
//import Image6 from '../Photos/Image6.jpg';

import './Banner.css';
import { Link } from 'react-router-dom';

class Banner extends Component {
  render() {
    return (
      <section className="slider" id="home">
        <ul className="slides">
          <li>
            <img src={Image1} alt="Vacation" />
            <div className="caption center-align">
              <h2>Pick Your Destination</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">Choose your desired destination!!</h5>
              
            </div>
          </li>

          <li>
            <img src={Image2} alt="Budgets" />
            <div className="caption left-align">
              <h2>Book For Your Trip</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">Book most suitable packages for you!!</h5>
              
            </div>
          </li>

          <li>
          <img src={Image3} alt="Getaways" />
            <div className="caption right-align">
              <h2>Relax And Enjoy</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">Enjoy the breathetaking beauty of nature </h5>
              
            </div>
          </li>
        </ul>
        {/* <div id="home" className="carousel carousel-slider center">
          <div className="carousel-fixed-item center">
            <Link className="btn waves-effect white grey-text darken-text-2">button</Link>
          </div>
          <div className="carousel-item red white-text" to="#one!">
            <h2>First Panel</h2>
            <p className="white-text">This is your first panel</p>
          </div>
          <div className="carousel-item amber white-text" to="#two!">
            <h2>Second Panel</h2>
            <p className="white-text">This is your second panel</p>
          </div>
          <div className="carousel-item green white-text" to="#three!">
            <h2>Third Panel</h2>
            <p className="white-text">This is your third panel</p>
          </div>
          <div className="carousel-item blue white-text" to="#four!">
            <h2>Fourth Panel</h2>
            <p className="white-text">This is your fourth panel</p>
          </div>
        </div> */}
      </section>
    );
  }
}

export default Banner;