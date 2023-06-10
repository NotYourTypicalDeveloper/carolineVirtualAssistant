import React from "react";
import "./App.css";
import Chatbot from "react-simple-chatbot";
import steps from "./MAIN-steps.js";

function App() {
  // Adds a 1 second delay to each step
  const stepsWithDelay = steps.map((step) => ({
    delay: 1000,
    ...step,
  }));

  return (
    <div className="app-container">
      <Chatbot
        steps={stepsWithDelay}
        bubbleOptionStyle={{ backgroundColor: "white", color: "#b317b9" }}
      />
    </div>
  );
}

export default App;
