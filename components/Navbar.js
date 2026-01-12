"use client";
import { Link } from "next-view-transitions";
import { useEffect } from "react";
import Button from "./Button";
import { motion, stagger, useAnimate } from "motion/react";

const navLinks = [
  {
    title: "Overview",
    href: "/",
  },
  {
    title: "Schedule",
    href: "/",
  },
  {
    title: "Speakers",
    href: "/",
  },
  {
    title: "Tickets",
    href: "/",
  },
];

const logo = (
  <svg
    className="h-6 w-6 text-primary mr-3"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
  </svg>
);

const Navbar = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "li",
      {
        opacity: [0, 1],
        y: [-20, 0],
      },
      {
        duration: 0.5,
        delay: stagger(0.1),
      }
    );
    animate(
      "Button",
      {
        opacity: [0, 1],
      },
      {
        duration: 0.8,
      }
    );
  }, []);
  return (
    <nav className="bg-surface md:min-w-screen sm:w-0 fixed top-0 left-0 py-3 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center justify-center gap-0.5"
        >
          {logo}
          <span className="text-xl font-bold text-primary">EventHub Pro</span>
        </Link>
        <ul
          ref={scope}
          className="flex items-center text-text-secondary gap-8"
        >
          {navLinks.map((link) => (
            <li
              key={link.title}
              className="group"
            >
              <Link
                href={link.href}
                className="group-hover:text-primary transition-all duration-200 font-medium"
              >
                {link.title}
              </Link>
            </li>
          ))}
          <Button
            className="px-4 py-2"
            href="/tickets"
          >
            Book Now
          </Button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
