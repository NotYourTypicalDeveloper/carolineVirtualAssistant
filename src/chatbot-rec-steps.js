// dialog flow for "recruitment"
// if user selects "recruitment" ================================================
const recruitmentPrompts = [
  {
    id: "recruitment",
    // TODO: add a settimeout between 2 sentences
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
];

export default recruitmentPrompts;
