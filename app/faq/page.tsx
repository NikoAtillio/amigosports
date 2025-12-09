import FAQSearch from "../_components/faq/faq-search";
import Link from "next/link";

export const metadata = {
  title: "FAQ - Amigo Sports",
  description: "Frequently asked questions about Amigo Sports platform, investing, athletes, and trading.",
};

export default function FAQPage() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-royal-blue via-royal-purple to-royal-blue text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-100">
            Find answers to common questions about Amigo Sports
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FAQSearch />

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-royal-blue to-royal-purple text-white font-semibold hover:shadow-lg transition-all"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
