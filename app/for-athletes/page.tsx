import Link from "next/link";
import Image from "next/image";
import { DollarSign, TrendingUp, Globe, Users, CheckCircle, Shield } from "lucide-react";

export const metadata = {
  title: "For Athletes - Amigo Sports",
  description: "Fund your sports career by selling 1% of your future earnings. Raise capital, gain exposure, and earn ongoing revenue.",
};

export default function ForAthletesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-royal-purple via-royal-blue to-royal-purple text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://cdn.abacus.ai/images/2e3ee898-1e54-45f9-945f-ddfba7612c0f.png"
            alt="Athlete"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
            Fund Your Dream. <span className="text-royal-gold">Share Your Success.</span>
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Raise capital for your career by selling 1% of your future earnings
          </p>
          <Link
            href="/waitlist"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-royal-gold text-royal-blue font-bold hover:bg-royal-gold/90 transition-all shadow-xl"
          >
            Apply to List
          </Link>
        </div>
      </section>

      {/* Why List */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center mb-16 gradient-text">
            Why List on Amigo Sports?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: DollarSign, title: "Upfront Capital", description: "Raise £10K-£1M through IPO to fund training, equipment, etc." },
              { icon: TrendingUp, title: "Ongoing Revenue", description: "Earn 10% of all trading fees on your shares forever" },
              { icon: Globe, title: "Global Exposure", description: "Reach millions of fans and investors worldwide" },
              { icon: Users, title: "Career Support", description: "Community of fans invested in your success" },
              { icon: CheckCircle, title: "Performance Tracking", description: "Showcase your stats and achievements" },
              { icon: Shield, title: "Protected Rights", description: "Only 1% of professional earnings" },
            ]?.map?.((benefit, index) => {
              const Icon = benefit?.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
                  {Icon ? (
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-royal-purple to-royal-blue rounded-full mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  ) : null}
                  <h3 className="text-xl font-heading font-bold mb-3">{benefit?.title ?? ""}</h3>
                  <p className="text-gray-700">{benefit?.description ?? ""}</p>
                </div>
              );
            }) ?? null}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 gradient-text">
            Who Can Apply?
          </h2>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="space-y-4">
              {[
                "✅ Age: 16-35 years old",
                "✅ Status: Semi-professional or professional contract (or exceptional youth talent)",
                "✅ Sports: Football, Cricket, Basketball, Tennis, Rugby (more coming soon)",
                "✅ Geography: UK, Europe, India, LATAM, Asia-Pacific (expanding globally)",
                "✅ Commitment: Willing to share 1% of professional earnings",
                "✅ Verification: Valid ID, contract proof, performance stats",
              ]?.map?.((item, index) => (
                <p key={index} className="text-lg text-gray-700 flex items-start">
                  <span className="mr-3">{item?.split?.(":")?.[0] ?? ""}</span>
                  <span className="flex-1">{item?.split?.(":")?.[1] ?? ""}</span>
                </p>
              )) ?? null}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-royal-purple to-royal-blue text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready to Fund Your Dream?
          </h2>
          <Link
            href="/waitlist"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-royal-gold text-royal-blue font-bold hover:bg-royal-gold/90 transition-all shadow-xl"
          >
            Apply to List
          </Link>
          <p className="mt-4 text-sm text-gray-200">
            Free to apply • No upfront costs
          </p>
        </div>
      </section>
    </div>
  );
}
