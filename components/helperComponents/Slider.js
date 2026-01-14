"use client";
import { useState } from "react";
import { motion } from "motion/react";
import MultipleScheduleCards from "./ScheduleCard";

const tracks = ["All tracks", "Leadership", "Innovation", "Networking"];

const Slider = () => {
  const [clicked, setClicked] = useState(0);

  const currentTrack = (idx) => {
    switch (idx) {
      case 0:
        return <MultipleScheduleCards />;
      case 1:
        return;
      case 2:
        return <MultipleScheduleCards />;
      case 3:
        return;

      default:
        break;
    }
  };
  return (
    <>
    <div className="mt-15 max-w-2xl mx-auto bg-background shadow-md border border-border flex items-center justify-between py-2.5 px-10 rounded-xl">
      {tracks.map((track, index) => (
        <h3
          onClick={() => setClicked(index)}
          className={`font-medium cursor-pointer transition-all duration-200 relative px-6 py-2 ${
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
    <div className="mt-10">{currentTrack(clicked)}</div>
    </>
  );
};

export default Slider;
