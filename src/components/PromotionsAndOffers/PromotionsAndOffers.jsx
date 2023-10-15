import React from "react";
import "./PromotionsAndOffers.css"; // Import CSS for styling

const promotions = [
  {
    id: 1,
    title: "50% off on Summer Collection",
    description: "Get ready for the summer with our trendy collection!",
  },
  {
    id: 2,
    title: "Limited Time Offer: Free Shipping",
    description: "Enjoy free shipping on all orders. Hurry, offer ends soon!",
  },
  {
    id: 3,
    title: "Buy One, Get One 50% off",
    description: "Buy one pair of shoes and get the second one at half price.",
  },
];

const PromotionsAndOffers = () => {
  return (
    <div className="promotions-and-offers">
      <h2 className="animated bounce">Promotions and Offers</h2>
      <div className="promotion-details">
        {promotions.map((promotion) => (
          <div key={promotion.id} className="promotion-slide">
            <h3>{promotion.title}</h3>
            <div>{promotion.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionsAndOffers;
