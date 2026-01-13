"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUp, ArrowDown } from "lucide-react";
import Image from "next/image";

const EventInfo = [
  {
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
      {!isOpened ? (
        <motion.div
          layoutId={event.title}
          className="bg-background shadow-md px-6 py-4 flex items-center justify-between"
        >
          <div className="w-1/6">
            <span className="font-bold text-2xl text-primary">
              {event.time.split(" ")[0]}
            </span>
            &nbsp;
            <span className="text-neutral-500">{event.time.split(" ")[1]}</span>
          </div>
          <div className="w-2/3 font-semibold text-xl text-primary">
            {event.title}
          </div>
          <div className="w-1/6 flex justify-end">
            <div
              onClick={() => setisOpened(true)}
              className="hover:bg-accent/10 cursor-pointer p-2 rounded-full"
            >
              <ArrowDown
                strokeWidth={3}
                size={20}
                className="text-accent"
              />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          layoutId={event.title}
          className="bg-background shadow-md px-6 py-4 flex items-center justify-between"
        >
          <div className="w-1/6 flex flex-col items-start ">
            <span className="font-bold text-2xl text-primary">
              {event.time.split(" ")[0]}
            </span>
            <span className="text-neutral-500">{event.time.split(" ")[1]}</span>
          </div>
          <div className="w-2/3">
            <h3 className="font-semibold text-xl text-primary">
              {event.title}
            </h3>
            <p className="text-md text-neutral-500">{event.content}</p>
            <div className="flex mt-5 items-center">
              {event.speaker.map((speaker, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex items-center"
                    style={{ transform: `translateX(-${idx}rem)` }}
                  >
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={30}
                      height={30}
                      className="w-10 h-10 rounded-full mr-2 object-cover border-2 border-white"
                    />
                  </div>
                );
              })}
              <h4 className="text-sm font-medium">{speakerName}</h4>
            </div>
          </div>
          <div className="w-1/6 flex justify-end">
            <div
              onClick={() => setisOpened(false)}
              className="hover:bg-accent/10 cursor-pointer p-2 rounded-full"
            >
              <ArrowUp
                strokeWidth={3}
                size={20}
                className="text-accent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

const MultipleScheduleCards = () => {
  return (
    <div className="space-y-4">
      {EventInfo.map((event, index) => (
        <ScheduleCard event={event} />
      ))}
    </div>
  );
};

export { ScheduleCard, MultipleScheduleCards };
