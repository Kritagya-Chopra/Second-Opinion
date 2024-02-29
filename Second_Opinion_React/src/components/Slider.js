import React, { useState } from "react";
import '../styles/Slider.css';
import { GrPrevious, GrNext } from "react-icons/gr";

const data = [
  {
    heading3: "SECOND OPINION",
    heading2: "Access to international medical expertise",
    para: "Consult your medical condition with world-class specialists without any language barriers.",
    para2: "DR STRANGE, MD, PhD",
    para3: "Chief Medical Officer",
    image: "drStrange.png",
  },
  {
    heading3: "OUR MISSION",
    heading2: "Leading experts within your reach",
    para: "Get advice from top medical specialists who may not be available in your local hospital or even in your country.",
    para2: "Katja Pinker-Domenig, MD, Prof",
    para3: "Katja Pinker-Domenig, MD, Prof",
    image: "/katja_mobile.png",
  },
  {
    heading3: "OUR CLIENTS",
    heading2: "Personal approach for every case",
    para: "Receive a personalized guidance and support from a medically trained team to help you navigate this process every step of the way.",
    para2: "Silvia Tršo",
    para3: "Medical customer support",
    image: "/silvia_mobile.png",
  },
];

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handlePrevious = () => {
    setSliderIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSliderIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <button className="slider-button" onClick={handlePrevious}>
        <GrPrevious />
      </button>
      <div className="slider-content">
        <div className="left-slider">
          <h3 className="heading3">{data[sliderIndex].heading3}</h3>
          <h2 className="heading2">{data[sliderIndex].heading2}</h2>
          <p className="para1">{data[sliderIndex].para}</p>
          <p className="para2">{data[sliderIndex].para2}</p>
          <p className="para3">{data[sliderIndex].para3}</p>
        </div>
        <div className="right">
          <img src={data[sliderIndex].image} alt="slide" />
        </div>
      </div>
      <button className="slider-button" onClick={handleNext}>
        <GrNext />
      </button>
    </div>
  );
};

export default Slider;
