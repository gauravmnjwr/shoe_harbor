import React, { useEffect, useState } from "react";
import "./Testimonials.css"; // Import CSS for styling
import pp1 from "../../assets/pp1.png";
import star from "../../assets/star.png";

const testimonialsData = [
  {
    id: 1,
    name: "Sarah Walker",
    text: "I absolutely love the shoes I got from this company! The comfort and style they provide are unparalleled. Highly recommended!",
    imgUrl: pp1,
    rating: "5",
  },
  {
    id: 2,
    name: "Michael Johnson",
    text: "The shoes from this company exceeded my expectations. The quality and design are top-notch, and they fit perfectly. Will definitely purchase again!",
    imgUrl: pp1,
    rating: "4",
  },
  {
    id: 3,
    name: "Emily Davis",
    text: "I've never had a more comfortable pair of shoes. The attention to detail in the design is remarkable. I'm a customer for life!",
    imgUrl: pp1,
    rating: "5",
  },
];

const Testimonials = () => {
  const [currUser, setCurrentUser] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentUser((prevUser) => (prevUser + 1) % 3);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currUser]);

  const renderStars = (rating) => {
    const starCount = parseInt(rating, 10);
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      stars.push(<img key={i} src={star} alt="star" />);
    }

    return stars;
  };

  return (
    <div className="testimonials-container">
      <h2>User Ratings</h2>
      <div className="testimonials-main">
        <div className="user-details">
          <img src={testimonialsData[currUser].imgUrl} alt="" />
          <div>{testimonialsData[currUser].name}</div>
          <div className="star-img">
            {renderStars(testimonialsData[currUser].rating)}
          </div>
        </div>
        {windowWidth > 700 && (
          <div className="user-rating">
            <div>{testimonialsData[currUser].text}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
