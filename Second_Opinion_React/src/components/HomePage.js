import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ThreeCards from "./ThreeCards";
import Slider from "./Slider";
import Step from "./Step";
import ShowTestimony from "./ShowTestimony";

const HomePage=()=>{
    return(
        <>
            <Header/>
        
            <Slider />
            <Step />
            <ThreeCards />
            <ShowTestimony/>
            <Footer/>
        </>
    )
}
export default HomePage;