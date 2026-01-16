"use client";
import React from "react";
import Button from "./helperComponents/Button";
import { CheckCheck, IdCardIcon, RotateCcw } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    number: "87%",
    title: "Would Recommend",
  },
  {
    number: "34%",
    title: "Got Promoted",
  },
  {
    number: "$50K",
    title: "Avg Salary Increase",
  },
];
const paymentFeatures = [
  {
    icon: IdCardIcon,
    title: "Secure payment",
  },
  {
    icon: RotateCcw,
    title: "30-day refund policy",
  },
  {
    icon: CheckCheck,
    title: " Instant confirmation",
  },
];

const heading = "Ready to transform your Career?";
const subHeading =
  " Join 2,500+ professionals who are advancing their careers at EventHub Pro 2025";

const Transform = () => {
  return (
    <section className="bg-linear-to-br from-primary to-secondary">
      <div className="py-20 mx-auto max-w-3xl flex flex-col items-center gap-4">
        <h3 className="text-white text-3xl font-bold">
          {heading.split(" ").map((word, index) => (
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.3 + index * 0.1,
              }}
              className="inline-block"
              key={index + word}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </h3>
        <p className="text-neutral-300 font-medium">
          {subHeading.split(" ").map((word, index) => (
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.3 + index * 0.1,
              }}
              className="inline-block"
              key={index + word}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "linear",
            delay: 1,
          }}
          className="flex justify-around gap-10 bg-[#3d61b3]/80 py-6 px-12 mt-2 rounded-lg text-white w-full"
        >
          {stats.map((stat, index) => (
            <div
              className="flex flex-col items-center"
              key={index}
            >
              <span className="font-bold text-2xl">{stat.number}</span>
              <span className="text-sm text-neutral-300">{stat.title}</span>
            </div>
          ))}
        </motion.div>
        <Button
          href="/register"
          className="py-3 px-12 mt-3 hover:bg-orange-600 transition-all duration-200"
        >
          <span className="font-semibold text-md">
            Secure Your Spot - Early Bird Pricing
          </span>
        </Button>
        <div className="flex justify-around gap-2">
          {paymentFeatures.map((feature, index) => (
            <div
              className="flex items-center text-neutral-300 text-xs gap-1"
              key={index}
            >
              <span>
                <feature.icon size={14} />
              </span>
              <span>{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// const Transform = () => {
//   return (
//     <section className="bg-linear-to-br from-primary to-secondary">
//       <div className="py-20 mx-auto max-w-4xl">
//         <h2>Ready to transform your Career?</h2>
//         <p>
//           Join 2,500+ professionals who are advancing their careers at EventHub
//           Pro 2025
//         </p>
//         <div className="flex justify-around">
//           {stats.map((stat, index) => (
//             <div
//               className="flex flex-col"
//               key={index}
//             >
//               <span>{stat.number}</span>
//               <span>{stat.title}</span>
//             </div>
//           ))}
//         </div>
//         <button>Secure Your Spot - Early Bird Pricing</button>
//         <div className="flex justify-around">
//           {paymentFeatures.map((feature, index) => (
//             <div
//               className="flex "
//               key={index}
//             >
//               <span><feature.icon/></span>
//               <span>{feature.title}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

export default Transform;
