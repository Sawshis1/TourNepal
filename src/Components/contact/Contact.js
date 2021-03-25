import React, { useState } from 'react';
import Axios from 'axios';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const review = () => {
      Axios.post('/review', {
        Name: name, 
        Email: email, 
        Phone: phone, 
        Message: message, 
       }).then((response) => {
        console.log(response);
    })
    }

    return (
      <section id="contact" className="section section-contact scrollspy">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className="card-panel purple white-text center">
                <i className="material-icons medium" >email</i>
                <h5>TourNepal Address</h5>
                <p>Please feel free to ask us any queries. We are happy to help you.</p>
              </div>
              <ul className="collection with-header">
                <li className="collection-header">
                  <h4>Main Office</h4>
                </li>
                <li className="collection-item">TourNepal Booking</li>
                <li className="collection-item"><i class="fas fa-map-marker-alt"></i> Kathmandu, Nepal</li>
                <li className="collection-item"><i class="fas fa-phone"></i> 9861904957</li>
                <li className="collection-item"><i class="fas fa-envelope-square"></i> booking@tournepal.com</li>
              </ul>
            </div>
            <div className="col s12 m6">
              <div className="card-panel grey lighten-3">
                <h5>Please fill out this form</h5>
                <form>
                  <div className="input-field">
                    <input type="text" id="name" className="validate" 
                      />
                    <label for="name" className="purple-text" onChange={(e) => {
                      setName(e.target.value)
                      }} >Name</label>
                  </div>


                  <div className="input-field">
                    <input type="email" id="email" 
                      />
                    <label for="email" className="purple-text" onChange={(e) => {
                      setEmail(e.target.value)
                      }} >Email</label>
                  </div>


                  <div className="input-field">
                    <input type="text" id="phone" 
                      />
                    <label for="phone" className="purple-text" onChange={(e) => {
                      setPhone(e.target.value)
                      }} >Phone</label>
                  </div>


                  <div className="input-field">
                    <textarea className="materialize-textarea" id="message" data-length="500" ></textarea>
                    <label for="message" className="purple-text" onChange={(e) => {
                      setMessage(e.target.value)}}>Message</label>
                  </div>
                  <input type="submit" value="Submit" className="btn purple" onClick={review}/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }


export default Contact;