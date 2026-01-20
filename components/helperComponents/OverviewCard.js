import React from "react";
import { motion } from "motion/react";

const OverviewCard = ({ Icon, Title, AdditionalInfo, Idx }) => {
  return (
    <motion.div
      initial={{ scale: 0.95, boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
      whileInView={{ scale: 1, boxShadow: "0px 15px 15px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.5, ease: "linear", delay: 0.3 + Idx * 0.5 }}
      className="flex flex-col items-center justify-center gap-2 p-4 md:gap-6 md:py-16 rounded-lg hover:scale-105 transition-all duration-300 border border-neutral-200 md:border-0"
    >
      <div className="bg-accent rounded-full p-2 md:p-5">
        {Icon && <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />}
      </div>
      <h3 className="font-bold text-base md:text-2xl text-primary">{Title}</h3>
      <p className="text-xs md:text-base text-neutral-500 text-center">
        {AdditionalInfo}
      </p>
    </motion.div>
  );
};

export default OverviewCard;
