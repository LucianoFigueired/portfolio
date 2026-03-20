"use client";
import {
  SiNestjs,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiReact,
  SiReactquery,
  SiRedis,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";
import Image from "next/image";

const iconMap: Record<string, any> = {
  nextjs: SiNextdotjs,
  nestjs: SiNestjs,
  postgresql: SiPostgresql,
  react: SiReact,
  tailwind: SiTailwindcss,
  reactQuery: SiReactquery,
  openai: SiOpenai,
  redis: SiRedis,
};

interface ProjectCardInterface {
  title: string;
  description: string;
  repositoryUrl?: string;
  demoUrl?: string;
  imageUrl: string;
  techs?: string[];
}

export function ProjectCard({ title, description, repositoryUrl, demoUrl, imageUrl, techs = [] }: ProjectCardInterface) {
  return (
    <motion.div whileHover={{ y: -10 }} className="bg-white rounded-lg overflow-hidden border border-zinc-100 shadow-sm">
      <div className="bg-white h-48 w-full flex items-center justify-center relative overflow-hidden">
        <Image src="/project-background.jpg" alt="Background" fill className="object-cover opacity-50" priority />

        {imageUrl ? (
          <div className="relative z-10">
            <Image src={imageUrl} width={120} height={120} alt={title} className="object-contain" />
          </div>
        ) : (
          <span className="text-zinc-400 relative z-10">Preview Image</span>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-zinc-900 mb-2">{title}</h3>
        <p className="text-zinc-500 text-sm mb-4 leading-relaxed">{description}</p>

        <div className="flex gap-3 mb-6 text-zinc-400">
          {techs.map((techKey) => {
            const Icon = iconMap[techKey];
            return Icon ? <Icon key={techKey} size={20} /> : null;
          })}
        </div>

        <div className="flex gap-3">
          <button
            className="flex-1 bg-purple-700 hover:bg-purple-800 text-white text-xs py-2.5 rounded font-bold transition-colors"
            onClick={() => repositoryUrl && window.open(repositoryUrl, "_blank")}
          >
            VIEW CODE
          </button>
          <button
            className="flex-1 border border-purple-700 text-purple-700 hover:bg-purple-50 text-xs py-2.5 rounded font-bold transition-colors"
            onClick={() => {
              if (demoUrl) {
                const url = demoUrl.startsWith("http") ? demoUrl : `https://${demoUrl}`;
                window.open(url, "_blank");
              }
            }}
          >
            LIVE DEMO
          </button>
        </div>
      </div>
    </motion.div>
  );
}
