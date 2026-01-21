import React from "react";
import Image from "next/image";

const MiniSpeakerCard = ({ speaker }) => {
  return (
    <>
    <div className="md:hidden flex p-2 gap-4 shadow-md rounded-lg">
      <div>
        <Image
          src={speaker.image}
          alt="speaker"
          height={300}
          width={300}
          className="h-25 w-25 object-cover rounded-lg"
        />
      </div>
      <div>
        <h2 className="font-bold text-primary tracking-wide md:text-lg text-md">
          {speaker.name}
        </h2>
        <p className="md:text-sm text-xs font-medium text-neutral-500 tracking-tight">
          {speaker.role}
        </p>
      </div>
    </div>

    <div
    className="hidden md:block relative border-2 border-dashed border-neutral-200 p-2 rounded-full h-22">
      <div>
        <Image
          src={speaker.image}
          alt="speaker"
          height={300}
          width={300}
          className="h-30 w-30 object-cover rounded-full absolute -top-0.5 -left-10"
        />
      </div>
      <div className="ml-22">
        <h2 className="font-bold text-primary tracking-wide md:text-lg text-md">
          {speaker.name}
        </h2>
        <p className="md:text-sm text-xs font-medium text-neutral-500 tracking-tight">
          {speaker.role}
        </p>
      </div>
    </div>
    </>
  );
};

export default MiniSpeakerCard;
