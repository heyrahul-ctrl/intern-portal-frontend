import React, { useState } from "react";
import Leaderboard from "./Leaderboard";
import "./App.css";

function App() {
  const [internData, setInternData] = useState(null);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/intern");
      const data = await response.json();
      setInternData(data);
      setShowDashboard(true);
    } catch (error) {
      console.error("Login failed:", error);
      alert("Failed to connect to backend. Is it running?");
    }
  };

  return (
    <div className="App" style={styles.app}>
      <h2>Intern Portal</h2>

      {!showDashboard ? (
        <div style={styles.card}>
          <h3>Login</h3>
          <input style={styles.input} type="text" placeholder="Enter name" />
          <input style={styles.input} type="email" placeholder="Enter email" />
          <button style={styles.button} onClick={handleLogin}>
            Login
          </button>
        </div>
      ) : (
        <>
          <div style={styles.card}>
            <h3>Welcome, {internData.name}!</h3>
            <p><strong>Referral Code:</strong> {internData.referralCode}</p>
            <p><strong>Donations Raised:</strong> ₹{internData.donationsRaised}</p>
            <h4>Rewards:</h4>
            <ul>
              {internData.rewards.map((reward, index) => (
                <li key={index}>{reward}</li>
              ))}
            </ul>
          </div>

          <Leaderboard />
        </>
      )}
    </div>
  );
}

const styles = {
  app: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "100px",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    backgroundColor: "#f8f8f8",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    width: "300px",
    textAlign: "center",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default App;
