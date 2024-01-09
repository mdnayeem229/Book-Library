import React from 'react';
import './Contact.css';
import Img1 from '../Images/istockphoto-949118068-170667a.jpg';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
function Contact() {
  return (
    <div className='contact'>
      <Navbar />
      <div className="contact-header"></div>
  <div className='about'>
<div className="container" style={{paddingTop:100, paddingBottom:50}}>
    <h1 style={{textAlign:'center', fontWeight:'bold', fontSize: '2rem'}}>CONTACT US</h1>
    <div className="row justify-content-center" style={{paddingTop:'1rem'}}>
        <div className="col-lg-6 col-md-12 mt-4">
            <div className="contact-img">
            <img src={Img1} className='img-fluid' alt="" />
            </div>
        </div>
        <div className="col-lg-6">
            <div className="contact-form">
            <h2 style={{paddingTop:'1rem', textAlign: 'center', fontSize: '1.5rem', color: '#000', fontWeight: 'bold'}}>Contact</h2>
          <form action="">
<label htmlFor="">Enter your Name :</label><br />
<input type="text" placeholder='Name'/><br />
<label htmlFor="">Enter your Email :</label><br />
<input type="email" placeholder='Email'/><br />
<label htmlFor="">Enter your Phone :</label><br />
<input type="Phone" placeholder='Phone'/><br />
<label htmlFor="">Enter your Password :</label><br />
<input type="password" placeholder='password'/><br />
<input type="submit" className='btn btn-primary' style={{marginTop: '1rem'}} placeholder='Submit' />
          </form>
      </div>
        </div>
    </div>
</div>
    </div>
<Footer />
    </div>
  )
}

export default Contact