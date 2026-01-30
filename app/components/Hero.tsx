"use client";
import { SiGithub, SiLogmein, SiRefinedgithub } from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-20 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold text-zinc-900 mb-2"
      >
        Hi, i'm Luciano Figueiredo.
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl md:text-2xl font-semibold text-purple-700 mb-6"
      >
        Jr. Full-stack developer
      </motion.h2>

      <p className="max-w-xl text-zinc-500 mb-8">
        I'm a developer driven by building efficient, impactful solutions, with a current focus on NestJS and the React ecosystem.
      </p>

      <div className="flex items-center gap-4 mb-8">
        <button className="bg-purple-700 text-white px-6 py-2 rounded-md font-medium hover:bg-purple-800 cursor-pointer transition-colors">
          GET IN TOUCH
        </button>
        <button className="border border-purple-700 text-purple-700 px-6 py-2 rounded-md font-medium cursor-pointer hover:bg-purple-50 transition-colors">
          RESUME
        </button>
      </div>

      <div className="flex gap-4 text-purple-700">
        <SiGithub onClick={() => window.open("https://github.com/LucianoFigueired", "_blank")} className="w-8 h-8 cursor-pointer" />
      </div>
    </section>
  );
}
