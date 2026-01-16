import React from "react";
import { Check } from "lucide-react";
import Button from "./Button";

const TierCard = ({ tier }) => {
  return (
    <div
      tabIndex={0}
      className="shadow-lg border-2 border-neutral-200 flex flex-col items-center justify-between gap-3.5 rounded-lg py-6 h-100 focus:ring focus:ring-accent"
    >
      <div>
        <h1 className="text-primary text-xl font-bold">{tier.title}</h1>
        <h2 className="text-primary text-4xl font-bold">
          ${tier.reducedPrice}
        </h2>
        <h5 className="text-neutral-500 text-sm line-through">
          ${tier.originalPrice}
        </h5>
        <h3 className="text-green-500 text-sm font-semibold">
          Save ${tier.savings}
        </h3>
        <div className="space-y-2">
          {tier.benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-2"
            >
              <Check
                size={16}
                strokeWidth={3}
                className="text-green-600"
              />
              <p className="text-md text-neutral-600">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
      <Button
        href="/register"
        className="py-2 px-18"
      >
        <span className="font-semibold">Select {tier.title}</span>
      </Button>
    </div>
  );
};

export default TierCard;
