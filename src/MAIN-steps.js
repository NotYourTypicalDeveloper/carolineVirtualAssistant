import recruitmentPrompts from "./REC-steps";
import progPrompts from "./PROG-steps";
import rec_UserInputPrompts from "./REC-userinputs-steps";

// MAIN DIALOG FLOW
const steps = [
  {
    id: "Greet",
    message: `Hello, I am Caroline's personal assistant`,
    trigger: "Ask-name",
  },
  {
    id: "Ask-name",
    message: "What's your name, buddy?",
    trigger: "waiting-for-name",
  },
  {
    id: "waiting-for-name",
    user: true,
    trigger: "name-given",
  },
  {
    id: "name-given",
    message: `Hi, {previousValue}, what brings you here?`,
    trigger: "contact-reasons",
  },
  {
    id: "contact-reasons",
    options: [
      { value: "recruitment", label: "recruitment", trigger: "recruitment" },
      {
        value: "programming buddy",
        label: "looking for a programming buddy",
        trigger: "programmingQ1",
      },
      {
        value: "ping pong",
        label: "want to play ping pong",
        trigger: "PPQ1",
      },
      {
        value: "other",
        label: "something else",
        trigger: "enter-your-question",
      },
    ],
  },

  // Goodbye prompt
  {
    id: "goodbye",
    message: "It was nice to chat. Good bye! 👋🏼",
    end: true,
  },

  // Recruitment
  ...recruitmentPrompts,

  // Programming buddy"
  ...progPrompts,

  // "Ping pong" ================================================
  { id: "PPQ1", message: "Great, what's your level?" },

  // user input open prompts
  ...rec_UserInputPrompts,
];

export default steps;
