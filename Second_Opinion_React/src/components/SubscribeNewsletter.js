import React from 'react';
import Header1 from './Header1';
import Footer from './Footer';

const SubcribeNewsletter = () => {
  return (
    <>
    <Header1></Header1>
     <div className="container">
      <h1>Thank You for Subscribing!</h1>
      <p>We appreciate your interest in our newsletter. You will now receive updates and news from us.</p>
      {/* You can add additional content or links here */}
    </div>
    <Footer></Footer>
    </>
   
  );
};

export default SubcribeNewsletter;
