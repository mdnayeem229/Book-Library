import React from 'react'
import './About.css';
import Img1 from '../Images/young-businesswoman-searching-books-at-the-modern-library-interior-with-white-bookshelves-on-the-background-PT0EHD.jpg';

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
function About() {
  return (
        <div className='about'>
<Navbar/>
<div className="navbar-img"></div>
<div className="container" style={{paddingTop:100, paddingBottom:50}}>
    <h1 style={{textAlign:'center', fontWeight:'bold', fontSize: '2rem'}}>ABOUT US</h1>
    <div className="row justify-content-center" style={{paddingTop:'1rem'}}>
        <div className="col-lg-6 col-md-12 mt-4">
            <div className="about-img">
            <img src={Img1} className='img-fluid' alt="" />
            </div>
        </div>
        <div className="col-lg-6">
            <div className="about-text">
            <h2>About BookHub</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores autem pariatur quae facilis voluptate laudantium. Molestias itaque animi blanditiis. Officia libero numquam temporibus neque eveniet sed, doloremque praesentium ex eaque alias, totam cum corrupti laborum. Itaque, ut labore reiciendis, dignissimos accusantium consectetur dolore assumenda laborum necessitatibus et tempora possimus accusamus ducimus similique? Non exercitationem officia ducimus doloribus perspiciatis quae dolor accusantium, ex quo harum laborum necessitatibus. Cumque consequuntur ipsam rem, illo neque voluptatem debitis incidunt deleniti animi odit modi rerum laborum sunt obcaecati quo soluta nihil dicta autem beatae in. Modi, velit repellendus earum ipsum libero maiores perspiciatis vero dignissimos?</p>
      </div>
        </div>
    </div>
</div>

<Footer/>
    </div>
    
  )
}

export default About