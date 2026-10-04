import { createFileRoute } from "@tanstack/react-router";
import { ScrollHero } from "@/components/ScrollHero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Welcome Itzfizz — Scroll-Driven Hero" },
      { name: "description", content: "Scroll-driven hero animation built with React, GSAP and Tailwind." },
      { property: "og:title", content: "Welcome Itzfizz — Scroll-Driven Hero" },
      { property: "og:description", content: "Scroll-driven hero animation built with React, GSAP and Tailwind." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ScrollHero,
});
