import React from "react";
import "../../carData.js";
import { Link } from "react-router-dom";
import "./carCard.css";

const CarCard = ({ item }) => {
  return (
    <div className="carCardWrapper">
      <img src={item.imgUrl} alt="" className="carImage" />
      <div className="car-details">
        <h4 className="carTitle">{item.carName}</h4>
        <div className="detailsContainer">
          <h6 className="carPrice">
            ₹{item.price}00 <span>/ Hour</span>
          </h6>

          <button className="detailsButton">
            <Link to={`/carDetails/${item.carName}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
