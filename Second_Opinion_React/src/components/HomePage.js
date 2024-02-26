import React from "react";
import Navbar from "./Navbar";
import AddCase from "./AddCase";
import Header from "./Header";
import Footer from "./Footer";
import ThreeCards from "./ThreeCards";
import Slider from "./Slider";
import Step from "./Step";
import Header1 from "./Header1";

const HomePage=()=>{
    return(
        <>
            <Header1/>
        
            <Slider />
            <Step />
            <ThreeCards />
           
            <Footer/>
        </>
    )
}
export default HomePage;