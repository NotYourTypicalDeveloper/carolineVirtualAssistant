import React from "react";
import "./App.css";
import Chatbot from "react-simple-chatbot";

function App() {
  const steps = [
    {
      id: "Greet",
      message: `Hello, I am Caroline's personal assistant`,
      trigger: "Ask name",
    },
    {
      id: "Ask name",
      message: "What's your name, buddy?",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "NameGiven",
    },
    {
      id: "NameGiven",
      message: `Hi, {previousValue}, what brings you here?`,
      trigger: "contact reasons",
    },
    {
      id: "contact reasons",
      options: [
        { value: "recruitment", label: "recruitment", trigger: "recruitment" },
        {
          value: "programming buddy",
          label: "looking for a programming buddy",
          trigger: "programming buddy",
        },
        {
          value: "ping pong",
          label: "want to play ping pong",
          trigger: "ping pong",
        },
      ],
    },

    // if "recruitment"
    {
      id: "recruitment",
      message: `can't wait to hear what you have to offer. Any questions?`,
      trigger: "recQuestions",
    },
    {
      id: "recQuestions",
      options: [
        {
          value: "salary expectation",
          label: "salary expectation",
          trigger: "salary expectation",
        },
        {
          value: "notice period",
          label: "notice period",
          trigger: "notice period",
        },
        {
          value: "work style",
          label: "work style",
          trigger: "work style",
        },
      ],
    },

    {
      id: "salary expectation",
      message: `salary expected per year: multiply the magic number by 1000. Please select a new topic`,
      trigger: "recQuestions",
    },
    {
      id: "notice period",
      message: `notice period : 3 months, might be negotiable. Please select a new topic`,
      trigger: "recQuestions",
    },
    {
      id: "work style",
      message: `I am open to Hybrid up to 2 days at the office / week maximum, or fully remote. Any other questions?`,
      trigger: "recQuestions",
    },

    // if "programming buddy"
    {
      id: "programming buddy",
      user: true,
      message: "nice, what do you want to program?",
      trigger: "programmingResp1",
    },

    {
      id: "programmingResp1",
      user: true,
      message: "cool, what language do you use?",
      trigger: "programmingResp2",
    },

    {
      id: "programmingResp2",
      message: `{previousValue} .., woahh!`,
    },

    //if "ping pong"
    {
      id: "ping pong",
      message: `cool, what's your current level?`,
      end: true,
    },
  ];
  return (
    <div>
      HELLO, I am the Chatbot <span>🤖 </span>
      <Chatbot steps={steps} />
    </div>
  );
}

export default App;
