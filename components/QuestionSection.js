"use client";
import { useState } from "react";
import Container from "./helperComponents/Container";
import SectionHeadingAndSubHeading from "./helperComponents/SectionHeadingAndSubHeading";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDown } from "lucide-react";

const QuestionAndAnswer = [
  {
    question: "What's included in my ticket?",
    answer:
      "All tickets include access to keynotes, panels, networking sessions, digital resources, and the networking app. Premium and VIP tickets include additional perks like exclusive lunches and speaker meet-and-greets.",
  },
  {
    question: "Can I get a refund if I can't attend?",
    answer:
      "Yes, we offer a full refund up to 30 days before the event. After that, tickets can be transferred to a colleague or you can access virtual content for 50% of sessions.",
  },
  {
    question: "Will sessions be recorded?",
    answer:
      "Select keynote sessions will be recorded and available to all attendees for 90 days post-event. Networking sessions and workshops are live-only to encourage participation.",
  },
  {
    question: "How does networking work?",
    answer:
      "Our networking app matches you with relevant professionals based on your interests and goals. We also have structured networking breaks, roundtable discussions, and industry-specific meetups throughout the day.",
  },
  {
    question: "Who should attend this event?",
    answer:
      "This event is ideal for professionals, founders, managers, and students who want to learn from industry leaders, expand their network, and stay ahead of emerging trends.",
  },
  {
    question: "Is there a virtual attendance option?",
    answer:
      "Yes, we offer a virtual pass that includes live-streamed keynotes, select panels, and access to recorded sessions after the event.",
  },
  {
    question: "Do I need to install any apps before attending?",
    answer:
      "Yes, we recommend downloading our event networking app before arrival to manage your schedule, connect with attendees, and receive real-time updates.",
  },
  {
    question: "Will I receive a certificate of attendance?",
    answer:
      "Yes, all attendees will receive a digital certificate of attendance after the event, which can be shared on LinkedIn or included in your professional portfolio.",
  },
];

const IndividualQuestionCard = ({ query }) => {
  const [isOpened, setisOpened] = useState(false);
  return (
    <motion.div
      layout
      onClick={() => setisOpened(!isOpened)}
      className="bg-background shadow-md px-6 py-3 md:py-4 flex items-start justify-between overflow-hidden"
    >
      <div className="w-5/6">
        <motion.h3
          layout
          className="font-semibold text-lg md:text-xl text-primary tracking-tight md:tracking-normal"
        >
          {query.question}
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
              <p className="text-base text-neutral-500 mt-2">{query.answer}</p>
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
  );
};

const QuestionSection = () => {
  return (
    <section className="bg-background border-b border-neutral-200">
      <Container>
        <SectionHeadingAndSubHeading
          heading="Frequently Asked Questions"
          subHeading="Everything you need to know about EventHub Pro 2026"
        />
        <div className="space-y-4 mt-12 md:mt-16 max-w-5xl mx-auto">
          {QuestionAndAnswer.map((query, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              viewport={{ once: true }}
            >
              <IndividualQuestionCard query={query} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default QuestionSection;
