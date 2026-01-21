"use client";
import React from "react";
import Button from "./helperComponents/Button";
import { CheckCheck, IdCardIcon, RotateCcw } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    number: "87%",
    title: "Would Recommend",
  },
  {
    number: "34%",
    title: "Got Promoted",
  },
  {
    number: "$50K",
    title: "Avg Salary Increase",
  },
];
const paymentFeatures = [
  {
    icon: IdCardIcon,
    title: "Secure payment",
  },
  {
    icon: RotateCcw,
    title: "30-day refund policy",
  },
  {
    icon: CheckCheck,
    title: " Instant confirmation",
  },
];

const heading = "Ready to transform your Career?";
const subHeading =
  " Join 2,500+ professionals who are advancing their careers at EventHub Pro 2025";

const Transform = () => {
  return (
    <section className="bg-linear-to-br from-primary to-secondary">
      <div className="py-10 md:py-20 mx-auto max-w-3xl flex flex-col items-center gap-2 md:gap-4 md:px-0 px-4">
        <h3 className="text-white text-2xl md:text-3xl font-bold flex flex-wrap items-center justify-center">
          {heading.split(" ").map((word, index) => (
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.3 + index * 0.1,
              }}
              viewport={{once: true}}
              className="inline-block"
              key={index + word}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </h3>
        <p className="text-neutral-300 text-sm md:text-base font-medium flex flex-wrap items-center justify-center tracking-tight md:tracking-normal">
          {subHeading.split(" ").map((word, index) => (
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.3 + index * 0.1,
              }}
              viewport={{once: true}}
              className="inline-block"
              key={index + word}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "linear",
            delay: 1,
          }}
          viewport={{once: true}}
          className="flex justify-around gap-10 bg-[#3d61b3]/80 py-4 md:py-6 md:px-12 px-6 mt-4 md:mt-2 rounded-lg text-white w-full"
        >
          {stats.map((stat, index) => (
            <div
              className="flex flex-col items-center"
              key={index}
            >
              <span className="font-bold md:text-2xl text-xl">{stat.number}</span>
              <span className="md:text-sm text-xs text-neutral-300 text-center">{stat.title}</span>
            </div>
          ))}
        </motion.div>
        <Button
          href="/register"
          className="py-3 px-6 md:px-12 mt-3 hover:bg-orange-600 transition-all duration-200"
        >
          <span className="font-semibold text-md tracking-tight md:tracking-normal">
            Secure Your Spot - Early Bird Pricing
          </span>
        </Button>
        <div className="flex flex-col md:flex-row justify-around gap-1 md:gap-4 mt-2 md:mt-0">
          {paymentFeatures.map((feature, index) => (
            <div
              className="flex items-center text-neutral-300 text-xs gap-1"
              key={index}
            >
              <span>
                <feature.icon size={14} />
              </span>
              <span>{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transform;
