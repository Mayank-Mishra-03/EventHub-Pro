"use client";
import { useState } from "react";
import Container from "./helperComponents/Container";
import { motion } from "motion/react";
import OverviewCard from "./helperComponents/OverviewCard";
import { ClockArrowDown, LayoutGrid, Users2 } from "lucide-react";

const heading = "Why EventHub Pro 2025?";
const subHeading =
  "Transform your career trajectory with exclusive insights, strategic networking, and actionable knowledge from industry pioneers.";
const OverviewData = [
  {
    Icon: ClockArrowDown,
    Title: "Exclusive Industry Insights",
    AdditionalInfo:
      "Access cutting-edge strategies and trends directly from Fortune 500 executives and industry disruptors",
  },
  {
    Icon: Users2,
    Title: "C-Level Networking",
    AdditionalInfo:
      "Connect with 500+ senior executives, entrepreneurs, and decision-makers in structured networking sessions.",
  },
  {
    Icon: LayoutGrid,
    Title: "Actionable Takeaways",
    AdditionalInfo:
      "Leave with concrete strategies, tools, and frameworks you can implement immediately for career advancement.",
  },
];

const Overview = () => {
  return (
    <section
      id="overview"
      className="bg-background min-h-screen"
    >
      <Container className="py-20">
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

        <div className="grid grid-cols-3 gap-10 mt-10">
          {OverviewData.map((item, index) => (
            <OverviewCard
              key={index}
              Idx={index}
              Icon={item.Icon}
              Title={item.Title}
              AdditionalInfo={item.AdditionalInfo}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Overview;
