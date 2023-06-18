import React, { createContext, useReducer } from "react";
import { habits } from "../data";
import { habitReducer } from "../reducer/habitReducer";

export const HabitContext = createContext();

const HabitProvider = ({ children }) => {
  const initial = {
    habitsData: habits,
  };

  const [habitState, habitDispatch] = useReducer(habitReducer, initial);
  return (
    <HabitContext.Provider value={{ habitState, habitDispatch }}>
      {children}
    </HabitContext.Provider>
  );
};

export default HabitProvider;
