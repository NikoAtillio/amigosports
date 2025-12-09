import Image from "next/image";
import Link from "next/link";
import ROICalculator from "../_components/calculators/roi-calculator";
import DividendCalculator from "../_components/calculators/dividend-calculator";
import { Gem, DollarSign, TrendingUp, BarChart3, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "For Investors - Amigo Sports",
  description: "Discover a new asset class. Invest in rising sports talent and earn returns through dividends and capital appreciation.",
};

export default function ForInvestorsPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-royal-blue via-royal-purple to-royal-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://cdn.abacus.ai/images/0550859b-4475-417a-a434-9294417df5e4.png"
            alt="Stadium"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
            Invest in the Promise of <span className="text-royal-gold">Tomorrow</span>
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Own a piece of the next Messi, Ronaldo, or Mbappé
          </p>
          <Link
            href="/waitlist"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-royal-gold text-royal-blue font-bold hover:bg-royal-gold/90 transition-all shadow-xl"
          >
            Start Paper Trading
          </Link>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center mb-16 gradient-text">
            Why Invest in Athlete Shares?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, title: "Diversification", description: "Alternative asset class uncorrelated with stocks" },
              { icon: "❤️", title: "Passion-Driven", description: "Support your favorite players and connect with athletes" },
              { icon: TrendingUp, title: "High Growth", description: "Early-stage talent with exponential potential" },
            ]?.map?.((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">{typeof benefit?.icon === "string" ? benefit?.icon : benefit?.icon ? <benefit.icon className="w-12 h-12 text-royal-blue" /> : null}</div>
                <h3 className="text-2xl font-heading font-bold mb-3">{benefit?.title ?? ""}</h3>
                <p className="text-gray-700">{benefit?.description ?? ""}</p>
              </div>
            )) ?? null}
          </div>
        </div>
      </section>

      {/* Three Ways to Profit */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center mb-16 gradient-text">
            Three Ways to Profit
          </h2>
          <div className="space-y-12">
            {[
              {
                icon: Gem,
                title: "1️⃣ Scarcity Value",
                description: "Fixed supply of 1,000,000 shares per athlete creates Bitcoin-style scarcity. As demand increases, price rises.",
                example: "Example: Buy at £1.00 → Athlete gains popularity → Sell at £5.00 = 400% return",
              },
              {
                icon: DollarSign,
                title: "2️⃣ Dividend Income",
                description: "Receive monthly payments from 1% of athlete's professional earnings. Passive income that grows with their career.",
                example: "Example: Own 10,000 shares → Athlete earns £200K/year = £20/year dividends (2% yield)",
              },
              {
                icon: TrendingUp,
                title: "3️⃣ Capital Appreciation",
                description: "Trade shares as value fluctuates based on performance, transfers, and market sentiment. Buy low, sell high.",
                example: "Example: Buy before big transfer → Price spikes → Sell for 50-200% profit",
              },
            ]?.map?.((way, index) => {
              const Icon = way?.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      {Icon ? (
                        <div className="w-16 h-16 bg-gradient-to-br from-royal-blue to-royal-purple rounded-full flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      ) : null}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold mb-3">{way?.title ?? ""}</h3>
                      <p className="text-gray-700 mb-3">{way?.description ?? ""}</p>
                      <p className="text-sm text-royal-blue font-semibold">{way?.example ?? ""}</p>
                    </div>
                  </div>
                </div>
              );
            }) ?? null}
          </div>
        </div>
      </section>

      {/* Calculators */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center mb-16 gradient-text">
            Interactive Calculators
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <ROICalculator />
            <DividendCalculator />
          </div>
        </div>
      </section>

      {/* Risk Disclosure */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50 border-y border-yellow-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-heading font-bold mb-3 text-orange-900">
                ⚠️ High-Risk Investment Warning
              </h3>
              <p className="text-gray-800 mb-4">
                Don&apos;t invest unless you&apos;re prepared to lose all the money you invest. This is a high-risk investment and you should not expect to be protected if something goes wrong.
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Key Risks:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Athlete performance may decline</li>
                  <li>Career-ending injuries possible</li>
                  <li>Market volatility can be extreme</li>
                  <li>Dividends not guaranteed</li>
                  <li>Shares may become illiquid</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-royal-blue to-royal-purple text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Start with £10,000 Paper Trading
          </h2>
          <Link
            href="/waitlist"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-royal-gold text-royal-blue font-bold hover:bg-royal-gold/90 transition-all shadow-xl"
          >
            Join the Waitlist
          </Link>
          <p className="mt-4 text-sm text-gray-200">
            No credit card • No risk • Free forever
          </p>
        </div>
      </section>
    </div>
  );
}
