import React, { useContext } from "react";
import { HabitContext } from "../contexts/habitContext";
import HabitCard from "../components/habitCard";
import HabitForm from "../components/habitForm";

const HabitLanding = () => {
  const { habitState } = useContext(HabitContext);
  return (
    <div>
      <h1>Habit Tracker</h1>
      <button>Add a Habit</button>
      <HabitForm />
      <h3>All your habits are listed here</h3>
      <ul>
        {habitState?.habitsData?.map((data) => (
          <HabitCard key={data.id} habitData={data} />
        ))}
      </ul>
    </div>
  );
};

export default HabitLanding;
