import flashChatAILogo from "../../public/flashchatai.svg";
import recoappLogo from "../../public/recoapp.svg";

export const projects = [
  {
    title: "Recoapp",
    description: "A full-stack management platform designed for automotive repair shops.",
    image: recoappLogo,
    repositoryUrl: "https://github.com/Reco-app",
    demoUrl: "#",
    techs: ["nextjs", "nestjs", "postgresql", "tailwind", "reactQuery"],
  },
  {
    title: "Flash Chat AI",
    description: "A full-stack application for support ticket management integrated with AI.",
    image: flashChatAILogo,
    repositoryUrl: "https://github.com/LucianoFigueired/flash-chat-ai",
    demoUrl: "#",
    techs: ["nextjs", "nestjs", "postgresql", "react", "tailwind", "reactQuery", "openai"],
  },
];
