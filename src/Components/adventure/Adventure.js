import React, { Component } from 'react';

import ABCTrek from '../Photos/ABCTrek.jpg';
import bandipurTour from '../Photos/bandipurTour.jpg';
import ChitwanSafari from '../Photos/ChitwanSafari.jpg';
import Patan from '../Photos/Patan.jpg';
import RaraTrek from '../Photos/RaraTrek.jpg';
import Kathmandu from '../Photos/Kathmandu.jpg';
import PokharaTour from '../Photos/PokharaTour.jpg';
import poonhill from '../Photos/poonhill.jpg';
import Ghandruk from '../Photos/Ghandruk.jpg';

import { HashLink as Link } from 'react-router-hash-link';

class Popular extends Component {
  render() {
    return (
      <section id="adventure" className="section section-popular scrollspy">
        <div className="container">
          <div className="row">
            <h4 className="center">
              <span className="purple-text darken-1">TourNepal</span> Adventures</h4>
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={ABCTrek} alt="Annapurna Base Camp" />
                  <span className="card-title">Annapurna Base Camp</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light purple" href="#"><i class="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                  <p>Thrilling trek to Annapurna Base Camp
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Annaourna Base Camp<i class="material-icons right">close</i></span>
                  <p>Exciting Trek to Annapurna </p>
                </div>
              </div>
            </div>


            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={bandipurTour} alt="" />
                  <span className="card-title">Bandipur Tour</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light purple"><i class="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                  <p>Explore Beautiful Bandipur
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Bandipur<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this trip</p>
                </div>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={Patan} alt="" />
                  <span className="card-title">Beautiful Patan</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light purple"><i class="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                  <p>Explore Cultural Patan
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Patan<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this trip</p>
                </div>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={RaraTrek} alt="" />
                  <span className="card-title">Rara Trek</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light purple"><i class="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                  <p>Trip to majestic Rara Lake
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Rara lake<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this trip</p>
                </div>
              </div>
            </div>

            

            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={PokharaTour} alt="" />
                  <span className="card-title">Pokhara Tour</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light purple"><i class="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                  <p>Explore Beautiful Pokhara
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Pokhara<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this trip</p>
                </div>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={ChitwanSafari} alt="" />
                  <span className="card-title">Chitwan Safari</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light purple"><i class="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                  <p>Explore Wild Chitwan
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Chitwan<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this trip</p>
                </div>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={Kathmandu} alt="" />
                  <span className="card-title">Kathmandu Sightseeing</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light purple"><i class="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                  <p>Explore Cultural Beauty of Kathmandu
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Kathmandu<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this trip</p>
                </div>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={Ghandruk} alt="" />
                  <span className="card-title">Beautiful homestay at Ghandruk</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light purple"><i class="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                  <p>Explore Natural Beauty of Ghandruk
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Ghandruk<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this trip</p>
                </div>
              </div>
            </div>





            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={poonhill} alt="" />
                  <span className="card-title">Ghorepani Poonhill Trek</span>
                  <Link class="btn-floating activator halfway-fab waves-effect waves-light purple"><i class="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                  <p>Exciting Trek to beautiful Poonhill
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Ghorepani<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this trip</p>
                </div>
              </div>
            </div>

            
          </div>
          
        </div>
      </section>
    );
  }
}

export default Popular;