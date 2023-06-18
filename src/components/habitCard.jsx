import React from "react";
import "./habitCard.css";

const HabitCard = ({ habitData }) => {
  return (
    <li>
      <h3>{habitData.name}</h3>
    </li>
  );
};

export default HabitCard;
