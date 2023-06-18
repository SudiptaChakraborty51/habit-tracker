import React, { createContext, useReducer, useState } from "react";
import { habits } from "../data";
import { habitReducer } from "../reducer/habitReducer";

export const HabitContext = createContext();

const HabitProvider = ({ children }) => {
  const initial = {
    habitsData: habits,
  };

  const [habitState, habitDispatch] = useReducer(habitReducer, initial);

  const [isEdit, setIsEdit] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  const addHabit = (habitDetails) => {
    habitDispatch({ type: "ADD_HABIT", payload: habitDetails });
  };

  const editHabit = (habitId, habitDetails) => {
    const updatedHabit = habitState.habitsData.map((data) =>
      data.id === habitId ? { ...data, ...habitDetails } : data
    );
    habitDispatch({ type: "EDIT_HABIT", payload: updatedHabit });
  };

  const deleteHabit = (habitId) => {
    const updatedHabit = habitState.habitsData.filter(
      (data) => data.id !== habitId
    );
    habitDispatch({ type: "DELETE_HABIT", payload: updatedHabit });
  };

  const toggleArchiveHabit = (habitId) => {
    const updatedHabit = habitState.habitsData.map((data) =>
      data.id === habitId ? { ...data, isArchived: !data.isArchived } : data
    );
    habitDispatch({ type: "ARCHIVE_HABIT", payload: updatedHabit });
  };

  const archivedHabits = habitState.habitsData.filter(
    (habit) => habit?.isArchived
  );

  return (
    <HabitContext.Provider
      value={{
        habitState,
        habitDispatch,
        archivedHabits,
        addHabit,
        editHabit,
        deleteHabit,
        toggleArchiveHabit,
        isEdit,
        setIsEdit,
        isAdd,
        setIsAdd
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export default HabitProvider;
