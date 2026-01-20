import { Star } from "lucide-react";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

const ReviewSectionCard = ({ person }) => {
  return (
    <div className="w-72 md:w-96 lg:w-110 h-auto min-h-[180px] p-2 md:px-4 md:py-4 shadow-md border border-neutral-200 filter grayscale-75 opacity-80 hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 rounded-lg">
      <div className="flex items-center justify-start gap-2.5">
        <Image
          src={person.image}
          alt={person.name}
          height={30}
          width={30}
          className="h-8 w-8 md:h-12 md:w-12 rounded-full object-cover"
        />
        <div>
          <h2 className="font-bold text-sm md:text-base text-primary">{person.name}</h2>
          <p className="font-medium text-xs md:text-sm text-neutral-500 tracking-wide">
            {person.role}
          </p>
        </div>
      </div>
      <p
        className={`text-xs md:text-sm mt-2 ${roboto.className}`}
      >{`"${person.message}"`}</p>
      <div className="flex items-center mt-3">
        {[...Array(person.starCount)].map((_, index) => (
          <Star
            size={16}
            fill="gold"
            key={index}
            className="text-amber-300"
          />
        ))}
        <h6 className="md:text-xs text-[0.6rem] text-neutral-500 ml-2">{person.value}</h6>
      </div>
    </div>
  );
};

export default ReviewSectionCard;
