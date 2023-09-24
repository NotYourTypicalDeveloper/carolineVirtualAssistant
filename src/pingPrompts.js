const pingPrompts = [
  {
    id: "PPQ1",
    message: "Great, what's your level?",
    trigger: "level-options",
  },
  {
    id: "level-options",
    options: [
      { value: "beginner", label: "beginner", trigger: "beginner-lev" },
      {
        value: "garden player",
        label: "garden player",
        trigger: "garden-lev",
      },
      {
        value: "intermediate",
        label: "intermediate",
        trigger: "inter-lev",
      },
      {
        value: "advanced",
        label: "advanced",
        trigger: "advanced-lev",
      },
    ],
    delay: 1500,
  },
  // Reject user
  {
    id: "beginner-lev",
    message:
      "Sorry! I rather playing with mid to advanced players. Train more and come back later",
    trigger: "PP-reject",
  },

  {
    id: "garden-lev",
    message: "Sorry, but I rather playing with club players",
    trigger: "PP-reject",
  },

  // return to main menu or good bye
  {
    id: "PP-reject",
    options: [
      {
        value: "main-menu",
        label: "Return to main menu",
        trigger: "contact-reasons",
      },
      { value: "No", label: "No", trigger: "goodbye" },
    ],
  },
  //  Intermediate
  {
    id: "inter-lev",
    message: "Sounds good! How many years did you train?",
    trigger: "inter-wait-user",
  },
  {
    id: "inter-wait-user",
    user: true,
    trigger: "inter-resp-1",
  },
  {
    id: "inter-resp-1",
    message: "not bad! Where do you want to practice?",
    trigger: "inter-wait-user2",
  },
  {
    id: "inter-wait-user2",
    user: true,
    trigger: "give-email",
  },

  // Advanced
  {
    id: "advanced-lev",
    message: "Great, do you play in the league?",
    trigger: "advanced-league-yes-no",
  },
  {
    id: "advanced-league-yes-no",
    options: [
      { value: "Yes", label: "Yes", trigger: "league-yes" },
      { value: "No", label: "No", trigger: "league-no" },
      {
        value: "Soon",
        label: "Soon hopefully / Training for",
        trigger: "league-soon",
      },
    ],
  },
  {
    id: "league-yes",
    message:
      "Wow, awesome, well I hope I will be up to your standards. You can teach me some tricks",
    trigger: "give-email",
  },
  {
    id: "league-no",
    message:
      "It's all right, no need to be competitive. Let's practice if you'd like",
    trigger: "give-email",
  },
  {
    id: "league-soon",
    message: "Yes, me too! Let's practice and reach our goals!",
    trigger: "give-email",
  },
  // give email to intermediate or advanced players
  {
    id: "give-email",
    message: "You can send me an email : zarmaaprod@gmail.com! See you soon!",
    end: true,
  },
];

export default pingPrompts;
