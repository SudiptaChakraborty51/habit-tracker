import "./App.css";
import { Routes, Route } from "react-router-dom";
import HabitLanding from "./pages/habitLanding";
import ArchivedHabits from "./pages/archivedHabits";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HabitLanding />} />
        <Route path="/archived-habits" element={<ArchivedHabits />} />
      </Routes>
    </div>
  );
}

export default App;
