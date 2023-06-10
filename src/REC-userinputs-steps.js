const rec_UserInputPrompts = [
  {
    id: "enter-your-question",
    message: "Please enter your question",
    trigger: "wait-for-question",
  },
  {
    id: "wait-for-question",
    user: true,
    trigger: "listening-to-input",
  },
  {
    id: "listening-to-input",
    message: ({ previousValue }) => {
      const prevVal = previousValue.toLowerCase();
      if (prevVal.includes("current skills") || prevVal.includes("skills")) {
        return "My main skills are JavaScript, HTML, CSS, ReactJS, NextJS, chakra-ui, graphQL, API requests. and I have long history of Microsoft Sharepoint development including RPA Automation, pure JS, CSS, HTML, MS365 eco-system.";
      } else if (
        prevVal.includes("location") ||
        prevVal.includes("where are you based")
      ) {
        return "I am based in North London, West Finchley";
      } else if (prevVal.includes("hello") || prevVal.includes("hi")) {
        return "Hello";
      } else if (prevVal.includes("current situation")) {
        return "I am currently employed at the Bike Club as a Front-end developer.";
      } else if (
        prevVal.includes("reason for leaving") ||
        prevVal.includes("change job")
      ) {
        return "I am looking for a more ambitous challenge and better opportunities to grow as a developer";
      } else {
        return "I dont understand";
      }
    },
    trigger: "wait-user-resp",
  },
  {
    id: "wait-user-resp",
    message: "anything else?",
    trigger: "restart-loop",
  },
  {
    id: "restart-loop",
    user: true,
    trigger: "listening-to-input",
  },
];

export default rec_UserInputPrompts;
