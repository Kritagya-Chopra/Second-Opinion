import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ThreeCards from "./ThreeCards";
import Slider from "./Slider";
import Step from "./Step";
import ShowTestimony from "./ShowTestimony";
import Navbar from "./Navbar";

const HomePage=()=>{
    const id=sessionStorage.getItem('id');
    return(
        <>
            <Header/>
            {id !== null && <Navbar />}
            <Slider />
            <Step />
            <ThreeCards />
            <ShowTestimony/>
            <Footer/>
        </>
    )
}
export default HomePage;