"use client";
import React, { useState } from "react";
import Container from "@/components/helperComponents/Container";
import SectionHeadingAndSubHeading from "@/components/helperComponents/SectionHeadingAndSubHeading";
import {
  Check,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CreditCard,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const tierCardDetails = [
  {
    title: "Standard",
    price: 299,
    benefits: [
      "Full conference access",
      "Digital resource library",
      "Networking app access",
    ],
  },
  {
    title: "Premium",
    price: 449,
    benefits: [
      "Everything in Standard",
      "VIP networking lunch",
      "Priority seating",
      "Exclusive workshop access",
    ],
  },
  {
    title: "VIP",
    price: 699,
    benefits: [
      "Everything in Premium",
      "Speaker meet & greet",
      "1-on-1 coaching session",
      "Exclusive dinner invitation",
    ],
  },
];

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    age: "",
  });
  const [selectedTier, setSelectedTier] = useState("Standard");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", { ...formData, selectedTier });
    alert(
      `Registration Details:\nName: ${formData.name}\nTier: ${selectedTier}\nAmount: $${tierCardDetails.find((t) => t.title === selectedTier)?.price}\n\nProceeding to payment gateway...`,
    );
  };

  const currentPrice = tierCardDetails.find(
    (t) => t.title === selectedTier,
  )?.price;

  return (
    <div className="bg-background min-h-screen pt-16 pb-20">
      <Container>
        <SectionHeadingAndSubHeading
          heading="Register for EventHub Pro"
          subHeading="Secure your spot today"
        />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm"
            >
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2 pb-4 border-b border-neutral-100">
                <User className="text-accent" /> Personal Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    label: "Full Name",
                    name: "name",
                    type: "text",
                    placeholder: "John Doe",
                    icon: User,
                  },
                  {
                    label: "Email Address",
                    name: "email",
                    type: "email",
                    placeholder: "john@example.com",
                    icon: Mail,
                  },
                  {
                    label: "Phone Number",
                    name: "phone",
                    type: "tel",
                    placeholder: "+91 89898 98989",
                    icon: Phone,
                  },
                  {
                    label: "Age",
                    name: "age",
                    type: "number",
                    placeholder: "25",
                    icon: Calendar,
                  },
                ].map((field, idx) => (
                  <div
                    key={field.name}
                    className="space-y-2"
                  >
                    <label className="text-sm font-semibold text-text-secondary ml-1">
                      {field.label}
                    </label>
                    <div className="relative group">
                      <field.icon
                        size={18}
                        className="absolute left-3 top-3.5 text-neutral-400 group-focus-within:text-accent transition-colors duration-300"
                      />
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-200 focus:outline-hidden focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-300 bg-surface hover:bg-white"
                        value={formData[field.name]}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                ))}

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-text-secondary ml-1">
                    Address
                  </label>
                  <div className="relative group">
                    <MapPin
                      size={18}
                      className="absolute left-3 top-3.5 text-neutral-400 group-focus-within:text-accent transition-colors duration-300"
                    />
                    <input
                      type="text"
                      name="address"
                      placeholder="123 Event St, City, Country"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-200 focus:outline-hidden focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-300 bg-surface hover:bg-white"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-text-secondary ml-1">
                    Gender
                  </label>
                  <div className="relative group">
                    <select
                      name="gender"
                      className="w-full pl-4 pr-10 py-3 rounded-lg border border-neutral-200 focus:outline-hidden focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-300 bg-surface hover:bg-white appearance-none"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown
                      size={18}
                      className="absolute right-3 top-3.5 text-neutral-400 pointer-events-none"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm sticky top-24"
            >
              <h3 className="text-xl font-bold text-primary mb-6 pb-4 border-b border-neutral-100">
                Select Tier
              </h3>
              <div className="space-y-4">
                {tierCardDetails.map((tier) => (
                  <motion.div
                    layout
                    key={tier.title}
                    onClick={() => setSelectedTier(tier.title)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative cursor-pointer p-4 rounded-xl border-2 transition-colors duration-200 ${selectedTier === tier.title ? "border-accent bg-orange-50/50 shadow-xs" : "border-neutral-100 hover:border-neutral-200 bg-surface"}`}
                  >
                    <AnimatePresence>
                      {selectedTier === tier.title && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="absolute top-3 right-3 text-accent"
                        >
                          <Check
                            size={20}
                            strokeWidth={3}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div className="mb-2">
                      <h4
                        className={`font-bold transition-colors ${selectedTier === tier.title ? "text-accent" : "text-primary"}`}
                      >
                        {tier.title}
                      </h4>
                      <span
                        className={`text-lg font-bold transition-colors ${selectedTier === tier.title ? "text-primary" : "text-text-secondary"}`}
                      >
                        ${tier.price}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {tier.benefits.slice(0, 2).map((benefit, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-text-secondary flex items-start gap-1.5"
                        >
                          <Check
                            size={14}
                            className="text-success mt-0.5 shrink-0"
                          />{" "}
                          {benefit}
                        </li>
                      ))}
                      {tier.benefits.length > 2 && (
                        <li className="text-xs text-text-secondary/70 italic pl-5">
                          + {tier.benefits.length - 2} more benefits
                        </li>
                      )}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-text-secondary font-medium">
                    Total Amount
                  </span>
                  <motion.span
                    key={currentPrice}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-extrabold text-primary"
                  >
                    ${currentPrice || 0}
                  </motion.span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  className="w-full bg-accent text-white font-bold py-4 rounded-xl shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"></div>
                  <CreditCard
                    size={20}
                    className="group-hover:rotate-12 transition-transform duration-300"
                  />
                  <span className="relative z-10">Proceed to Payment</span>
                </motion.button>
                <p className="text-xs text-center text-text-secondary mt-4 flex items-center justify-center gap-1">
                  <Check
                    size={12}
                    className="text-success"
                  />{" "}
                  Secure SSL Encryption
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RegisterPage;
