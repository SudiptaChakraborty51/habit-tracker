import React, { useContext } from 'react'
import { HabitContext } from '../contexts/habitContext'
import { useParams } from 'react-router-dom'

const HabitDetails = () => {
    const {habitID} = useParams();

    const {habitState} = useContext(HabitContext);

    const singleHabit = habitState.habitsData.find(habit => habit.id === Number(habitID));

  return (
    <div>
      <h1>{singleHabit?.name}</h1>
      <p>Repeat: {singleHabit?.repeat}</p>
      <p>Goal: {singleHabit?.goal}</p>
      <p>Time: {singleHabit?.time}</p>
      <p>Start Date: {singleHabit?.startDate}</p>
    </div>
  )
}

export default HabitDetails
