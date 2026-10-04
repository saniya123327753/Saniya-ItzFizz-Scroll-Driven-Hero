import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import car from "@/assets/car.png";

const HEADLINE = "WELCOMEITZFIZZ";

const STATS = [
  { value: "58%", label: "Increase in pick up point use", tone: "bg-stat-1 text-foreground" },
  { value: "23%", label: "Decreased in customer phone calls", tone: "bg-stat-2 text-foreground" },
  { value: "27%", label: "Increase in pick up point use", tone: "bg-stat-3 text-background" },
  { value: "40%", label: "Decreased in customer phone calls", tone: "bg-stat-4 text-primary-foreground" },
];

export function ScrollHero() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // 2. Initial load animation: staggered headline + stats
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".intro-letter", { opacity: 0, y: 40, duration: 0.9, stagger: 0.05 })
        .from(".intro-stat", { opacity: 0, y: 30, duration: 0.7, stagger: 0.15 }, "-=0.4");

      // 3. Scroll-driven animation (scrubbed to scroll progress)
      const track = root.current!.querySelector<HTMLElement>(".road")!;
      const carEl = root.current!.querySelector<HTMLElement>(".car")!;
      const distance = () => track.offsetWidth - carEl.offsetWidth * 0.3;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pin-section",
          start: "top top",
          end: "+=250%",
          pin: true,
          scrub: 1, // easing/interpolation between scroll and motion
          invalidateOnRefresh: true,
        },
      });

      tl.to(carEl, { x: distance, ease: "none", duration: 1 }, 0)
        // reveal trail: road text uncovered behind the car
        .to(".trail", { scaleX: 1, ease: "none", duration: 1 }, 0)
        .to(".road-letter", { opacity: 1, stagger: 0.06, duration: 0.05, ease: "none" }, 0.05)
        .fromTo(
          ".scroll-stat",
          { opacity: 0, y: 60, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.18, duration: 0.2, ease: "power2.out" },
          0.25,
        )
        .to(".intro-block", { opacity: 0, y: -60, duration: 0.3, ease: "power1.in" }, 0);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root}>
      <section className="pin-section relative h-screen w-full overflow-hidden bg-background">
        {/* 1. Hero layout: letter-spaced headline + metrics */}
        <div className="intro-block absolute inset-x-0 top-[10vh] z-10 flex flex-col items-center gap-8 px-6 will-change-transform">
          <h1 className="font-display text-3xl font-bold tracking-[0.5em] text-foreground sm:text-5xl md:text-6xl">
            {HEADLINE.split("").map((c, i) => (
              <span key={i} className="intro-letter inline-block">{c}</span>
            ))}
          </h1>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={i} className="intro-stat text-center">
                <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
                <p className="mt-1 max-w-[12rem] text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Road + car */}
        <div className="road absolute inset-x-0 top-1/2 h-[18vh] min-h-32 -translate-y-1/2 bg-road">
          <div className="trail absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-primary will-change-transform" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-display text-4xl font-black tracking-[0.15em] text-primary-foreground sm:text-6xl md:text-8xl">
              {HEADLINE.split("").map((c, i) => (
                <span key={i} className="road-letter inline-block opacity-0">{c}</span>
              ))}
            </p>
          </div>
          <img
            src={car}
            alt="Orange sports car"
            width={1536}
            height={768}
            className="car absolute left-0 top-1/2 h-[140%] w-auto -translate-x-full -translate-y-1/2 will-change-transform"
          />
        </div>

        {/* Stats that appear while scrolling */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[6vh] z-10 grid grid-cols-2 gap-4 px-6 md:grid-cols-4 md:px-16">
          {STATS.map((s, i) => (
            <div key={i} className={`scroll-stat rounded-xl p-6 opacity-0 shadow-lg will-change-transform ${s.tone}`}>
              <p className="font-display text-4xl font-bold md:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex min-h-screen items-center justify-center bg-road px-6">
        <p className="max-w-xl text-center font-display text-2xl text-background">
          Scroll back up to replay the ride.
        </p>
      </section>
    </div>
  );
}
