"use client";
import { useState } from "react";
import { motion } from "motion/react";
import MultipleScheduleCards from "./ScheduleCard";
import SpeakerCarousel from "./SpeakerCarousel";

const tracks = ["All tracks", "Leadership", "Innovation", "Networking"];

const Slider = () => {
  const [clicked, setClicked] = useState(0);

  const currentTrack = (idx) => {
    switch (idx) {
      case 0:
        return <MultipleScheduleCards />;
      case 1:
        return <SpeakerCarousel />;
      case 2:
        return <MultipleScheduleCards />;
      case 3:
        return <SpeakerCarousel />;

      default:
        break;
    }
  };
  return (
    <>
      <div className="mt-9 md:mt-15 w-full max-w-2xl mx-auto bg-background shadow-md border border-border flex flex-wrap items-center justify-center md:justify-between gap-y-2 py-2.5 px-2 md:px-10 rounded-xl">
        {tracks.map((track, index) => (
          <h3
            onClick={() => setClicked(index)}
            className={`font-medium cursor-pointer transition-all duration-200 relative px-3 md:px-6 py-2 text-sm md:text-base ${
              clicked === index
                ? "text-white"
                : "text-neutral-500 hover:text-primary"
            }`}
            key={index}
          >
            <span className="relative z-10">{track}</span>
            {clicked === index && (
              <motion.div
                layoutId="clicked"
                className="bg-accent w-full h-full absolute inset-0 rounded-xl"
              ></motion.div>
            )}
          </h3>
        ))}
      </div>
      <div className="mt-5 md:mt-10">{currentTrack(clicked)}</div>
    </>
  );
};

export default Slider;
