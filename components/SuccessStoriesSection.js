"use client";
import React from "react";
import Container from "./helperComponents/Container";
import ReviewSectionCard from "./helperComponents/ReviewSectionCard";
import Marquee from "react-fast-marquee";
import { motion } from "motion/react";

const reviewMessages = [
  {
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop",
    name: "James Wilson",
    role: "Senior Director, Microsoft",
    message:
      "The networking opportunities at EventHub Pro directly led to my promotion to Senior Director. The insights from the leadership panel changed how I approach team management.",
    value: "Promoted within 3 months",
    starCount: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop",
    name: "Maria Garcia",
    role: "VP of Innovation, StartupX",
    message:
      "I connected with my current co-founder during the networking lunch. EventHub Pro literally changed the trajectory of my career and led to a successful $10M Series A.",
    starCount: 4,
  },
  {
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop",
    name: "David Chen",
    role: "Head of Engineering, Fintech Solutions",
    message:
      "The deep-dive workshop on scalable architecture provided the exact blueprint we needed to migrate our legacy systems. It saved our team months of trial and error.",
    value: "Saved 400+ development hours",
    starCount: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop",
    name: "Sarah Jenkins",
    role: "Product Lead, Google",
    message:
      "Rarely do you find a conference where the hallway conversations are as valuable as the keynote speeches. The caliber of attendees at EventHub Pro is unmatched.",
    value: "Expanded professional network by 50+",
    starCount: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop",
    name: "Marcus Thorne",
    role: "Founder, GreenTech Innovations",
    message:
      "I pitched my MVP during the 'Rapid Fire' session and walked away with three follow-up meetings from Angel Investors. This event is a catalyst for growth.",
    value: "Secured $250k in seed funding",
    starCount: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=2787&auto=format&fit=crop",
    name: "Elena Rodriguez",
    role: "Marketing Director, Creative Flow",
    message:
      "The AI in Marketing masterclass was eye-opening. We implemented the automation strategies the following week and saw an immediate 20% jump in ROI.",
    value: "20% ROI Increase",
    starCount: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop",
    name: "Kevin Park",
    role: "Cybersecurity Analyst, SecureNet",
    message:
      "The hands-on labs were intense and highly practical. I learned more about zero-trust architecture in two days here than I did in a semester of online courses.",
    value: "Earned advanced certification",
    starCount: 4,
  },
  {
    image:
      "https://images.unsplash.com/photo-1598550874175-4d0fe4a2c90d?q=80&w=2787&auto=format&fit=crop",
    name: "Aisha Khan",
    role: "HR Strategist, Global Talent Corp",
    message:
      "Networking isn't just about business deals; it's about people. I found my current mentor at EventHub Pro, and her guidance has been career-defining.",
    value: "Found executive mentorship",
    starCount: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop",
    name: "Robert Miller",
    role: "Operations Manager, Amazon",
    message:
      "The logistics track was incredibly detailed. I brought back three specific efficiency frameworks that we've already integrated into our regional warehouse.",
    value: "15% Operational efficiency gain",
    starCount: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop",
    name: "Linda Wu",
    role: "UX Designer, Freelance",
    message:
      "As a freelancer, staying connected is hard. EventHub Pro gave me the community I was missing and helped me land two high-ticket long-term contracts.",
    value: "Signed 2 annual contracts",
    starCount: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=2799&auto=format&fit=crop",
    name: "Thomas Wright",
    role: "Chief Technology Officer, EduTech",
    message:
      "The executive roundtable on data privacy was the highlight. It was refreshing to discuss high-level challenges with peers who are facing the same hurdles.",
    value: "Refined data security policy",
    starCount: 4,
  },
  {
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2788&auto=format&fit=crop",
    name: "Sophie Bennett",
    role: "Sales Executive, Salesforce",
    message:
      "The energy at this event is infectious. I closed a deal during the closing cocktail hour that had been stalled for six months. This environment makes things happen.",
    value: "Closed $50k deal on-site",
    starCount: 5,
  },
];

const marqueeVariants = [
  {
    speed: 50,
    direction: "right",
  },
  {
    speed: 70,
    direction: "left",
  },
  {
    speed: 60,
    direction: "right",
  },
  {
    speed: 80,
    direction: "left",
  },
];

const SuccessStoriesSection = () => {
  return (
    <section className="bg-surface border-b border-neutral-200">
      <Container className="mask-x-from-85% to-100% relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-50 pointer-events-none">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 bg-primary w-full"
          ></motion.div>
          <span className="text-3xl font-bold text-primary">
            Success Stories
          </span>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-0.5 bg-primary w-full "
          ></motion.div>
        </div>
        <div className="space-y-8">
          {marqueeVariants.map((marquee, index) => (
            <Marquee
              key={index}
              speed={marquee.speed}
              direction={marquee.direction}
              pauseOnHover
              className="overflow-hidden"
            >
              {reviewMessages.map((review, index) => (
                <div
                  key={index + review}
                  className="mx-2"
                >
                  <ReviewSectionCard person={review} />
                </div>
              ))}
            </Marquee>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SuccessStoriesSection;
