"use client";

import React from "react";
import Accordion, { AccordionItemData } from "@/components/shared/Accordion";
import { PRICING_FAQS } from "@/data/pricingPlans";
import Badge from "@/components/common/Badge";

export default function PricingFaq() {
  const accordionItems: AccordionItemData[] = PRICING_FAQS.map((faq, index) => ({
    id: `pricing-faq-${index}`,
    question: faq.question,
    answer: faq.answer,
    category: "Billing & Rollout",
  }));

  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <Badge variant="gold" size="md">
            PRICING & IMPLEMENTATION QUESTIONS
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-slate-100">
            Frequently Asked Billing & Rollout Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Clear guidelines on operator licenses, Excel data migration, Tally Prime integration, and payment options.
          </p>
        </div>

        <Accordion items={accordionItems} />
      </div>
    </section>
  );
}
