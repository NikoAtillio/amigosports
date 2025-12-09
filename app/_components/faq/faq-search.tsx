"use client";

import { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  { category: "General", question: "What is Amigo Sports?", answer: "Amigo Sports is The Social Sports Network where athletes sell 1% of their professional earnings as tradeable shares to investors." },
  { category: "General", question: "How does it work?", answer: "Athletes list on our platform, investors buy shares, and athletes pay 1% of their professional contract earnings as dividends." },
  { category: "General", question: "Is this legal?", answer: "Yes. We operate within regulatory frameworks and are pursuing appropriate licenses in all jurisdictions." },
  { category: "Investors", question: "How do I start investing?", answer: "Join our waitlist to get early access. You can start with paper trading (£10K virtual balance) before investing real money." },
  { category: "Investors", question: "What are the fees?", answer: "Trading fees are 2% per transaction. No monthly fees or hidden charges." },
  { category: "Investors", question: "How do dividends work?", answer: "Athletes pay 1% of their professional earnings monthly. Dividends are distributed proportionally to all shareholders." },
  { category: "Investors", question: "Can I lose money?", answer: "Yes. This is a high-risk investment. Share prices can decline and athletes may not perform as expected. Only invest what you can afford to lose." },
  { category: "Athletes", question: "How do I apply?", answer: "Fill out our application form on the waitlist page. Our team will review and contact you within 2-4 weeks." },
  { category: "Athletes", question: "What percentage do I sell?", answer: "Athletes sell exactly 1% of their professional contract earnings. No equity in your personal brand or sponsorships." },
  { category: "Athletes", question: "How much can I raise?", answer: "Depends on your valuation. Most athletes raise between £10K-£1M in their IPO." },
  { category: "Platform", question: "What payment methods are accepted?", answer: "We accept credit cards, debit cards, and bank transfers. More payment methods coming soon." },
  { category: "Platform", question: "Is my data secure?", answer: "Yes. We use bank-level encryption and comply with GDPR and data protection regulations." },
];

export default function FAQSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = ["All", "General", "Investors", "Athletes", "Platform"];

  const filteredFAQs = faqs?.filter?.((faq) => {
    const matchesSearch = faq?.question?.toLowerCase?.()?.includes?.(searchTerm?.toLowerCase?.() ?? "") || 
                         faq?.answer?.toLowerCase?.()?.includes?.(searchTerm?.toLowerCase?.() ?? "");
    const matchesCategory = selectedCategory === "All" || faq?.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }) ?? [];

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search questions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e?.target?.value ?? "")}
          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue"
        />
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {categories?.map?.((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category ?? "All")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedCategory === category
                ? "bg-royal-blue text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        )) ?? null}
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFAQs?.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No questions found matching your search.</p>
        ) : (
          filteredFAQs?.map?.((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq?.question ?? ""}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-royal-blue flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index ? (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-700">{faq?.answer ?? ""}</p>
                </div>
              ) : null}
            </div>
          )) ?? null
        )}
      </div>
    </div>
  );
}
