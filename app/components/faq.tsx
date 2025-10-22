"use client";

import React, { useState } from "react";
import { HelveticaNeue, playfairDisplay } from "../util/font";
import { BiPlus, BiMinus } from "react-icons/bi";

const faqs = [
  {
    question: "What makes Sunday Lush products different?",
    answer:
      "Sunday Lush combines natural, clinically-proven ingredients with luxurious textures to deliver visible results. Our formulations are cruelty-free, sustainably sourced, and designed for all skin types. We believe in transparency—every ingredient serves a purpose, and we never use harsh chemicals or fillers.",
  },
  {
    question: "Which products are right for my skin type?",
    answer:
      "We've designed our collection to work harmoniously across all skin types. Whether you have dry, oily, combination, or sensitive skin, our products are formulated to balance and nourish. Book a free consultation with our skin experts to create a personalized routine tailored to your unique needs and concerns.",
  },
  {
    question: "How long will it take to see results?",
    answer:
      "Most customers notice improved hydration and radiance within the first week of use. For concerns like fine lines, texture, and hyperpigmentation, you can expect to see visible improvements within 4-6 weeks of consistent use. Remember, skincare is a journey—consistency is key to achieving your best skin.",
  },
  {
    question: "Are Sunday Lush products safe for sensitive skin?",
    answer:
      "Absolutely! Our entire range is dermatologically tested and formulated without common irritants like parabens, sulfates, synthetic fragrances, and harsh alcohols. We focus on gentle yet effective ingredients that nurture even the most reactive skin. If you have specific concerns, we recommend patch testing or consulting with our team.",
  },
  {
    question: "Do you offer a satisfaction guarantee?",
    answer:
      "Yes! We're confident you'll love your Sunday Lush experience. If you're not completely satisfied within 30 days of purchase, we offer hassle-free returns and exchanges. Your skin's happiness is our priority, and we stand behind every product we create.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h2
            className={`${playfairDisplay.className} text-4xl md:text-6xl font-light text-[#1A1A1A] mb-4`}
          >
            Frequently asked questions
          </h2>
          <p
            className={`${HelveticaNeue.className} text-sm text-[black]/50 w-104 max-w-[90%] mx-auto`}
          >
            Your lash learning made easy, get quick answers to the most common
            questions from our community.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mt-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F2EEE5] rounded-2xl overflow-hidden transition-all duration-300 ease-in-out"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center  cursor-pointer justify-between px-6 py-5 text-left transition-colors duration-200"
              >
                <span
                  className={`${HelveticaNeue.className} text-base md:text-lg text-[#1A1A1A] font-normal`}
                >
                  {faq.question}
                </span>
                <div className="shrink-0  w-10 h-10 flex justify-center items-center rounded-full bg-[#FFF7E7] ml-4">
                  {openIndex === index ? (
                    <BiMinus className="w-6 h-6 text-[#1A1A1A] transition-transform duration-300" />
                  ) : (
                    <BiPlus className="w-6 h-6 text-[#1A1A1A] transition-transform duration-300" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <p
                    className={`${HelveticaNeue.className} text-base text-[#4A4A4A] leading-relaxed`}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
