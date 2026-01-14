import React from "react";
import Container from "./helperComponents/Container";
import SectionHeadingAndSubHeading from "./helperComponents/SectionHeadingAndSubHeading";
import SpeakerCard from "./helperComponents/SpeakerCard";

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
<SpeakerCard/>

      </Container>
    </section>
  );
};

export default Speakers;
