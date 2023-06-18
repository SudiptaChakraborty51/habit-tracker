import React, { useContext, useState } from "react";
import "./habitCard.css";
import { HabitContext } from "../contexts/habitContext";
import { useNavigate } from "react-router-dom";
import HabitForm from "./habitForm";

const HabitCard = ({ habitData}) => {

  const {editHabit, deleteHabit, toggleArchiveHabit, setIsEdit, isEdit} = useContext(HabitContext);

  const navigate = useNavigate();

  return (
    <li className="habit-card">
      <h3 onClick={() => navigate(`/habit/${habitData.id}`)}>{habitData.name}</h3>
      <i class="fa-solid fa-pen-to-square" onClick={() => {
        setIsEdit(true);
      }}></i>
      {
        isEdit && <HabitForm />
      }
      <i class="fa-solid fa-trash" onClick={() => deleteHabit(habitData.id)}></i>
      <i class="fa-solid fa-box-archive" onClick={() => toggleArchiveHabit(habitData.id)}></i>
    </li>
  );
};

export default HabitCard;
