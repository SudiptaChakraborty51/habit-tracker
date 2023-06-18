import React, { useContext, useState } from "react";
import { HabitContext } from "../contexts/habitContext";
import HabitCard from "../components/habitCard";
import HabitForm from "../components/habitForm";

const HabitLanding = () => {
  const { habitState, setIsAdd, isAdd } = useContext(HabitContext);

  const filteredHabits = habitState.habitsData.filter(habit => !habit?.isArchived);

  return (
    <div>
      <h1>Habit Tracker</h1>
      <button onClick={() => setIsAdd(!isAdd)}>Add a Habit</button>
      {
        isAdd && <HabitForm />
      }
      <h3>All your habits are listed here</h3>
      <ul>
        {filteredHabits?.map((data) => (
          <HabitCard key={data.id} habitData={data}/>
        ))}
      </ul>
    </div>
  );
};

export default HabitLanding;
