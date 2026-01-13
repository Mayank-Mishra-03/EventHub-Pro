"use client";
import React from "react";
import { motion } from "motion/react";

const SectionHeadingAndSubHeading = ({ heading, subHeading }) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
      <div className="flex">
        {heading.split(" ").map((word, index) => (
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={word + index}
            className="text-3xl font-bold text-primary"
          >
            {word}&nbsp;
          </motion.h1>
        ))}
      </div>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-0.5 bg-primary w-full mt-2"
      ></motion.div>

      <div className="flex flex-wrap mt-3 items-center justify-center">
        {subHeading.split(" ").map((word, index) => (
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            key={word + index}
            className="text-xl text-text-secondary"
          >
            {word}&nbsp;
          </motion.h1>
        ))}
      </div>
    </div>
  );
};

export default SectionHeadingAndSubHeading;
