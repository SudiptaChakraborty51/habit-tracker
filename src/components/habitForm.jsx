import React, { useContext, useState } from "react";
import { HabitContext } from "../contexts/habitContext";
import "./habitForm.css";

const HabitForm = ({habitData}) => {
  const { habitState, addHabit } = useContext(HabitContext);

  const {setIsAdd, setIsEdit, editHabit} = useContext(HabitContext);

  const [habitDetails, setHabitDetails] = useState({
    id: habitData?.id ?? Math.random() * 100,
    name: habitData?.name ?? "",
    repeat: habitData?.repeat??"",
    goal: habitData?.goal ?? "",
    time: habitData?.time ?? "",
    startDate: habitData?.startDate ?? "",
  });

  const repeatArr = habitState?.habitsData.reduce(
    (acc, { repeat }) => (acc.includes(repeat) ? acc : [...acc, repeat]),
    []
  );
  console.log(repeatArr);

  const goalArr = habitState?.habitsData.reduce(
    (acc, { goal }) => (acc.includes(goal) ? acc : [...acc, goal]),
    []
  );
  console.log(goalArr);

  const timeArr = habitState?.habitsData.reduce(
    (acc, { time }) => (acc.includes(time) ? acc : [...acc, time]),
    []
  );
  console.log(timeArr);

  const inputChangeHandler = (e) => {
    setHabitDetails({ ...habitDetails, [e.target.name]: e.target.value });
  };

  const saveHandler = (e) => {
    e.preventDefault();
    addHabit(habitDetails);
      setIsAdd(false);
    if(habitData) {
      editHabit(habitDetails.id, habitDetails);
      setIsEdit(false);
    }
  }

  return (
    <div className="modal">
      <form onSubmit={saveHandler}>
        <input
          name="name"
          type="text"
          placeholder="habit name"
          required
          value={habitDetails.name}
          onChange={inputChangeHandler}
        />
        <select
          required
          name="repeat"
          value={habitDetails.repeat}
          onChange={inputChangeHandler}
        >
          <option value="" disabled>
            select repeat
          </option>
          {repeatArr.map((data) => (
            <option value={data} key={data}>
              {data}
            </option>
          ))}
        </select>
        <select
          required
          name="goal"
          value={habitDetails.goal}
          onChange={inputChangeHandler}
        >
          <option value="" disabled>
            select goal
          </option>
          {goalArr.map((data) => (
            <option value={data} key={data}>
              {data}
            </option>
          ))}
        </select>
        <select
          required
          name="time"
          value={habitDetails.time}
          onChange={inputChangeHandler}
        >
          <option value="" disabled>
            select time
          </option>
          {timeArr.map((data) => (
            <option value={data} key={data}>
              {data}
            </option>
          ))}
        </select>
        <input
          required
          type="date"
          name="startDate"
          value={habitDetails.startDate}
          onChange={inputChangeHandler}
        />
        <button type="button" onClick={() => {
          setIsAdd(false);
          setIsEdit(false);
        }}>Discard</button>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default HabitForm;
