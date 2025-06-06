

"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import CalModal from "@/components/CalModal"; 

const plans = [
  {
    title: "Standard",
    price: "$4,999",
    color: "lime-400",
    textColor: "text-lime-400",
    ringColor: "ring-lime-400",
    features: [
      "Dedicated senior designer",
      "3 hours of focused work daily",
      "Weekly update calls",
      "Async comms",
      "Pause or cancel anytime",
    ],
  },
  {
    title: "Project-Based",
    price: "$7,999",
    color: "purple-400",
    textColor: "text-purple-400",
    ringColor: "ring-purple-400",
    features: [
      "Scoped deliverables",
      "Timeline commitment",
      "Fixed milestones",
      "One-time payment",
    ],
  },
];

export default function PricingSection() {
  const [showCal, setShowCal] = useState(false);

  return (
    <section className="min-h-screen bg-black px-8 py-16 pricing-tables-section" id="pricing">
      <div className="mb-16 site-section-title">
        <div className="text-5xl font-bold text-white mb-4 site-section-title-h2">Choose a Plan</div>
        <div className="site-section-title-gradient"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`rounded-[2rem] ring-8 ring-${plan.color} p-8 flex flex-col justify-between bg-black`}
          >
            <div>
              <h2 className={`text-3xl font-bold ${plan.textColor}`}>{plan.title}</h2>
              <p className="text-gray-300 mt-2 text-sm font-semibold">
                {plan.title === "Standard" 
                  ? "Ideal for a trial, a few tasks, or small projects, offering maximum flexibility." 
                  : "Ideal for businesses or individuals with clear, specific needs."
                }
              </p>
              <p className="text-4xl font-extrabold text-white mt-6">
                {plan.price}
                <span className="text-gray-400 text-2xl">/m</span>
              </p>
              <p className="text-sm text-gray-400 mt-1">Pause or cancel any time</p>
              <ul className="mt-6 space-y-3 pricing-tables-section-ul">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 feature-item-color">
                    <Check className={`w-5 h-5 text-${plan.color}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => setShowCal(true)}
              className={plan.title === "Standard" ? "mt-10 bg-standard hover:opacity-90 text-black cursor-pointer font-bold py-5 w-full text-lg transition" : "mt-10 bg-based hover:opacity-90 text-black cursor-pointer font-bold py-5 w-full text-lg transition"} 
              style={{ borderRadius: '50px' }}
            >
              → Book an Intro Call
            </button>
          </div>
        ))}
      </div>
      <CalModal show={showCal} onClose={() => setShowCal(false)} />
    </section>
  );
}
