import React from "react";
import '../styles/Footer.css';
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  return (
    <>
    <Header/>
    <div className="container ">
      <div >
     
        <p className="heading">ABOUT US</p>
    
        <p>We're a dedicated team of professionals, 
          committed to delivering innovative solutions. 
          With expertise in cutting-edge technologies, we strive to exceed expectations. Our mission is to provide tailored solutions and exceptional service, fostering long-term partnerships. What sets us apart is our customer-centric approach, transparent communication, and reliable support. Choose us for proven results, customized solutions, and a seamless experience. Get in touch today to see how we can help you achieve your goals.</p>
      </div>
      <div >
        <br></br>
        <img className="img-responsive" src="https://svmsolutions.b-cdn.net/wp-content/uploads/2020/01/converting-about-us-page.jpg" alt="about-us-page"/>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};
export default About;
