import React, { useState } from "react";
import '../styles/contact.css';
import Header from "./Header";
import Footer from "./Footer";
const Contact = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    
   
    <>
     <Header />
      <p className="heading">Contact Us</p>
      <div className="Container">
        <div className="left">
          <p>Get in touch</p>
          <p>secondOpinion@gmail.com</p>
          <p>+91 7080920302</p>
          <p>
            Welcome to our Contact Me page! Whether you have a question,
            feedback, or just want to say hello, we'd love to hear from you.
            Feel free to reach out using the form below, and we'll get back to
            you as soon as possible. Your input is valuable to us as we strive
            to improve our services and provide the best experience for our
            users. Thank you for visiting, and we look forward to connecting
            with you!
          </p>
        </div>
        <div className="right">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea
            value={text}
            onChange={handleChange}
            rows={4}
            cols={50}
            placeholder="Enter your text here..."
          />
           <button>Contact Me</button>
        </div>
        
      </div>
      <Footer></Footer>
    </>
  );
};
export default Contact;
