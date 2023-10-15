import React, { useEffect, useState } from "react";
import shoeimg from "../../assets/shoe_main.jpg";
import "./Heading.css";

function Heading() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop === 0) {
        yourFunction();
      } else if (scrollTop > 950) {
        setShouldAnimate(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  const yourFunction = () => {
    setShouldAnimate(true);

    console.log("object");
  };

  if (window.innerHeight === 0) {
    yourFunction();
  }
  return (
    <div className={`heading-main`}>
      <h1>Discover the World of Shoes</h1>
      <img
        className={`animate-img ${shouldAnimate ? "animate" : ""}`}
        src={shoeimg}
        alt=""
      />
      <p>
        Explore a world of shoes at Shoe Enthusiast, your ultimate destination
        for all things footwear. We're passionate about shoes and committed to
        bringing you the latest trends, styles, and information about the
        fascinating world of footwear.
      </p>
    </div>
  );
}

export default Heading;
