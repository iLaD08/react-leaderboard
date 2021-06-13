import React from "react";
import LeaderboardItem from "./leaderboard-item";

const Leaderboard = ({ people }) => (
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Country</th>
        <th>State</th>
        <th>City</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      {people.map((person, index) => (
        <LeaderboardItem person={person} index={index} />
      ))}
    </tbody>
  </table>
);

export default Leaderboard;
