import React from "react";
import "./App.css";
import Chatbot from "react-simple-chatbot";
import steps from "./MAIN-steps.js";

function App() {
  // Add a 1.5 second delay to each step
  const stepsWithDelay = steps.map((step) => ({
    ...step,
    delay: 1500,
  }));

  return (
    <div>
      HELLO, I am the Chatbot <span>🤖</span>
      <Chatbot steps={stepsWithDelay} userDelay={1000} />
    </div>
  );
}

export default App;
