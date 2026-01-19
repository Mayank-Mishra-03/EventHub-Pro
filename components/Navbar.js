"use client";
import { Link } from "next-view-transitions";
import { useEffect, useState } from "react";
import Button from "./helperComponents/Button";
import {
  AnimatePresence,
  motion,
  stagger,
  useAnimate,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    title: "Overview",
    href: "/#overview",
  },
  {
    title: "Schedule",
    href: "/#schedule",
  },
  {
    title: "Speakers",
    href: "/#speakers",
  },
  {
    title: "Tickets",
    href: "/#tickets",
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
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

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
      },
    );
    animate(
      "Button",
      {
        opacity: [0, 1],
      },
      {
        duration: 0.8,
      },
    );
    animate(
      ".logo-icon",
      {
        opacity: [0, 1],
      },
      {
        duration: 0.8,
      },
    );
  }, []);
  return (
    <>
      {/* desktop navbar */}
      <motion.nav
        animate={{
          opacity: scrolled ? 0.95 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        ref={scope}
        className="bg-surface hidden sm:block w-screen fixed top-0 inset-x-0 py-3 shadow-sm mx-auto z-50"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            href="/"
            className="logo-icon flex items-center justify-center gap-0.5"
          >
            {logo}
            <span className="text-xl font-bold text-primary">EventHub Pro</span>
          </Link>
          <ul className="flex items-center text-text-secondary gap-8">
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
              className="px-4 py-2 font-bold"
              href="/register"
            >
              Book Now
            </Button>
          </ul>
        </div>
      </motion.nav>

      {/* moblie navbar */}
      <motion.nav
        animate={{
          opacity: scrolled ? 0.95 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className="bg-surface md:hidden fixed top-0 inset-x-0 py-3 px-4 shadow-sm mx-auto z-50"
      >
        <div className="flex flex-col items-start gap-30">
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsOpen(false);
            }}
            href="/"
            className="flex items-center justify-center gap-0.5"
          >
            {logo}
            <span className="text-xl font-bold text-primary">EventHub Pro</span>
          </Link>
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: "100vh",
                  transition: {
                    height: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3, delay: 0.1 },
                  },
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  transition: { duration: 0.4, delay: 0.1 },
                }}
                className="flex flex-col items-center text-text-secondary gap-8 w-full"
              >
                {navLinks.map((link, index) => (
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    key={link.title}
                    className="group"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className="group-hover:text-primary transition-all duration-200 font-medium"
                    >
                      {link.title}
                    </Link>
                  </motion.li>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    className="px-4 py-2 font-bold"
                    href="/register"
                  >
                    Book Now
                  </Button>
                </motion.div>
              </motion.ul>
            )}
          </AnimatePresence>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="z-50 fixed right-6 top-4"
          >
            {isOpen ? (
              <motion.div
                layoutId="menu"
                animate={{ rotate: 90 }}
                transition={{ duration: 0.2, ease: "linear" }}
              >
                <X className="h-6 w-6 text-text-primary" />
              </motion.div>
            ) : (
              <motion.div
                layoutId="menu"
                animate={{ rotate: 0 }}
                transition={{ duration: 0.2, ease: "linear" }}
              >
                <Menu className="h-6 w-6 text-text-primary" />
              </motion.div>
            )}
          </button>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
