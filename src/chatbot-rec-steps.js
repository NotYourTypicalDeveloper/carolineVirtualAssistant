// dialog flow for "recruitment" ================================================
const recruitmentPrompts = [
  {
    id: "recruitment",
    // TODO: add a settimeout between 2 sentences
    message: `can't wait to hear what you have to offer. Any questions?`,
    trigger: "rec-options",
  },
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
    ],
  },

  {
    id: "salary-expectation",
    message: `salary expected per year: multiply the magic number by 1000. Please select a new topic`,
    trigger: "rec-options",
  },
  {
    id: "notice-period",
    message: `notice period : 3 months, might be negotiable. Please select a new topic`,
    trigger: "rec-options",
  },
  {
    id: "work-style",
    message: `I am open to Hybrid up to 2 days at the office / week maximum, or fully remote. Any other questions?`,
    trigger: "rec-options",
  },
  {
    id: "rights-work",
    message: `Don't worry! I have the settled status. I have unlimited right to work in the UK.Any other questions?`,
    trigger: "rec-options",
  },
];

export default recruitmentPrompts;
