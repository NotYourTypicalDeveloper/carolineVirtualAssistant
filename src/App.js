import React from "react";
import "./App.css";
import Chatbot from "react-simple-chatbot";
import steps from "./MAIN-steps.js";
import userImg from "./assets/user1.jpg";
import chatbotImg from "./assets/chatbot-logo-bg.jpg";

function App() {
  const stepsWithDelay = steps.map((step) => {
    if (step.hasOwnProperty("delay") || !step.hasOwnProperty("message")) {
      return step;
    } else {
      return {
        ...step,
        delay: 1000,
      };
    }
  });

  return (
    <div className="app-container">
      <div className="bot-wrapper">
        <Chatbot
          steps={stepsWithDelay}
          bubbleOptionStyle={{ backgroundColor: "white", color: "#b317b9" }}
          userAvatar={userImg}
          botAvatar={chatbotImg}
          headerTitle={`Caroline's chatbot`}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
