import flashChatAILogo from "../../public/flashchatai.svg";
import recoappLogo from "../../public/recoapp.svg";
import zelo from "../../public/zelo.svg";

export const projects = [
  {
    title: "Zelo",
    description:
      "Zelo is a Multi-Family Office software designed to project wealth growth, simulate succession planning, and evaluate risks with the support of AI.",
    image: zelo,
    repositoryUrl: "https://github.com/LucianoFigueired/mfo-saas",
    demoUrl: "zelo-eta.vercel.app",
    techs: ["nextjs", "nestjs", "postgresql", "redis", "openai"],
  },
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
