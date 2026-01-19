"use client";
import React from "react";
import Container from "@/components/helperComponents/Container";
import SectionHeadingAndSubHeading from "@/components/helperComponents/SectionHeadingAndSubHeading";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";

const PrivacyPage = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "We collect information you provide directly to us, such as when you create an account, register for an event, or contact customer support. This may include your name, email address, phone number, billing information, and dietary preferences.",
    },
    {
      title: "2. How We Use Your Data",
      content:
        "We use the information we collect to operate and maintain our services, process transactions, send you event updates, and improve your overall user experience. We may also use your data for internal analytics and market research.",
    },
    {
      title: "3. Data Protection",
      content:
        "We implement a variety of security measures to maintain the safety of your personal information. Your personal data is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.",
    },
    {
      title: "4. Cookies & Tracking",
      content:
        "We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.",
    },
    {
      title: "5. Third-Party Disclosure",
      content:
        "We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we do so with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users.",
    },
    {
      title: "6. Your Rights",
      content:
        "You have the right to request access to your personal data, request correction of any errors, or request deletion of your account. You may also opt-out of receiving marketing communications at any time.",
    },
  ];

  return (
    <div className="bg-background min-h-screen pt-10 pb-20">
      <Container>
        <SectionHeadingAndSubHeading
          heading="Privacy Policy"
          subHeading="We value your privacy and are committed to protecting your personal data."
        />

        <div className="mt-12 max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl border border-neutral-200 shadow-sm">
          <div className="mb-8 pb-8 border-b border-neutral-100">
            <p className="text-sm text-text-secondary text-right mb-4">
              Last Updated: January 15, 2026
            </p>
            <p className="text-text-secondary leading-relaxed">
              At EventHub Pro, keeping your data secure is our top priority.
              This Privacy Policy outlines the types of personal information we
              receive and collect when you use our website, as well as some of
              the steps we take to safeguard information.
            </p>
          </div>

          <div className="space-y-10">
            {sections.map((section, index) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                key={index}
              >
                <h2 className="text-xl font-bold text-primary mb-3">
                  {section.title}
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-2 border-t border-neutral-100">
            <h2 className="text-xl font-bold text-primary mb-3">
              7. Contact Us
            </h2>
            <p className="text-text-secondary">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <Link
                href="mailto:privacy@eventhubpro.com"
                className="text-accent hover:underline font-medium"
              >
                privacy@eventhubpro.com
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPage;
