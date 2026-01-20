import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const MiniSpeakerCard = ({ speaker }) => {
  return (
    <div className="flex p-2 gap-4 shadow-md rounded-lg">
      <motion.div>
        <Image
          src={speaker.image}
          alt="speaker"
          height={300}
          width={300}
          className="md:h-30 md:w-30 h-25 w-25 object-cover rounded-lg"
        />
      </motion.div>
      <div>
        <h2 className="font-bold text-primary tracking-wide md:text-lg text-md">
          {speaker.name}
        </h2>
        <p className="md:text-sm text-xs font-medium text-neutral-500 tracking-tight">
          {speaker.role}
        </p>
      </div>
    </div>
  );
};

export default MiniSpeakerCard;
