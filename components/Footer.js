"use client";
import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const logo = (
  <svg
    className="h-8 w-8 text-primary mr-2"
    fill="var(--color-accent)"
    viewBox="0 0 24 24"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-slate-800 pt-16 pb-8 overflow-hidden relative border-t border-blue-800/30">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-accent to-transparent opacity-70"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4 space-y-6">
            <Link
              href="/"
              className="flex items-center"
            >
              {logo}
              <h3 className="text-3xl font-bold tracking-tight text-white flex items-center gap-1">
                EventHub<span className="text-accent">Pro</span>
              </h3>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Experience the future of event management. We bring people
              together through seamless technology and unforgettable
              experiences.
            </p>
            <div className="flex gap-4 pt-2">
              <SocialIcon
                icon={<Facebook size={18} />}
                href="#"
                label="Facebook"
              />
              <SocialIcon
                icon={<Twitter size={18} />}
                href="#"
                label="Twitter"
              />
              <SocialIcon
                icon={<Instagram size={18} />}
                href="#"
                label="Instagram"
              />
              <SocialIcon
                icon={<Linkedin size={18} />}
                href="#"
                label="LinkedIn"
              />
            </div>
          </div>

          <div className="lg:col-span-3 lg:pl-8">
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/#overview">Explore Events</FooterLink>
              <FooterLink href="/#schedule">About Line-up</FooterLink>
              <FooterLink href="/#speakers">About Speakers</FooterLink>
              <FooterLink href="/contact">Contact Support</FooterLink>
            </ul>
          </div>

          <div className="lg:col-span-3 mx-auto">
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <MapPin size={16} />
                </div>
                <span className="text-slate-300 text-sm leading-tight pt-1">
                  Palladium Conference Center <br />
                  Dhanori, Pune 411015
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Phone size={16} />
                </div>
                <span className="text-slate-300 text-sm group-hover:text-white transition-colors">
                  +91 89898 98989
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Mail size={16} />
                </div>
                <span className="text-slate-300 text-sm group-hover:text-white transition-colors">
                  hello@eventhubpro.com
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-6">
              Stay Updated
            </h4>
            <p className="text-slate-300 text-xs mb-4">
              Join our newsletter for the latest updates.
            </p>
            <form
              className="space-y-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-blue-950/40 border border-blue-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-white placeholder-slate-500"
                />
              </div>
              <button className="w-full bg-accent hover:bg-orange-600 text-white font-medium py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-lg shadow-orange-900/20 hover:shadow-orange-700/40">
                Subscribe
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="h-px w-full bg-linear-to-r from-transparent via-blue-800 to-transparent my-8 opacity-50"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} EventHub Pro. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href, label }) => (
  <Link
    href={href}
    aria-label={label}
    className="w-10 h-10 rounded-full bg-blue-950 border border-blue-900 flex items-center justify-center text-slate-300 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20"
  >
    {icon}
  </Link>
);

const FooterLink = ({ href, children }) => (
  <li>
    <Link
      href={href}
      className="text-slate-300 hover:text-accent hover:pl-2 transition-all duration-300 flex items-center gap-2 text-sm group"
    >
      <span className="w-0 group-hover:w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
      {children}
    </Link>
  </li>
);

export default Footer;
