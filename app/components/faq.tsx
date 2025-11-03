"use client";

import React, { useState } from "react";
import { HelveticaNeue, playfairDisplay } from "../util/font";
import { BiPlus, BiMinus } from "react-icons/bi";

const faqs = [
  {
    question: "Do I need prior experience to enroll in your courses?",
    answer:
      "Not at all! Our entry-level course is designed specifically for complete beginners with zero lash experience. We guide you step-by-step through every technique, from understanding lash anatomy to mastering your first full set. If you already have some experience, our advanced courses will help you refine your skills and learn specialized techniques.",
  },
  {
    question: "What's included in the course fee.?",
    answer:
      "Your tuition covers everything you need to start your lash career with confidence.<br/><br/>1. Professional Lash Kit & Student Manual<br/>2. Hybrid Online/Student in-person training<br/>3. Mentorship and on-going support<br/>4. Official certification upon completion.",
  },
  {
    question: "How long does it take to complete a course?",
    answer: "Our courses range from 2-3 days. We let you go at your own pace.",
  },
  {
    question: "Will I be certified after completing the course?",
    answer:
      "Yes! Upon successfully completing your course and passing the practical assessment, you'll receive an official Sunday Lash certification. This certification demonstrates your competency in lash application techniques and is recognized within the beauty industry. We'll also guide you on any additional licensing requirements in your area.",
  },
  {
    question: "What kind of support do you offer after certification?",
    answer:
      "We believe education doesn't stop at certification. After completing your course, you'll gain access to our exclusive alumni community, ongoing mentorship opportunities, business-building resources, and regular technique refresher sessions. We're committed to supporting your entire lash journey—from student to successful lash artist.",
  },
  {
    question: "Can I start a lash business after taking your courses?",
    answer:
      "Absolutely! Many of our students go on to build thriving lash businesses. Beyond teaching you technical skills, we provide guidance on setting up your business, pricing your services, marketing strategies, and building a loyal client base. We'll equip you with both the artistry and business knowledge needed to succeed in the lash industry.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 md:px-8">
      <div className="md:max-w-3xl md:w-full w-[90%] mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h2
            className={`${playfairDisplay.className} text-3xl md:text-6xl font-light text-[#1A1A1A] mb-4`}
          >
            Frequently asked questions
          </h2>
          <p
            className={`${HelveticaNeue.className} text-sm text-[black]/50 leading-[110%] w-104 max-w-[90%] mx-auto`}
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
                className="w-full flex items-center  gap-5 cursor-pointer justify-between px-6 py-5 text-left transition-colors duration-200"
              >
                <span
                  className={`${HelveticaNeue.className} leading-[110%] text-base md:text-lg text-[#1A1A1A] font-normal`}
                >
                  {faq.question}
                </span>
                <div className="shrink-0   w-10 h-10 flex justify-center items-center rounded-full bg-[#FFF7E7] ml-4">
                  {openIndex === index ? (
                    <BiMinus className="w-6 h-6 text-[#1A1A1A] transition-transform duration-300" />
                  ) : (
                    <BiPlus className="w-6 h-6 text-[#1A1A1A] transition-transform duration-300" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <div
                    className={`${HelveticaNeue.className} text-base text-[#4A4A4A] leading-relaxed prose prose-ol:list-decimal prose-ol:ml-5 prose-ol:space-y-2`}
                    dangerouslySetInnerHTML={{
                      __html: faq.answer.replace(/(\d+\.\s)/g, "<br/>$1"),
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
