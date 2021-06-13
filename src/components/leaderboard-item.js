import React from "react";

const LeaderboardItem = ({ person, index }) => (
  <tr>
    <td>{index + 1}</td>
    <td>
      {person.name.title} {person.name.first} {person.name.last}
    </td>
    <td>{person.location.country}</td>
    <td>{person.location.state}</td>
    <td>{person.location.city}</td>
    <td>{person.dob.age}</td>
  </tr>
);

export default LeaderboardItem;
