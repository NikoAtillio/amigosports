import Image from "next/image";
import Link from "next/link";
import VideoPlaceholder from "../_components/video-placeholder";
import { ArrowRight, Users, CreditCard, TrendingUp, FileText, CheckCircle, Rocket, DollarSign } from "lucide-react";

export const metadata = {
  title: "How It Works - Amigo Sports",
  description: "Learn how Amigo Sports works. Invest in athletes, earn dividends, and trade shares on the world's first sports social trading platform.",
};

export default function HowItWorksPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-royal-blue via-royal-purple to-royal-blue text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
            How Amigo Sports Works
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            The world's first social sports trading platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/for-investors"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-royal-blue font-semibold hover:bg-gray-100 transition-all"
            >
              For Investors
            </Link>
            <Link
              href="/for-athletes"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-all border border-white/30"
            >
              For Athletes
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Amigo Sports is <strong>The Social Sports Network</strong> where athletes sell 1% of their professional contract earnings as shares to investors. Investors earn dividends and can trade shares 24/7 on our platform.
            </p>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-200">
              <Image
                src="https://cdn.abacus.ai/images/1e8756aa-8702-472e-a00a-9c35981997ca.png"
                alt="How Amigo Sports Works"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* For Investors */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center mb-16 gradient-text">
            For Investors: 3 Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Browse Athletes", items: ["Filter by sport", "View stats", "Check performance", "Read analysis"] },
              { icon: CreditCard, title: "Buy Shares", items: ["IPO or secondary", "Paper trading", "Real money", "Trade 24/7"] },
              { icon: TrendingUp, title: "Earn Returns", items: ["Monthly dividends", "Capital gains", "Sell anytime", "Track portfolio"] },
            ]?.map?.((step, index) => {
              const Icon = step?.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-royal-blue to-royal-purple rounded-full mb-6">
                    {Icon ? <Icon className="w-8 h-8 text-white" /> : null}
                  </div>
                  <div className="inline-block bg-royal-gold text-royal-blue px-4 py-1 rounded-full text-sm font-bold mb-4">
                    STEP {index + 1}
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">{step?.title ?? ""}</h3>
                  <ul className="space-y-2">
                    {step?.items?.map?.((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-royal-blue mr-2">•</span>
                        <span className="text-gray-700">{item ?? ""}</span>
                      </li>
                    )) ?? null}
                  </ul>
                </div>
              );
            }) ?? null}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/for-investors"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-royal-blue to-royal-purple text-white font-semibold hover:shadow-lg transition-all"
            >
              Start Investing <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* For Athletes */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center mb-16 gradient-text">
            For Athletes: 4 Simple Steps
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: "Apply", items: ["Submit profile", "Career stats", "Goals"] },
              { icon: CheckCircle, title: "Approved", items: ["Platform vetting", "Due diligence", "Approval"] },
              { icon: Rocket, title: "Launch IPO", items: ["Set price", "Raise capital", "Market shares"] },
              { icon: DollarSign, title: "Earn Revenue", items: ["IPO funds", "Trading fees", "Fan support"] },
            ]?.map?.((step, index) => {
              const Icon = step?.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-royal-purple to-royal-blue rounded-full mb-4">
                    {Icon ? <Icon className="w-7 h-7 text-white" /> : null}
                  </div>
                  <div className="inline-block bg-royal-purple/10 text-royal-purple px-3 py-1 rounded-full text-xs font-bold mb-3">
                    STEP {index + 1}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{step?.title ?? ""}</h3>
                  <ul className="space-y-1 text-sm">
                    {step?.items?.map?.((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-royal-purple mr-1">•</span>
                        <span className="text-gray-600">{item ?? ""}</span>
                      </li>
                    )) ?? null}
                  </ul>
                </div>
              );
            }) ?? null}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/for-athletes"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-royal-purple to-royal-blue text-white font-semibold hover:shadow-lg transition-all"
            >
              Apply to List <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Video Explainer */}
      <section className="py-20 bg-royal-blue/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            Watch How It Works
          </h2>
          <p className="text-center text-gray-600 mb-12">
            If you could have invested in Messi at 16...
          </p>
          <VideoPlaceholder
            thumbnailUrl="https://cdn.abacus.ai/images/2e3ee898-1e54-45f9-945f-ddfba7612c0f.png"
            title="How Amigo Sports Works (2:30)"
            description="Learn how to invest in athletes and earn returns"
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-royal-blue to-royal-purple text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Ready to Get Started?
          </h2>
          <Link
            href="/waitlist"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-royal-gold text-royal-blue font-bold hover:bg-royal-gold/90 transition-all shadow-xl"
          >
            Join the Waitlist
          </Link>
        </div>
      </section>
    </div>
  );
}
