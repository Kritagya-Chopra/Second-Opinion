import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ThreeCards from "./ThreeCards";
import Slider from "./Slider";
import Step from "./Step";

const HomePage=()=>{
    return(
        <>
            <Header/>
        
            <Slider />
            <Step />
            <ThreeCards />
           
            <Footer/>
        </>
    )
}
export default HomePage;