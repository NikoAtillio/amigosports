import { TrendingUp, Users, DollarSign, Gift, BarChart3, Bell, Smartphone, Shield } from "lucide-react";

export const metadata = {
  title: "Features - Amigo Sports",
  description: "Discover the powerful features of Amigo Sports platform - trading, dividends, social network, and youth crowdfunding.",
};

const features = [
  { icon: TrendingUp, title: "Real-Time Trading", description: "Trade athlete shares 24/7 with live price updates and instant execution" },
  { icon: DollarSign, title: "Monthly Dividends", description: "Earn passive income from 1% of athlete's professional earnings" },
  { icon: Users, title: "Social Network", description: "Follow top investors, share strategies, and connect with athletes" },
  { icon: Gift, title: "Youth Crowdfunding", description: "Support grassroots talent through our special youth program" },
  { icon: BarChart3, title: "Paper Trading", description: "Practice with £10,000 virtual balance risk-free" },
  { icon: Bell, title: "Smart Notifications", description: "Price alerts, dividend payments, and performance updates" },
  { icon: Smartphone, title: "Mobile App", description: "Trade on the go with our iOS and Android apps" },
  { icon: Shield, title: "Secure Platform", description: "Bank-level security and regulatory compliance" },
];

export default function FeaturesPage() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-royal-blue via-royal-purple to-royal-blue text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
            Platform Features
          </h1>
          <p className="text-xl text-gray-100">
            Everything you need to invest in athletes and earn returns
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features?.map?.((feature, index) => {
              const Icon = feature?.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
                  {Icon ? (
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-royal-blue to-royal-purple rounded-full mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  ) : null}
                  <h3 className="text-xl font-heading font-bold mb-2">{feature?.title ?? ""}</h3>
                  <p className="text-gray-700 text-sm">{feature?.description ?? ""}</p>
                </div>
              );
            }) ?? null}
          </div>
        </div>
      </section>
    </div>
  );
}
