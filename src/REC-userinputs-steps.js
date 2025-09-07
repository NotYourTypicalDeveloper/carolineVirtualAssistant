const rec_UserInputPrompts = [
  {
    id: "enter-your-question",
    message:
      "Please type your recruitment related question. Please note that I am not chatGPT. I can reply to few recruitment related questions as this feature is just a POC.",
    trigger: "wait-for-rec-question",
  },
  {
    id: "wait-for-rec-question",
    user: true,
    trigger: "listening-to-input",
  },
  {
    id: "listening-to-input",
    message: ({ previousValue }) => {
      const regexSkills = /skills.*current|current.*skills|tech.*stack/i;
      const regexLocation = /(current|currently.*location|based|live)|(where.*live|located)/i;
      const regexGreetings = /\b(hello|hi|howdy|oi|morning|Good afternoon|cheerio)\b/i;
      const regexCV = /((get|send|email).*cv|resume)/i;
      const regexQuit = /((reason|why).*(leaving|quitting|job))|(change|leave).*(company|job|role)/i;
      const regexExpYears = /\byears\b.*\bexperience\b/i;
      const prevVal = previousValue.toLowerCase();
      if (regexSkills.test(prevVal)) {
        return `${process.env.REACT_APP_TECH_STACK}`;
      } else if (regexLocation.test(prevVal)) {
        return `I am based in ${process.env.REACT_APP_LOCATION}`;
      } else if (regexGreetings.test(prevVal)) {
        return "Hello";
      } else if (prevVal.includes("current situation")) {
        return `I am actively looking for a role`;
      } else if (regexQuit.test(prevVal)) {
        return `${process.env.REACT_APP_REASON2LEAVE}`;
      } else if (regexCV.test(prevVal)) {
        return "sure, I will send it over. Meanwhile check my LinkedIn profile";
      } else if (regexExpYears.test(prevVal)) {
        return `I have ${calculateYearsOfExp(
          2019
        )} years+ commercial experience as a web developer.`;
      } else {
        return "Sorry, I dont understand.";
      }
    },
    trigger: "any-rec-question-prompt",
  },
];

const calculateYearsOfExp = (startYear) => {
  const yearNow = new Date().getFullYear();
  return `${yearNow - startYear}`;
};

export default rec_UserInputPrompts;
