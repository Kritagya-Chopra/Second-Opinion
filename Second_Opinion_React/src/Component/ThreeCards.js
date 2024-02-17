import React from "react";
import { TiStarburst } from "react-icons/ti";
import { MdPersonAddAlt1 } from "react-icons/md";
import { MdPrivacyTip } from "react-icons/md";
import "./ThreeCards.css";

const ThreeCards = () => {
  const data = [
    {
      logo: <TiStarburst />,
      para: "Exceptional Quality",
      hoverText:
        "All our doctors are carefully selected and vetted. They are specialized and experienced in specific issues on the exceptional quality.",
    },
    {
      logo: <MdPersonAddAlt1 />,
      para: "Client focused",
      hoverText:
        "We empower patients. Our reports are written for the patient and family. You can always ask questions and even video chat with the specialist of your choice.",
    },
    {
      logo: <MdPrivacyTip />,
      para: "Privacy & Security",
      hoverText:
        "We don’t share your data with anyone. Ever. We don’t even need your name. Once your case is finished and you are completely satisfied, we delete your data from our system.",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="heading1">
          <h2>Why Diagnose.me</h2>
          <p>
            "When we manage to help just one person, one family in distress, we
            consider our job well done."
          </p>
        </div>
        <div className="card">
          {data.map((card, index) => (
            <div
              key={index}
              className="card-item"
              data-hover-text={card.hoverText}
            >
              {card.logo}
              <p>{card.para}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ThreeCards;
