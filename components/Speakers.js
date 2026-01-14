import React from "react";
import Container from "./helperComponents/Container";
import SectionHeadingAndSubHeading from "./helperComponents/SectionHeadingAndSubHeading";
import SpeakerCarousel from "./helperComponents/SpeakerCarousel";

const Speakers = () => {
  return (
    <section
      id="speakers"
      className="bg-background"
    >
      <Container>
        <SectionHeadingAndSubHeading
          heading="World-Class Speakers"
          subHeading="Learn from industry pioneers and thought leaders"
        />
        <SpeakerCarousel />
      </Container>
    </section>
  );
};

export default Speakers;
