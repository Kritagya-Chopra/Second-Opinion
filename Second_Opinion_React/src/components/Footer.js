import React from 'react';
import "./Footer.css";

 function Footer(){
  return (
    <div className='footer' style={{left: 0,bottom: 0,width:'100%'}}>    
    
      <footer className="container">
        <div className="row ">
          <div className="col-6 col-md-2 mb-3">
            <h5 className='footer-header'></h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0  footer-header">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-header">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0  footer-header">How it works</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0  footer-header">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0  footer-header">About</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5 className='footer-header'></h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-header">About Us</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-header">News</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-header">Blogs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-header">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-header">Contact</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5 className='footer-header'></h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-header">Become Partners</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-header">Join Us </a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-header">Videos</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-header">Locations</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer-header">Contact Us</a></li>
              
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
            <br/>
            <br/>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" style={{marginRight:"2%"}} />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>&copy; 2024 Company, Inc. All rights reserved.</p>

         

          <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-dark" href="#"><img src='/social-media-logos/facebook-icon.png'></img></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><img src='/social-media-logos/instagram-icon.png'></img></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><img src='/social-media-logos/linkedin-icon.png'></img></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><img src='/social-media-logos/facebook-messenger-icon.png'></img></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><img src='/social-media-logos/youtube-icon.png'></img></a></li>
            
          </ul>
        </div>
        
      </footer>
    </div>
   

  );
}

export default Footer;
