import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [internData, setInternData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/intern")
      .then((res) => res.json())
      .then((data) => setInternData(data))
      .catch((err) => console.error("Error fetching intern data:", err));
  }, []);

  if (!internData) return <p>Loading...</p>;

  return (
    <div className="App">
      <h1>Intern Dashboard</h1>
      <p><strong>Name:</strong> {internData.name}</p>
      <p><strong>Referral Code:</strong> {internData.referralCode}</p>
      <p><strong>Total Donations Raised:</strong> ₹{internData.donationsRaised}</p>

      <h3>Rewards:</h3>
      <ul>
        {internData.rewards.map((reward, index) => (
          <li key={index}>{reward}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
