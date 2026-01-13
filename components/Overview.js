"use client";
import Container from "./helperComponents/Container";
import OverviewCard from "./helperComponents/OverviewCard";
import { ClockArrowDown, LayoutGrid, Users2 } from "lucide-react";
import SectionHeadingAndSubHeading from "./helperComponents/SectionHeadingAndSubHeading";

const heading = "Why EventHub Pro 2026?";
const subHeading =
  "Transform your career trajectory with exclusive insights, strategic networking, and actionable knowledge from industry pioneers.";
const OverviewData = [
  {
    Icon: ClockArrowDown,
    Title: "Exclusive Industry Insights",
    AdditionalInfo:
      "Access cutting-edge strategies and trends directly from Fortune 500 executives and industry disruptors",
  },
  {
    Icon: Users2,
    Title: "C-Level Networking",
    AdditionalInfo:
      "Connect with 500+ senior executives, entrepreneurs, and decision-makers in structured networking sessions.",
  },
  {
    Icon: LayoutGrid,
    Title: "Actionable Takeaways",
    AdditionalInfo:
      "Leave with concrete strategies, tools, and frameworks you can implement immediately for career advancement.",
  },
];

const Overview = () => {
  return (
    <section
      id="overview"
      className="bg-background min-h-screen border-b border-neutral-200"
    >
      <Container className="py-20">
        <SectionHeadingAndSubHeading
          heading={heading}
          subHeading={subHeading}
        />

        <div className="grid grid-cols-3 gap-10 mt-10">
          {OverviewData.map((item, index) => (
            <OverviewCard
              key={index}
              Idx={index}
              Icon={item.Icon}
              Title={item.Title}
              AdditionalInfo={item.AdditionalInfo}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Overview;
