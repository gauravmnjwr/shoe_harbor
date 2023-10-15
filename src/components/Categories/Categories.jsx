import React from "react";
import ReactCaroussel from "react-caroussel";
import "react-caroussel/dist/index.css";
import "./Categories.css";
import boot from "../../assets/boot.jpg";
import sandals from "../../assets/sandals.jpg";
import heels from "../../assets/heels.jpg";
import sports from "../../assets/sports.jpg";
import sneakers from "../../assets/sneakers.jpg";

const categories = [
  {
    id: 1,
    name: "Sneakers",
    imgUrl: sneakers,
    description: "Comfortable and stylish sneakers for everyday wear.",
  },
  {
    id: 2,
    name: "Boots",
    imgUrl: boot,
    description: "Trendy and durable boots for any occasion.",
  },
  {
    id: 3,
    name: "Sandals",
    imgUrl: sandals,
    description: "Cool and breathable sandals for warm weather.",
  },
  {
    id: 4,
    name: "Sports",
    imgUrl: sports,
    description: "Athletic shoes designed for performance and comfort.",
  },
  {
    id: 5,
    name: "Heels",
    imgUrl: heels,
    description: "Elegant and stylish heels for a sophisticated look.",
  },
];

const Card = ({ category }) => (
  <div className="card">
    <div className="card-image-container">
      <img src={category.imgUrl} alt={category.name} className="card-image" />
    </div>
    <h1>{category.name}</h1>
    <p>{category.description}</p>
    <button>Read more</button>
  </div>
);

function Categories() {
  return (
    <div className="category-container">
      <ReactCaroussel
        infinite={true}
        autoplay={true}
        speed={2} // 2s
        display={{
          dots: true,
          arrows: false,
        }}
      >
        {categories.map((category, index) => (
          <Card key={index} category={category} />
        ))}
      </ReactCaroussel>
    </div>
  );
}

export default Categories;
