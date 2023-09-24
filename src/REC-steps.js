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
      { value: "yes", label: "yes", trigger: "rec-options" },
      {
        value: "no",
        label: "no",
        trigger: "goodbye",
      },
    ],
  },

  // recruiter topic options -----------
  {
    id: "rec-options",
    options: [
      {
        value: "salary expectation",
        label: "Salary expectation",
        trigger: "salary-expectation",
      },
      {
        value: "notice period",
        label: "Notice period",
        trigger: "notice-period",
      },
      {
        value: "work style",
        label: "Work style",
        trigger: "work-style",
      },
      {
        value: "right to work in UK",
        label: "Right to work in UK",
        trigger: "rights-work",
      },
      {
        value: "current location",
        label: "Current location",
        trigger: "curr-location",
      },
      {
        value: "preferred work style",
        label: "Preferred work style",
        trigger: "preferred-workstyle",
      },
      {
        value: "Show other topics",
        label: "Show me other topics",
        trigger: "rec-options2",
      },
      {
        value: "other",
        label: "Free question",
        trigger: "enter-your-question", // this prompt is located in "MAIN-steps.js"
      },
    ],
  },

  {
    id: "rec-options2",
    options: [
      {
        value: "Relocation",
        label: "Relocation",
        trigger: "relocation",
      },
      {
        value: "Favorite Tech",
        label: "Favorite Tech",
        trigger: "fav-tech",
      },
      {
        value: "Career interest",
        label: "Career/Tech interests",
        trigger: "tech-interests",
      },
    ],
  },
  // chatbot asks if you have any other question
  {
    id: "any-question-prompt",
    message: "Any other question?",
    trigger: "any-questions-yesno-answer",
  },

  // Answers to tag topics
  {
    id: "salary-expectation",
    message: `£ ${process.env.REACT_APP_SALARY} / annum.`,
    trigger: "any-question-prompt",
  },
  {
    id: "notice-period",
    message: `notice period : ${process.env.REACT_APP_NOTICEPERIOD}.`,
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
  {
    id: "curr-location",
    message: `I am currently living in ${process.env.REACT_APP_LOCATION}`,
    trigger: "any-question-prompt",
  },
  {
    id: "preferred-workstyle",
    message: `${process.env.REACT_APP_WORKSTYLE}`,
    trigger: "any-question-prompt",
  },
  {
    id: "relocation",
    message: `${process.env.REACT_APP_RELOCATION}`,
    trigger: "any-question-prompt",
  },
  {
    id: "fav-tech",
    message: `I am open to ${process.env.REACT_APP_FAV_TECH}`,
    trigger: "any-question-prompt",
  },
  {
    id: "tech-interests",
    message: `I am in interested in ${process.env.REACT_APP_TECH_INTEREST}`,
    trigger: "any-question-prompt",
  },
];

export default recruitmentPrompts;
