import React from "react";
import { useParams } from "react-router-dom";
import carData from "../../carData";
import "./CarDetails.css";
const CarDetails = () => {
  const { slug } = useParams();
  const singleCarItem = carData.find((item) => item.carName === slug);

  return (
    <div className="carDetailWrapper">
      <div className="carImgContainer">
        <img src={singleCarItem.imgUrl} alt="" className="carImage" />
      </div>

      <div className="carDetails">
        <h1>{singleCarItem.carName}</h1>

        <div>
          <h6>${singleCarItem.price}00 / Hour</h6>

          <span>({singleCarItem.rating} ratings)</span>
        </div>

        <p>{singleCarItem.description}</p>

        <div style={{ columnGap: "4rem" }}>
          <span>{singleCarItem.model}</span>

          <span>{singleCarItem.automatic}</span>

          <span>{singleCarItem.speed}</span>
        </div>

        <div style={{ columnGap: "2.8rem" }}>
          <span>{singleCarItem.gps}</span>

          <span>{singleCarItem.seatType}</span>

          <span>{singleCarItem.brand}</span>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
