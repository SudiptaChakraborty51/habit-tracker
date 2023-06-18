import React, { useContext } from "react";
import { HabitContext } from "../contexts/habitContext";
import HabitCard from "../components/habitCard";

const ArchivedHabits = () => {
  const { archivedHabits } = useContext(HabitContext);

  return (
    <div>
      <h1>Archived Habits</h1>
      <ul>
        {archivedHabits?.length === 0 ? (
          <h3>No habits are archived!</h3>
        ) : (
          archivedHabits?.map((data) => (
            <HabitCard habitData={data} key={data.id} />
          ))
        )}
      </ul>
    </div>
  );
};

export default ArchivedHabits;
