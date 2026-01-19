"use client";
import React from "react";
import Container from "./helperComponents/Container";
import SectionHeadingAndSubHeading from "./helperComponents/SectionHeadingAndSubHeading";
import {
  MapPin,
  Clock,
  Check,
  Plane,
  Train,
  Car,
  Map,
  ExternalLink,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Button from "./helperComponents/Button";

const LocationDetailsFunction = ({ Icon, h, sh }) => {
  return (
    <div className="flex gap-2">
      <div className="pt-1 bg-accent/20 p-1 rounded-full h-fit">
        <Icon
          size={16}
          color="var(--color-accent)"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-md font-semibold">{h}</span>
        <span className="text-sm text-neutral-500 tracking-wide">{sh}</span>
      </div>
    </div>
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
    desc: "Metro: 15 minutes from Pune International Airport",
    color: "blue",
    rgba: "rgba(0, 0, 255, 0.1)"
  },
  {
    icon: Car,
    desc: "Parking: Free parking available",
    color: "green",
    rgba: "rgba(0, 128, 0, 0.1)"
  },
  {
    icon: Plane,
    desc: "Airport: 15 minutes from Pune International Airport via taxi",
    color: "red",
    rgba: "rgba(255, 0, 0, 0.1)"
  },
];

const LocalHeading = ({ children }) => {
  return <div className="text-primary font-bold text-xl">{children}</div>;
};

const VenueInfoSection = () => {
  return (
    <section className="bg-surface border-b border-neutral-200">
      <Container>
        <SectionHeadingAndSubHeading
          heading="Venue Information"
          subHeading="Palladium Conference Center, Pune"
        />

        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-5 mt-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
            className="space-y-8 shadow-lg p-10 rounded-xl border border-neutral-200"
          >
            <div className="space-y-4">
              <LocalHeading>Location Details</LocalHeading>
              <LocationDetailsFunction
                Icon={MapPin}
                h="Palladium Conference Center"
                sh="Viman Nagar, Pune 411014"
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
                  <div
                    key={index}
                    className="flex items-center gap-2"
                  >
                    <div className="bg-green-100 p-0.5 rounded-sm">
                      <Check
                      size={16}
                      strokeWidth={3}
                      className="text-green-600"
                    />
                    </div>
                    <span className="text-neutral-500">{Amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <LocalHeading>Transportation</LocalHeading>
              <div className="space-y-2">
                {TransportationInfo.map((transport, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <div className="p-1 rounded-sm" style={{ backgroundColor: `${transport.rgba}` }}>
                      <transport.icon
                      size={18}
                      color={transport.color}
                    />
                    </div>
                    <span className="text-neutral-500 text-sm">
                      {transport.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            className="shadow-lg p-4 flex flex-col gap-4 rounded-xl border border-neutral-200"
          >
            <div>
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2940&auto=format&fit=crop"
                alt="Conference Image"
                width={500}
                height={500}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <Button
              href="/directions"
              className="flex items-center w-full py-2 justify-center gap-3"
            >
              <Map
                size={22}
              />
              <span className="text-xl font-semibold">Get Directions</span>
              <ExternalLink
                size={18}
              />
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default VenueInfoSection;
