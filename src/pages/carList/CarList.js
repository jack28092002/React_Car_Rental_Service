import React from "react";
import carData from "../../carData";
import CarCard from "../../components/carCard/CarCard";
import "./CarList.css";

const CarList = () => {
  return (
    <div className="carListWrapper">
      {carData.map((item) => (
        <CarCard className="item" item={item} key={item.id} />
      ))}
    </div>
  );
};

export default CarList;
