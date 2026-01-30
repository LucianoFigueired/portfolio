"use client";
import { Mail, ArrowUp } from "lucide-react";
import { SiGithub, SiLogmein } from "@icons-pack/react-simple-icons";

export function Contact() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="py-20 px-6 bg-zinc-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-zinc-900">Let's connect</h2>
          <p className="text-zinc-500 text-center">Feel free to send me an email to talk about technology or just to say hi!</p>
        </div>

        <div className="flex gap-4">
          <div className="p-3 bg-zinc-900 text-white rounded-lg cursor-pointer hover:bg-purple-700 transition-colors">
            <Mail
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:lucianofigueiredo.dev@gmail.com";
              }}
              size={24}
            />
          </div>
          <div className="p-3 bg-zinc-900 text-white rounded-lg cursor-pointer hover:bg-purple-700 transition-colors">
            <SiGithub onClick={() => window.open("https://github.com/LucianoFigueired", "_blank")} size={24} />
          </div>
          <div className="p-3 bg-zinc-900 text-white rounded-lg cursor-pointer hover:bg-purple-700 transition-colors">
            <SiLogmein onClick={() => window.open("https://www.linkedin.com/in/luciano-figueiredo/", "_blank")} size={24} />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-zinc-200 flex justify-between items-center text-xs text-zinc-400 font-medium">
        <button onClick={scrollToTop} className="flex items-center gap-2 hover:text-purple-700 transition-colors cursor-pointer">
          <span className="text-lg">Back to top</span>
          <ArrowUp size={16} strokeWidth={3} />
        </button>
      </div>
    </footer>
  );
}
