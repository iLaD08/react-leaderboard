import React, { useState, useEffect } from "react";
import axios from "axios";
import Leaderboard from "./components/leaderboard.js";
import "./App.css";

const App = () => {
  const [people, setPeople] = useState([]);

  const fetchPeople = () => {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((res) => setPeople(res.data.results))
      .catch((err) => err);
  };

  useEffect(() => fetchPeople(), []);

  people.sort((a, b) => {
    var AgeA = a.dob.age;
    var AgeB = b.dob.age;

    return AgeB - AgeA;
  });

  return (
    <div className='App'>
      <Leaderboard people={people} />
      <button onClick={fetchPeople}>Get other people</button>
    </div>
  );
};

export default App;
