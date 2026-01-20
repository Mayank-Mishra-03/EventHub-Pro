"use client";
import Image from "next/image";
import { motion } from "motion/react";

const SpeakerCard = ({ speaker }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="p-3 flex flex-col gap-3 w-full max-w-[90vw] md:w-80 rounded-lg z-50 bg-white shadow-xl border border-neutral-200"
    >
      <div>
        <Image
          src={speaker.image}
          alt={speaker.name}
          width={300}
          height={300}
          className="h-50 w-100 object-cover rounded-t-lg"
        />
      </div>
      <h2 className="font-bold text-lg text-primary tracking-wide">
        {speaker.name}
      </h2>
      <h3 className="text-md text-accent tracking-tight font-semibold">
        {speaker.role}
      </h3>
      <p className="text-neutral-500 text-md">{speaker.desc}</p>
      <div className="text-sm text-neutral-500 flex items-center justify-between">
        <span>{speaker.career}</span>
        <span>{speaker.accomplishment}</span>
      </div>
    </motion.div>
  );
};
export default SpeakerCard;
