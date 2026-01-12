"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { Calendar, MapPin } from "lucide-react";

const heroHeading = "Professional Development Conference 2026";
const heroSubheading = "Advance Your Career in One Day: Connect, Learn, Lead";

const HeroSection = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      ".hero-heading",
      {
        opacity: [0, 1],
        x: [-20, 0],
      },
      {
        delay: stagger(0.1),
        easing: "easeInOut",
        duration: 0.6,
      }
    );

    animate(
      ".hero-subheading",
      {
        opacity: [0, 1],
        x: [20, 0],
      },
      {
        delay: stagger(0.1),
        easing: "easeInOut",
        duration: 0.5,
      }
    );
  }, []);

  return (
    <main className="pt-16 bg-linear-to-br from-primary to-secondary min-h-screen">
      <section
        ref={scope}
        className="max-w-6xl mx-auto grid grid-cols-2 py-18 gap-2"
      >
        <div className="text-white">
          <div className="flex flex-wrap">
            {heroHeading.split(" ").map((word, index) => (
              <span
                key={word + index}
                className="hero-heading text-5xl font-bold md:text-6xl inline-block"
              >
                {word}&nbsp;
              </span>
            ))}
          </div>
          <div className="mt-4">
            {heroSubheading.split(" ").map((word, index) => (
              <span
                key={word + index}
                className="hero-subheading text-neutral-300 font-semibold text-xl inline-block tracking-tight"
              >
                {word}&nbsp;
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between text-neutral-200 font-medium">
            <div className="flex items-center justify-center">
              <Calendar/> March 15, 2026
            </div>
            <div className="flex items-center justify-center">
              <MapPin/> Palladium Conference Center, Pune
            </div>
          </div>
        </div>

        <div></div>
      </section>
    </main>
  );
};

export default HeroSection;
