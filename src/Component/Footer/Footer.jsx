import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='main-footer'>
    
   <div className="container">
<div className="row justify-content-center">
    <div className="col-lg-3 col-md-4 col-md-6 col-sm-12">
<div className="footer">
    <span>Company</span>
    <ul className='listmenu'>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Our Service</a></li>
        <li><a href="#">Privacy policy</a></li>
        <li><a href="#">Affiliate program</a></li>
    </ul>
</div>
</div>
<div className="col-lg-3 col-md-4 col-md-6 col-sm-12">
<div className="footer">
    <span>Get Help</span>
    <ul className='listmenu'>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Shopping</a></li>
        <li><a href="#">Returns</a></li>
        <li><a href="#">Order Status</a></li>
        <li><a href="#">Payment Options</a></li>
    </ul>
</div>
</div>
<div className="col-lg-3 col-md-4 col-md-6 col-sm-12">
<div className="footer">
    <span>Online Shop</span>
    <ul className='listmenu'>
        <li><a href="#">Program</a></li>
        <li><a href="#">Books</a></li>
        <li><a href="#">Feture</a></li>
           </ul>
</div>
</div>
<div className="col-lg-3 col-md-4 col-md-6 col-sm-12">
<div className="footer">
    <span>Follow Shop</span>
    <ul className='listmenu'>
<div className="footer-icon">
<Link to="https://www.facebook.com/profile.php?id=100049547718836"><i class="fa-brands fa-facebook"></i></Link>
<Link to="https://twitter.com/skill_well"><i class="fa-brands fa-twitter"></i></Link>
<Link to="https://www.linkedin.com/comm/jobs/search?geoId=103644278&f_TPR=a1704520716-&savedSearchId=1731727498&origin=JOB_ALERT_EMAIL&lipi=urn%3Ali%3Apage%3Aemail_email_job_alert_digest_01%3BU2lAgKhJRVSBY%2BIN%2BzP5VQ%3D%3D&midToken=AQFzUN8s8D_fgw&midSig=3S_NAdEFQ7wr41&trk=eml-email_job_alert_digest_01-job~alert-0-see~all~jobs&trkEmail=eml-email_job_alert_digest_01-job~alert-0-see~all~jobs-null-hq3qs2~lr3338u5~to-null-null&eid=hq3qs2-lr3338u5-to&otpToken=MTMwNTE5ZTExNTI4YzBjMmJjMmMwZmViNDExZWUzYjI4ZmM5ZDE0NzliYWQ4YzYzN2JjZjA1NmM0ZTU5NWRmNGZmZGRkZGU5NDNkNWNkYzE3Y2I5ZjI5NzFkODdhYjBlYTZjOGE0ZDA1NmExMWNkODg4ZjUzODk5LDEsMQ%3D%3D"><i class="fa-brands fa-linkedin"></i></Link>
<Link to="https://www.instagram.com/mdnayeem1815/"><i class="fa-brands fa-instagram"></i></Link>
</div>

        </ul>
</div>
</div>

   </div>
</div>
    </div>
  )
}

export default Footer







