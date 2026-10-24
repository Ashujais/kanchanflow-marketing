"use client";

import React from "react";
import Accordion, { AccordionItemData } from "@/components/shared/Accordion";
import { HOME_FAQS } from "@/data/faq";
import Badge from "@/components/common/Badge";

export default function FaqSection() {
  const accordionItems: AccordionItemData[] = HOME_FAQS.map((faq, index) => ({
    id: `home-faq-${index}`,
    question: faq.question,
    answer: faq.answer,
    category: faq.category,
  }));

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <Badge variant="gold" size="md">
            FREQUENTLY ASKED QUESTIONS
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-slate-100">
            Real Answers for Plant Owners & Production Heads
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Everything you need to know about shop-floor deployment, Tally integration, CAD IP safety, and machine operator adoption.
          </p>
        </div>

        <Accordion items={accordionItems} />
      </div>
    </section>
  );
}
