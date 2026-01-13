import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const companiesLogos = [
  "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDI%3D",
  "https://images.unsplash.com/photo-1562783912-21ad31ee2a83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDI%3D",
  "https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDI%3D",
  "https://images.unsplash.com/photo-1529612700005-e35377bf1415?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDI%3D",
  "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDI%3D",
  "https://images.unsplash.com/photo-1610128980054-68d94619e243?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbXBhbnklMjBsb2dvfGVufDB8fDB8fHwy",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXBhbnklMjBsb2dvfGVufDB8fDB8fHwy",
];

const TrustedBy = () => {
  return (
    <div className="bg-surface flex flex-col items-center justify-center gap-5 py-10 border-b border-neutral-200">
      <h2 className="text-lg text-neutral-400 font-medium">
        Trusted By Industry Leaders
      </h2>
      <Marquee
        speed={70}
        className="max-w-4xl mask-x-from-75% to-100%"
      >
        {companiesLogos.map((logo, index) => (
          <div
            key={index}
            className="mx-8"
          >
            <Image
              src={logo}
              alt="Company Logo"
              width={100}
              height={100}
              className="h-16 w-16 object-cover rounded-xl filter grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TrustedBy;
