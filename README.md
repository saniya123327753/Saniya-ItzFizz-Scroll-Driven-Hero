Itzfizz — Scroll-Driven Hero Animation
A scroll-driven hero section I built as part of the Itzfizz assignment. A sports car drives across a road as you scroll, revealing the headline letters behind it, while stat cards rise in from the bottom. Everything is powered by the user's scroll — no timers, no autoplay this repository's link( i will give it remember me)

** What it does
Hero (first screen) — A big letter-spaced headline WELCOMEITZFIZZ with four stat cards (58%, 23%, 27%, 40%) that animate in with a staggered fade/slide on page load.
Scroll animation — The section pins to the screen while you scroll. An orange sports car moves from the left to the right of the road, and:
An orange trail fills the road behind it,
The road letters reveal one by one as the car passes over them,
Four stat cards rise up from the bottom,
The intro headline block fades away.
Reversible — Scrolling back up plays everything in reverse, because the whole animation is scrubbed to scroll progress.

** Tech stack & why
Tool	What I used it for:-
React	Component-based UI
The hero is one reusable component
TypeScript	Type-safe code, fewer silly bugs GSAP + ScrollTrigger
The animation engine.
ScrollTrigger pins the section and scrubs the timeline to scroll position
Tailwind CSS v4	Utility-first styling and the theme (colors, fonts) defined as CSS variables
Vite (TanStack Start)	Dev server and build tooling 
instant hot reload while developing

How the animation works (the core idea):-
A GSAP timeline is created with scrollTrigger: { pin: true, scrub: 1, end: "+=250%" } — the section stays pinned for 2.5 screens of scrolling and every tween is tied to scroll progress (scrub).
The car's x position is animated by a distance calculated from the road width, so it works on any screen size (invalidateOnRefresh recalculates on resize).
Only transform and opacity are animated — these are GPU-composited, so the animation stays smooth at 60fps.
gsap.context() is used with a cleanup (ctx.revert()), so animations are properly disposed when the component unmounts.
Project structure
src/
├── assets/
│   └── car.png              # The sports car image (transparent PNG)
├── components/
│   └── ScrollHero.tsx       # Main animation component (headline, road, car, stats)
├── routes/
│   ├── index.tsx            # Home page — renders ScrollHero + SEO meta tags
│   └── __root.tsx           # App shell — fonts, styles, head metadata
└── styles.css  

Run it locally
npm install
npm run dev
Then open the local URL shown in the terminal (http://localhost:8080/).

Customize it
Headline text — edit the HEADLINE constant at the top of src/components/ScrollHero.tsx.
Stats — edit the STATS array in the same file (value, label, and card color).
Scroll length — change end: "+=250%" in the timeline to make the animation longer/shorter.
Colors & fonts — theme tokens live in src/styles.css (--primary, --road, --stat-1..4, fonts).
Deployment
The site is deployed with its own hosting and gets a public URL — the live link in the submission form points there. Any static/edge host that supports a Vite build works too.
