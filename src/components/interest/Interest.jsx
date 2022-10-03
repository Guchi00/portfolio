import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa";
import "./style.css";
import { InterestData } from "../interestData/InterestData";

function Interest({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;


  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  };
  console.log(current);

  if(!Array.isArray(slides) || slides.lenght <= 0) {
    return null;
  }


  return (
    <>
    <section className="slider">
      <FaArrowAltCircleLeft className="leftArrow" />
      <FaArrowAltCircleRight className="rightArrow" onClick={nextSlide}/>
    {InterestData.map((slide, index) => {
        return (<img src={slide.image} className="images" alt="interestImgs"/>);
    })}
    </section>
    </>
  );
};
export default Interest;