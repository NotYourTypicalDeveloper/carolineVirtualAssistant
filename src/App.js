import React from "react";
import "./App.css";
import Chatbot from "react-simple-chatbot";
import steps from "./chatbot-steps.js";

function App() {
  return (
    <div>
      HELLO, I am the Chatbot <span>🤖 </span>
      <Chatbot steps={steps} userDelay={1000} />
    </div>
  );
}

export default App;
