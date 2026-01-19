"use client";
import React from "react";
import Container from "@/components/helperComponents/Container";
import SectionHeadingAndSubHeading from "@/components/helperComponents/SectionHeadingAndSubHeading";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";

const TermsPage = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using EventHub Pro, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this websites particular services, you shall be subject to any posted guidelines or rules applicable to such services.",
    },
    {
      title: "2. User Accounts",
      content:
        "To access certain features of the platform, you may be required to create an account. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password.",
    },
    {
      title: "3. Event Registration & Payments",
      content:
        "EventHub Pro facilitates the booking of event tickets. Prices for tickets are subject to change without notice. We reserve the right to refuse or cancel any order for any reason, including limitations on quantities available for purchase or inaccuracies in errors in product or pricing information. Valid payment methods include credit cards and other payment gateways accessible via the site.",
    },
    {
      title: "4. Cancellations & Refunds",
      content:
        "Refund policies vary by event and organizer. Generally, tickets are refundable up to 30 days before the event start date. Service fees are non-refundable. Please check the specific event details for the applicable cancellation policy.",
    },
    {
      title: "5. Code of Conduct",
      content:
        "EventHub Pro is dedicated to providing a harassment-free experience for everyone. We do not tolerate harassment of event participants in any form. Event participants violating these rules may be sanctioned or expelled from the event without a refund at the discretion of the event organizers.",
    },
    {
      title: "6. Intellectual Property",
      content:
        "The site and its original content, features, and functionality are owned by EventHub Pro and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.",
    },
    {
      title: "7. Limitation of Liability",
      content:
        "In no event shall EventHub Pro, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.",
    },
    {
      title: "8. Changes to Terms",
      content:
        "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
    },
  ];

  return (
    <div className="bg-background min-h-screen pt-10 pb-20">
      <Container>
        <SectionHeadingAndSubHeading
          heading="Terms & Conditions"
          subHeading="Please read these terms carefully before using our platform."
        />

        <div className="mt-12 max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl border border-neutral-200 shadow-sm">
          <div className="mb-8 pb-8 border-b border-neutral-100">
            <p className="text-sm text-text-secondary text-right mb-4">
              Last Updated: January 15, 2026
            </p>
            <p className="text-text-secondary leading-relaxed">
              Welcome to EventHub Pro. These Terms and Conditions outline the
              rules and regulations for the use of EventHub Pro's Website. By
              accessing this website we assume you accept these terms and
              conditions. Do not continue to use EventHub Pro if you do not
              agree to take all of the terms and conditions stated on this page.
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
              9. Contact Us
            </h2>
            <p className="text-text-secondary">
              If you have any questions about these Terms, please contact us at{" "}
              <Link
                href="mailto:legal@eventhubpro.com"
                className="text-accent hover:underline font-medium"
              >
                legal@eventhubpro.com
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TermsPage;
