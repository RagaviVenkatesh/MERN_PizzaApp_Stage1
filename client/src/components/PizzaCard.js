import React from "react";

const PizzaCard = ({ pizza }) => {
  return (
    <div className="card mb-3">
      <img src={pizza.image} className="card-img-top" alt={pizza.name} />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <p className="card-text">{pizza.description}</p>
        <p className="card-text">
          <strong>Small: ₹{pizza.prices.small}</strong>
          <br />
          <strong>Medium: ₹{pizza.prices.medium}</strong>
          <br />
          <strong>Large: ₹{pizza.prices.large}</strong>
        </p>
      </div>
    </div>
  );
};

export default PizzaCard;
