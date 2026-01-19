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
  Utensils,
  Megaphone,
  TicketPercent,
  Lock,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const tierCardDetails = [
  {
    title: "Standard",
    price: 299,
  },
  {
    title: "Premium",
    price: 449,
  },
  {
    title: "VIP",
    price: 699,
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
    dietaryPreference: "",
    referralSource: "",
    acceptedTerms: false,
  });
  const [selectedTier, setSelectedTier] = useState("Standard");
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === "EVENT2025") {
      setDiscount(0.1); // 10% discount
      setPromoMessage({
        type: "success",
        text: "Promo code applied! (10% OFF)",
      });
    } else {
      setDiscount(0);
      setPromoMessage({ type: "error", text: "Invalid promo code" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.acceptedTerms) {
      alert("Please accept the Terms and Conditions to proceed.");
      return;
    }
    const finalPrice = calculateTotal();
    console.log("Form Submitted", { ...formData, selectedTier, finalPrice });
    alert(
      `Registration Details:\nName: ${formData.name}\nTier: ${selectedTier}\nFinal Amount: $${finalPrice}\nPromo Applied: ${discount > 0 ? "Yes" : "No"}\n\nProceeding to payment gateway...`,
    );
  };

  const calculateTotal = () => {
    const basePrice =
      tierCardDetails.find((t) => t.title === selectedTier)?.price || 0;
    return Math.round(basePrice * (1 - discount));
  };

  const currentBasePrice =
    tierCardDetails.find((t) => t.title === selectedTier)?.price || 0;

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
                ].map((field) => (
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

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-text-secondary ml-1">
                    Dietary Preference
                  </label>
                  <div className="relative group">
                    <Utensils
                      size={18}
                      className="absolute left-3 top-3.5 text-neutral-400 group-focus-within:text-accent transition-colors duration-300"
                    />
                    <select
                      name="dietaryPreference"
                      className="w-full pl-10 pr-10 py-3 rounded-lg border border-neutral-200 focus:outline-hidden focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-300 bg-surface hover:bg-white appearance-none"
                      value={formData.dietaryPreference}
                      onChange={handleChange}
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select Preference
                      </option>
                      <option value="none">None</option>
                      <option value="vegetarian">Vegetarian</option>
                      <option value="vegan">Vegan</option>
                      <option value="gluten-free">Gluten Free</option>
                      <option value="halal">Halal</option>
                      <option value="kosher">Kosher</option>
                    </select>
                    <ChevronDown
                      size={18}
                      className="absolute right-3 top-3.5 text-neutral-400 pointer-events-none"
                    />
                  </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-text-secondary ml-1">
                    How did you hear about us?
                  </label>
                  <div className="relative group">
                    <Megaphone
                      size={18}
                      className="absolute left-3 top-3.5 text-neutral-400 group-focus-within:text-accent transition-colors duration-300"
                    />
                    <select
                      name="referralSource"
                      className="w-full pl-10 pr-10 py-3 rounded-lg border border-neutral-200 focus:outline-hidden focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-300 bg-surface hover:bg-white appearance-none"
                      value={formData.referralSource}
                      onChange={handleChange}
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select Source
                      </option>
                      <option value="social-media">Social Media</option>
                      <option value="friend">Friend/Colleague</option>
                      <option value="email-newsletter">Email Newsletter</option>
                      <option value="search-engine">Search Engine</option>
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
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-neutral-100">
                <label className="text-sm font-semibold text-text-secondary ml-1 mb-2 block">
                  Promo Code
                </label>
                <div className="flex gap-2">
                  <div className="relative grow">
                    <TicketPercent
                      size={18}
                      className="absolute left-3 top-3.5 text-neutral-400"
                    />
                    <input
                      type="text"
                      placeholder="EVENT2025"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-200 focus:outline-hidden focus:ring-2 focus:ring-accent/20 focus:border-accent text-sm uppercase"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                  </div>
                  <button
                    onClick={handleApplyPromo}
                    className="bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-neutral-800 transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {promoMessage && (
                  <p
                    className={`text-xs mt-2 ml-1 ${promoMessage.type === "success" ? "text-green-600" : "text-red-500"}`}
                  >
                    {promoMessage.text}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-neutral-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-text-secondary font-medium">
                    Subtotal
                  </span>
                  <span className="text-lg font-bold text-primary">
                    ${currentBasePrice}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-success font-medium">
                      Discount (10%)
                    </span>
                    <span className="text-lg font-bold text-success">
                      -${Math.round(currentBasePrice * discount)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-center mb-6 pt-4 border-t border-dashed border-neutral-200">
                  <span className="text-lg font-bold text-primary">Total</span>
                  <motion.span
                    key={calculateTotal()}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-extrabold text-accent"
                  >
                    ${calculateTotal()}
                  </motion.span>
                </div>

                <div className="mb-6">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="acceptedTerms"
                      checked={formData.acceptedTerms}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-accent border-neutral-300 rounded-sm focus:ring-accent"
                    />
                    <span className="text-xs text-text-secondary leading-tight group-hover:text-primary transition-colors">
                      I agree to the{" "}
                      <a
                        href="#"
                        className="underline text-accent"
                      >
                        Terms & Conditions
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="underline text-accent"
                      >
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  disabled={!formData.acceptedTerms}
                  className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden ${formData.acceptedTerms ? "bg-accent text-white shadow-accent/20 hover:shadow-xl hover:shadow-accent/30" : "bg-neutral-200 text-neutral-400 cursor-not-allowed shadow-none"}`}
                >
                  <div
                    className={`absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 pointer-events-none ${formData.acceptedTerms ? "group-hover:translate-y-0" : ""}`}
                  ></div>
                  <CreditCard
                    size={20}
                    className={`${formData.acceptedTerms ? "group-hover:rotate-12" : ""} transition-transform duration-300`}
                  />
                  <span className="relative z-10">Proceed to Payment</span>
                </motion.button>

                <div className="mt-6 flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2 text-neutral-400">
                    <ShieldCheck size={18} />
                    <Lock size={18} />
                    <span className="text-xs font-semibold">
                      256-bit SSL Secured
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RegisterPage;
