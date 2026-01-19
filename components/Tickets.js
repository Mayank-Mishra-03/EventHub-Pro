"use client";
import { useEffect, useState } from "react";
import Container from "./helperComponents/Container";
import SectionHeadingAndSubHeading from "./helperComponents/SectionHeadingAndSubHeading";
import CalculateTimeDifference from "./helperComponents/CountdownTimer";
import { Flame, ShieldCheck, RefreshCcw } from "lucide-react";
import { motion } from "motion/react";
import TierCard from "./helperComponents/TierCard";

const tierCardDetails = [
  {
    title: "Standard",
    reducedPrice: 299,
    originalPrice: 499,
    savings: 200,
    benefits: [
      "Full conference access",
      "Digital resource library",
      "Networking app access",
    ],
  },
  {
    title: "Premium",
    reducedPrice: 449,
    originalPrice: 749,
    savings: 300,
    benefits: [
      "Everything in Standard",
      "VIP networking lunch",
      "Priority seating",
      "Exclusive workshop access",
    ],
  },
  {
    title: "VIP",
    reducedPrice: 699,
    originalPrice: 1199,
    savings: 500,
    benefits: [
      "Everything in Premium",
      "Speaker meet & greet",
      "1-on-1 coaching session",
      "Exclusive dinner invitation",
    ],
  },
];

const Tickets = () => {
  const [timeLeft, setTimeLeft] = useState(CalculateTimeDifference());

  useEffect(() => {
    const timer = setInterval(
      () => {
        setTimeLeft(CalculateTimeDifference());
      },
      24 * 60 * 60,
    );
  }, []);

  return (
    <section
      id="tickets"
      className="bg-background border-b border-neutral-200"
    >
      <Container>
        <SectionHeadingAndSubHeading
          heading="Choose Your Experience"
          subHeading={`Early bird pricing ends in ${timeLeft.days} days`}
        />

        <div className="flex justify-center mt-3">
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            className="bg-warning flex px-3 py-2 rounded-lg"
          >
            <Flame
              fill="gold"
              size={20}
              className="text-amber-600"
            />
            <span className="text-white text-sm font-medium">
              Only 127 early-bird tickets remaining
            </span>
          </motion.button>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6 mt-16 relative">
          {tierCardDetails.map((tier, index) => (
            <motion.div
              initial={{ y: -10, borderColor: "var(--color-accent)" }}
              whileInView={{ y: 0, borderColor: "rgba(0,0,0,0)" }}
              transition={{ duration: 1, delay: 0.5 + index * 0.5 }}
              key={index}
              className="border rounded-lg"
            >
              <TierCard tier={tier} />
            </motion.div>
          ))}
          <motion.span
            initial={{ y: -10 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="bg-accent text-white text-xs p-2 rounded-full font-semibold absolute -top-4 right-116"
          >
            Most Popular
          </motion.span>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <div className="flex items-center gap-1 text-sm text-neutral-500 font-medium">
            <ShieldCheck size={16} />
            Secure Payment
          </div>
          <div className="flex items-center gap-1 text-sm text-neutral-500 font-medium">
            <RefreshCcw size={14} />
            30-Refund Policy
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Tickets;
