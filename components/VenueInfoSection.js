"use client";
import React from "react";
import Container from "./helperComponents/Container";
import SectionHeadingAndSubHeading from "./helperComponents/SectionHeadingAndSubHeading";
import { MapPin, Clock, Check, Plane, Train, Car } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Button from "./helperComponents/Button";

const LocationDetailsFunction = ({ Icon, h, sh }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 15 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex gap-2"
    >
      <div className="pt-1">
        <Icon
          size={20}
          color="var(--color-accent)"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-md font-semibold">{h}</span>
        <span className="text-sm text-neutral-500 tracking-wide">{sh}</span>
      </div>
    </motion.div>
  );
};

const AmenitiesInfo = [
  "Free Wifi",
  "Parking Available",
  "Wheelchair Accessible",
  "Catering Provided",
  "Gender-Neutral Restrooms",
  "On-site Security",
];

const TransportationInfo = [
  {
    icon: Train,
    desc: "Subway: 2 blocks from Times Square Station",
  },
  {
    icon: Car,
    desc: "Parking: $25/day in attached garage",
  },
  {
    icon: Plane,
    desc: "Airport: 45 minutes from JFK via taxi",
  },
];

const LocalHeading = ({ children }) => {
  return (
    <div className="text-primary font-bold text-xl flex items-center">
      {children.split("").map((letter, index) => (
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duratio: 0.3, ease: "easeInOut", delay: index * 0.05 }}
          viewport={{ once: true }}
          key={index + letter}
        >
          {letter}
        </motion.h2>
      ))}
    </div>
  );
};

const VenueInfoSection = () => {
  return (
    <section className="bg-surface border-b border-neutral-200">
      <Container>
        <SectionHeadingAndSubHeading
          heading="Venue Information"
          subHeading="Palladium Conference Center, Pune"
        />

        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-2 mt-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <LocalHeading>Location&nbsp;Details</LocalHeading>
              <LocationDetailsFunction
                Icon={MapPin}
                h="Grand Convention Center"
                sh="123 Business Avenue, Manhattan, NY 10001"
              />
              <LocationDetailsFunction
                Icon={Clock}
                h="Event Hours"
                sh="9:00 AM - 6:00 PM EST"
              />
            </div>
            <div className="space-y-4">
              <LocalHeading>Amenities</LocalHeading>
              <div className="grid grid-cols-2 gap-y-2">
                {AmenitiesInfo.map((Amenity, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    key={index}
                    className="flex items-center gap-2"
                  >
                    <Check
                      size={16}
                      strokeWidth={3}
                      className="text-green-600"
                    />
                    <span className="text-neutral-500">{Amenity}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <LocalHeading>Transportation</LocalHeading>
              <div className="space-y-2">
                {TransportationInfo.map((transport, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <transport.icon
                      size={18}
                      color="var(--color-slate-700)"
                    />
                    <span className="text-neutral-500 text-sm">
                      {transport.desc}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="shadow-lg p-4 flex flex-col items-center gap-4">
            <div className="relative">
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2940&auto=format&fit=crop"
                  alt="Conference Image"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
            <Button
              href="/directions"
              className="font-semibold px-40 py-3 w-full"
            >
              Get Directions
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VenueInfoSection;
