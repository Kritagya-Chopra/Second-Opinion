import React from "react";
import '../styles/Step.css';

const Step = () => {
  const data = [
    {
      image: "https://www.diagnose.me/media/front/how-steps/step1_en.png",
      heading: "Select a specialist",
      para1:
        "Use the search function for a list of the most suitable doctors for your medical issues.",
      para2:
        "Alternatively, call or chat online with a Diagnose.me team member who can assist in your choice.",
    },
    {
      image: "https://www.diagnose.me/media/front/how-steps/step2_en.png",
      heading: "Describe your situation",
      para1: "Describe your ailment and ask your specialist questions.",
      para2:
        "Upload or mail all of your medical data like MRIs, CT scans, doctor reports, and blood tests.",
    },
    {
      image: "https://www.diagnose.me/media/front/how-steps/step3_en.png",
      heading: "Receive a comprehensive report",
      para1:
        "Response times are typically 3-5 days. You may ask followup questions.",
      para2:
        "An optional follow-up video call with the specialist you selected may be available.",
    },
  ];

  return (
    <div className="step-container">
      {data.map((card, index) => (
        <div key={index} className="step-card">
          <img src={card.image} alt="step_pic" className="step-image" />
          <h3 className="step-heading">{card.heading}</h3>
          <p className="step-para">{card.para1}</p>
          <p className="step-para">{card.para2}</p>
        </div>
      ))}
    </div>
  );
};

export default Step;
