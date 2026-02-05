import { FaGamepad, FaBook, FaQuestionCircle, FaVolumeUp } from "react-icons/fa";

export const projects = [
  {
    id: 1,
    title: "Number Guessing Game",
    description: "A game where the player guesses a random number.",
    tech: "React, JavaScript, CSS",
    github: "https://github.com/Neelamma-S/NumberGuessingGame",
    icon: FaGamepad, // <-- React Icon component
  },
  {
    id: 2,
    title: "Library Management System",
    description: "Manage books, users, and borrowing efficiently.",
    tech: "Java, MySQL, Swing",
    github: "https://github.com/Neelamma-S/LibraryManagementSystem",
    icon: FaBook,
  },
  {
    id: 3,
    title: "Quiz Game Web Application",
    description: "An online quiz platform with multiple categories.",
    tech: "React, Node.js, Express, MongoDB",
    github: "https://github.com/Neelamma-S/Quiz-Game",
    icon: FaQuestionCircle,
  },
  {
    id: 4,
    title: "Text-to-Speech Web Application",
    description: "Convert text into speech using modern TTS APIs.",
    tech: "React, Web Speech API, CSS",
    github: "https://github.com/Neelamma-S/Text_to_speech",
    icon: FaVolumeUp,
  },
];
