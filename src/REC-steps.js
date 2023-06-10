// dialog flow for "recruitment" ================================================
const recruitmentPrompts = [
  {
    id: "recruitment",
    message: `can't wait to hear what you have to offer!`,
    trigger: "any-questions-rec",
  },
  {
    id: "any-questions-rec",
    message: "Any questions?",
    trigger: "any-questions-yesno-answer",
  },
  {
    id: "any-questions-yesno-answer",
    options: [
      { value: "yes", label: "yes", trigger: "select-topic-rec" },
      {
        value: "no",
        label: "no",
        trigger: "goodbye",
      },
    ],
  },
  {
    id: "select-topic-rec",
    message: "please select a recruitment topic",
    trigger: "rec-options",
  },

  // recruiter topic options -----------
  {
    id: "rec-options",
    options: [
      {
        value: "salary expectation",
        label: "salary expectation",
        trigger: "salary-expectation",
      },
      {
        value: "notice period",
        label: "notice period",
        trigger: "notice-period",
      },
      {
        value: "work style",
        label: "work style",
        trigger: "work-style",
      },
      {
        value: "right to work in UK",
        label: "right to work in UK",
        trigger: "rights-work",
      },
      {
        value: "other",
        label: "other",
        trigger: "enter-your-question", // this prompt is located in "MAIN-steps.js"
      },
    ],
  },
  // chatbot asks if you have any other question
  {
    id: "any-question-prompt",
    message: "Any other question?",
    trigger: "any-questions-yesno-answer",
  },
  {
    id: "salary-expectation",
    message: `salary expected per year: multiply the magic number by 1000.`,
    trigger: "any-question-prompt",
  },
  {
    id: "notice-period",
    message: `notice period : 3 months, might be negotiable.`,
    trigger: "any-question-prompt",
  },
  {
    id: "work-style",
    message:
      "I am open to Hybrid up to 2 days at the office / week maximum, or fully remote.",
    trigger: "any-question-prompt",
  },

  {
    id: "rights-work",
    message: `Don't worry! I have the settled status. I have unlimited right to work in the UK.`,
    trigger: "any-question-prompt",
  },
  // {
  //   id: "other",

  // }
];

export default recruitmentPrompts;
