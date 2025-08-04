import React from "react";

const Leaderboard = () => {
  const leaderboardData = [
    { name: "Rahul", donations: 8200 },
    { name: "Aisha", donations: 7200 },
    { name: "Karan", donations: 6300 },
    { name: "Neha", donations: 5100 },
    { name: "Siddharth", donations: 4200 },
  ];

  return (
    <div className="leaderboard-card">
      <h3>🏆 Leaderboard</h3>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Intern</th>
            <th>Donations</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((intern, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{intern.name}</td>
              <td>₹{intern.donations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
