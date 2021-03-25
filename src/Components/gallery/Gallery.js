import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './Gallery.css';
import ABCTrek from '../Photos/ABCTrek.jpg';
import Background from '../Photos/Background.jpg';
import bandipurTour from '../Photos/bandipurTour.jpg';
import Bhaieav from '../Photos/Bhaieav.jpg';
import Bhaktapur from '../Photos/Bhaktapur.jpg';
import Boating from '../Photos/Boating.jpg';
import Bridge from '../Photos/Bridge.jpg';
import ChitwanSafari from '../Photos/ChitwanSafari.jpg';
import ElephantRide from '../Photos/ElephantRide.jpg';
import FewaLake from '../Photos/FewaLake.jpg';
import Ghandruk from '../Photos/Ghandruk.jpg';
import Lake from '../Photos/Lake.jpg';
import NepaliFood from '../Photos/NepaliFood.jpg';
import Paragliding from '../Photos/Paragliding.jpg';
import RaraTrek from '../Photos/RaraTrek.jpg';
import TreeHouse from '../Photos/TreeHouse.jpg';
import Trekking from '../Photos/Trekking.jpg';



const Photo = ({ img, alt }) => {
  return(
    <div className="col s12 m3 marg">
      <img className="materialboxed responsive-img" width="650" src={img} alt={alt} />
    </div>
  );
}

class PhotoGallery extends Component {

  state = {
    photo: [
      {
        id: 1,
        img: ABCTrek,
        alt: "adventure"
      },
      {
        id: 2,
        img: Background,
        alt: "adventure"
      },
      {
        id: 3,
        img: bandipurTour,
        alt: "adventure"
      },
      {
        id: 4,
        img: Bhaieav,
        alt: "adventure"
      },
      {
        id: 5,
        img: Bhaktapur,
        alt: "adventure"
      },
      {
        id: 6,
        img: Boating,
        alt: "adventure"
      },
      {
        id: 7,
        img: Bridge,
        alt: "adventure"
      },
      {
        id: 8,
        img: ChitwanSafari,
        alt: "adventure"
      },
      {
        id: 9,
        img: ElephantRide,
        alt: "adventure"
      },
      {
        id: 10,
        img: FewaLake,
        alt: "adventure"
      },
      {
        id: 11,
        img: Ghandruk,
        alt: "adventure"
      },
      {
        id: 12,
        img: Lake,
        alt: "adventure"
      }, 
      {
        id: 13,
        img: NepaliFood,
        alt: "adventure"
      }, 
      {
        id: 14,
        img: Paragliding,
        alt: "adventure"
      }, 
      {
        id: 15,
        img: RaraTrek,
        alt: "adventure"
      }, 
      {
        id: 16,
        img: TreeHouse,
        alt: "adventure"
      }, 
      {
        id: 17,
        img: Trekking,
        alt: "adventure"
      }, 
    ]
  }

  render() {
    return (
      <div className="row">
        {this.state.photo.map(gal => (
        <Photo 
        key={gal.id} 
        img={gal.img} 
        alt={gal.alt}
        />
        ))}
      </div>
    );
  }
}





class Gallery extends Component {
  render() {
    return (
      <section id="gallery" className="section section-gallery scrollspy">
        <div className="container">
          <h4 className="center">
            <span className="purple-text darken-1">Photo </span> Gallery
          </h4>
          <PhotoGallery />
        </div>
      </section>
    );
  }
}

export default Gallery;