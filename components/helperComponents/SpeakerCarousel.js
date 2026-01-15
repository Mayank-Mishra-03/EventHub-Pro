"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import MiniSpeakerCard from "./MiniSpeakerCard";
import SpeakerCard from "./SpeakerCard";

const speakerInfo = [
  {
    name: "Dr. Jane Smith",
    role: "CEO, TechVision",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop",
    desc: 'Former Google VP with 15+ years leading digital transformation initiatives. Author of "The Innovation Imperative".',
    career: "2 Books Published",
    accomplishment: "500k+ LinkedIn",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO, InnovateCorp",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop",
    desc: "Scaled engineering teams from 10 to 1000+ at three unicorn startups. Expert in agile transformation and team leadership.",
    career: " 50+ Conferences",
    accomplishment: "TED speaker",
  },
  {
    name: "Dr. Lisa Thompson",
    role: "Chief Strategy Officer, FutureLeaders",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Harvard MBA with expertise in organizational psychology and change management. Consultant to Fortune 100 companies.",
    career: "McKinsey Alum",
    accomplishment: "Harvard Faculty",
  },
  {
    name: "Sarah Chen",
    role: "Head of Ethics, GlobalData AI",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop",
    desc: 'Former Google VP with 15+ years leading digital transformation initiatives. Author of "The Innovation Imperative".',
    career: "2 Books Published",
    accomplishment: "AI reseacher",
  },
  {
    name: "David Park",
    role: "Lead Data Scientist, OpenTrust",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop",
    desc: 'Former Google VP with 15+ years leading digital transformation initiatives. Author of "The Innovation Imperative".',
    career: "OpenTrust",
    accomplishment: "MIT faculty",
  },
  {
    name: "Elena Rossi",
    role: "VP of People, RemoteFirst",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop",
    desc: 'Former Google VP with 15+ years leading digital transformation initiatives. Author of "The Innovation Imperative".',
    career: "4 Books Published",
    accomplishment: "500k+ LinkedIn",
  },
];

const SpeakerCarousel = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  return (
    <div className="max-w-5xl mx-auto mt-12 grid grid-cols-3 gap-20">
      {speakerInfo.map((speaker, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.2 }}
          key={index}
          onMouseEnter={() => setSelectedSpeaker(index)}
          onMouseLeave={() => setSelectedSpeaker(null)}
          className="relative"
        >
          <MiniSpeakerCard speaker={speaker} />
          <AnimatePresence>
            {selectedSpeaker === index && (
              <div className="absolute -top-20 -left-20 z-100">
                <SpeakerCard speaker={speaker} />
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default SpeakerCarousel;
