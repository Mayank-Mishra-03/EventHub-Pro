import React from "react";
import Container from "./helperComponents/Container";
import SectionHeadingAndSubHeading from "./helperComponents/SectionHeadingAndSubHeading";
import Slider from "./helperComponents/Slider";
import { MultipleScheduleCards } from "./helperComponents/ScheduleCard";

const heading = "Event Schedule";
const subHeading = "Carefully curated sessions designed for maximum impact";
const Schedule = () => {
  return (
    <section
      id="schedule"
      className="bg-surface min-h-screen"
    >
      <Container className="py-20">
        <SectionHeadingAndSubHeading
          heading={heading}
          subHeading={subHeading}
        />

        <Slider />
        <div className="mt-10">
          <MultipleScheduleCards />
        </div>
      </Container>
    </section>
  );
};

export default Schedule;
