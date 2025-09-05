import React from "react";
import Chatbot from "react-simple-chatbot";
import "./App.css";
import steps from "./MAIN-steps.js";
import chatbotImg from "./assets/chatbot-logo-bg.jpg";
import userImg from "./assets/user1.jpg";

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
      <Chatbot
        steps={stepsWithDelay}
        bubbleOptionStyle={{ backgroundColor: "white", color: "#b317b9" }}
        userAvatar={userImg}
        botAvatar={chatbotImg}
        headerTitle={`Caroline's chatbot`}
        width="500px"
        height="700px"
      />
    </div>
  );
}

export default App;
