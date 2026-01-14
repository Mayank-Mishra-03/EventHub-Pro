"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const EventInfo = [
  {
    id: 1,
    time: "9:00 AM",
    title: "Opening Keynote: The Future of Leadership",
    content:
      "Discover how AI and digital transformation are reshaping executive decision-making and team dynamics.",
    speaker: [
      {
        name: "Dr. Jane Smith",
        role: "CEO of TechVision",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop",
      },
    ],
  },
  {
    id: 2,
    time: "10:30 AM",
    title: "Panel: Scaling Innovation in Enterprise",
    content:
      "Learn from Fortune 500 CTOs about building innovation cultures and managing digital transformation at scale.",
    speaker: [
      {
        name: "Dr. Jane Smith",
        role: "CEO, TechVision",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop",
      },
      {
        name: "Marcus Rodriguez",
        role: "CTO, InnovateCorp",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop",
      },
      {
        name: "Dr. Lisa Thompson",
        role: "Chief Strategy Officer, FutureLeaders",
        image:
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
  },
  {
    id: 3,
    time: "1:30 PM",
    title: "Workshop: Building Ethical AI Frameworks",
    content:
      "A hands-on session focusing on practical implementation of bias detection and transparency in machine learning models.",
    speaker: [
      {
        name: "Sarah Chen",
        role: "Head of Ethics, GlobalData AI",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop",
      },
      {
        name: "David Park",
        role: "Lead Data Scientist, OpenTrust",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop",
      },
    ],
  },
  {
    id: 4,
    time: "3:30 PM",
    title: "The Future of Remote Work & Global Talent",
    content:
      "Exploring the shift toward asynchronous workflows and how to manage high-performing distributed engineering teams.",
    speaker: [
      {
        name: "Elena Rossi",
        role: "VP of People, RemoteFirst",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop",
      },
    ],
  },
];

const ScheduleCard = ({ event }) => {
  const [isOpened, setisOpened] = useState(false);
  let speakerName;
  if (event.speaker.length > 1) {
    speakerName = `${event.speaker.length} Industry Leaders`;
  } else {
    speakerName = `${event.speaker[0].name}, ${event.speaker[0].role}`;
  }
  return (
    <>
      <motion.div
        layout
        onClick={() => setisOpened(!isOpened)}
        layoutId={`container-${event.id}`}
        className="bg-background shadow-md px-6 py-4 flex items-start justify-between overflow-hidden"
      >
        <div className="w-1/6 flex flex-col">
          <motion.span
            layoutId={`hour-${event.id}`}
            className="font-bold text-2xl text-primary leading-none"
          >
            {event.time.split(" ")[0]}
          </motion.span>
          <motion.span
            layoutId={`period-${event.id}`}
            className="text-neutral-500"
          >
            {event.time.split(" ")[1]}
          </motion.span>
        </div>

        <div className="w-2/3">
          <motion.h3
            layout
            className="font-semibold text-xl text-primary"
          >
            {event.title}
          </motion.h3>
          <AnimatePresence>
            {isOpened && (
              <motion.div
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  transition: {
                    height: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2, delay: 0.1 },
                  },
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  transition: { duration: 0.3, delay: 0.1 },
                }}
                className="overflow-hidden"
              >
                <p className="text-md text-neutral-500 mt-2">{event.content}</p>

                <div className="flex mt-5 items-center">
                  {event.speaker.map((speaker, idx) => (
                    <motion.div
                      key={idx}
                      layout
                      className="flex items-center"
                      style={{ transform: `translateX(-${idx * 0.5}rem)` }}
                    >
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        width={30}
                        height={30}
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                    </motion.div>
                  ))}
                  <motion.h4
                    layout
                    className="text-sm font-medium ml-2"
                  >
                    {speakerName}
                  </motion.h4>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="w-1/6 flex justify-end">
          <motion.div
            layout
            animate={{ rotate: isOpened ? -180 : 0 }}
            transition={{ duration: 0.2 }}
            className="hover:bg-accent/10 cursor-pointer p-2 rounded-full"
          >
            <ArrowDown
              strokeWidth={3}
              size={20}
              className="text-accent"
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

const MultipleScheduleCards = () => {
  return (
    <div className="space-y-4">
      {EventInfo.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
        >
          <ScheduleCard event={event} />
        </motion.div>
      ))}
    </div>
  );
};

export default MultipleScheduleCards;
