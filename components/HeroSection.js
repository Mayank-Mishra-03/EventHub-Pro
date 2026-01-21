"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { Calendar, MapPin, Clock } from "lucide-react";
import Button from "./helperComponents/Button";
import IconAndInfo from "./helperComponents/IconAndInfo";
import CalculateTimeDifference from "./helperComponents/CountdownTimer";
import Image from "next/image";
import Container from "./helperComponents/Container";

const heroHeading = "Professional Development Conference 2026";
const heroSubheading = "Advance Your Career in One Day: Connect, Learn, Lead";

const HeroSection = () => {
  const [scope, animate] = useAnimate();
  const [timeLeft, setTimeLeft] = useState(CalculateTimeDifference());

  const startAnimation = () => {
    animate(
      ".hero-heading",
      {
        opacity: [0, 1],
        x: [-20, 0],
      },
      {
        delay: stagger(0.1),
        ease: "easeInOut",
        duration: 0.6,
      },
    );

    animate(
      ".hero-subheading",
      {
        opacity: [0, 1],
        x: [20, 0],
      },
      {
        delay: stagger(0.1),
        ease: "easeInOut",
        duration: 0.5,
      },
    );

    animate(
      ".icon-and-info",
      {
        y: [-10, 0],
        opacity: [0, 1],
      },
      {
        type: "spring",
        stiffness: 150,
        damping: 10,
        duration: 0.8,
      },
    );

    animate(
      ".early-sale-button",
      {
        scale: [0.8, 1],
        opacity: [0, 1],
      },
      { duration: 0.7, ease: "easeOut" },
    );
    animate(
      ".bottom-content",
      {
        opacity: [0, 1],
      },
      {
        delay: 0.6,
        ease: "easeInOut",
      },
    );
    animate(
      ".hero-image-1",
      {
        y: [-30, 0],
      },
      {
        type: "spring",
        stiffness: 200,
        damping: 10,
        duration: 0.8,
      },
    );
    animate(
      ".hero-image-2",
      {
        x: [30, 0],
      },
      {
        type: "spring",
        stiffness: 150,
        damping: 10,
        duration: 0.8,
      },
    );
  };

  useEffect(() => {
    startAnimation();
    const timer = setInterval(() => {
      setTimeLeft(CalculateTimeDifference());
    }, 1000);
  }, []);

  return (
    <main
      ref={scope}
      className="pt-24 pb-12 lg:pt-18 lg:pb-0 bg-linear-to-br from-primary to-secondary overflow-hidden"
    >
      <Container className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-5 px-4 lg:px-0">
        <section className="text-white">
          <div className="flex flex-wrap justify-center lg:justify-start text-center lg:text-left">
            {heroHeading.split(" ").map((word, index) => (
              <span
                key={word + index}
                className="hero-heading text-4xl md:text-5xl lg:text-6xl font-bold inline-block"
              >
                {word}&nbsp;
              </span>
            ))}
          </div>
          <div className="mt-4 text-center lg:text-left">
            {heroSubheading.split(" ").map((word, index) => (
              <span
                key={word + index}
                className="hero-subheading text-neutral-300 font-semibold text-lg md:text-xl inline-block tracking-tight"
              >
                {word}&nbsp;
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-between text-neutral-200 gap-4 sm:gap-0">
            <IconAndInfo
              Icon={Calendar}
              className="icon-and-info text-lg font-medium"
            >
              March 15, 2026
            </IconAndInfo>
            <IconAndInfo
              Icon={MapPin}
              className="icon-and-info text-lg font-medium"
            >
              Palladium Conference Center, Pune
            </IconAndInfo>
          </div>
          <div className="text-center lg:text-left">
            <Button
              href="/register"
              className="early-sale-button mt-8 px-12 py-3 text-lg md:text-xl font-medium ring-1"
            >
              Secure Early Bird Ticket - Save 40%
            </Button>
          </div>
          <div className="flex justify-center lg:justify-start mt-4">
            <IconAndInfo
              Icon={Clock}
              className="early-sale-button bg-warning px-6 py-2 rounded-lg ring-1"
            >
              Early Bird Ends In:
              <span className="font-semibold">
                {` ${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
              </span>
            </IconAndInfo>
          </div>
          <div className="flex justify-center lg:justify-start mt-12 gap-6">
            <BottomOfHeroSectionContent
              Para1="2500+"
              Para2="Professionals Attended"
            />
            <BottomOfHeroSectionContent
              Para1="127"
              Para2="Early Birds Left"
            />
          </div>
        </section>

        <section className="relative mt-8 lg:mt-0 flex justify-center lg:block min-h-[300px] lg:min-h-auto">
          <div className="hero-image-1">
            <Image
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop/"
              alt="Conference Image"
              width={600}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="hero-image-2 absolute top-0">
            <Image
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop/"
              alt="Conference Image"
              width={600}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>
      </Container>
    </main>
  );
};

export default HeroSection;

const BottomOfHeroSectionContent = ({ Para1, Para2 }) => {
  return (
    <div className="bottom-content flex flex-col justify-center items-center">
      <span className="font-bold text-2xl">{Para1}</span>
      <span className="font-medium text-sm text-neutral-300">{Para2}</span>
    </div>
  );
};
