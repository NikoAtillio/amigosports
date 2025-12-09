import { Users, TrendingUp, Shield, Gem, DollarSign, BarChart } from "lucide-react";

export const metadata = {
  title: "About Us - Amigo Sports",
  description: "Learn about Amigo Sports - The Social Sports Network (SSN) combining social media, sports fandom, and financial markets.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-royal-blue via-royal-purple to-royal-blue text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold mb-6">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-royal-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-royal-gold"></span>
            </span>
            The Social Sports Network (SSN)
          </div>
          <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
            About Amigo Sports
          </h1>
          <p className="text-xl text-gray-100">
            A revolutionary platform combining social media engagement, sports fandom, and financial markets
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold mb-6 gradient-text">Our Mission</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Amigo Sports is revolutionizing the sports industry by creating <strong>The Social Sports Network (SSN)</strong> and <strong>The Social Sports Community (SSC)</strong> — a unique platform that combines the engagement of social media, the excitement of sports fandom, and the sophistication of financial markets.
            </p>
            <p className="text-gray-700 mb-6">
              We enable athletes to sell a fractional percentage (1%) of their future professional career earnings to investors through a tokenized share system, creating a unique investment vehicle that aligns the interests of athletes, fans, and investors.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6 gradient-text mt-12">The Core Innovation</h2>
            <p className="text-gray-700 mb-6">
              Amigo Sports' unique value proposition lies in our <strong>three-dimensional value creation model</strong>:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8 not-prose">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <div className="w-12 h-12 bg-gradient-to-br from-royal-blue to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Gem className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-royal-blue">Fixed Supply Economics</h3>
                <p className="text-gray-700">Each athlete has a capped supply of 1 million shares, creating Bitcoin-style scarcity that drives demand and value appreciation</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <div className="w-12 h-12 bg-gradient-to-br from-royal-purple to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-royal-purple">Dividend Distribution</h3>
                <p className="text-gray-700">Monthly dividend payments from 1% of athletes' professional earnings provide steady income returns</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                <div className="w-12 h-12 bg-gradient-to-br from-royal-gold to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-royal-gold">Speculative Trading</h3>
                <p className="text-gray-700">Share prices fluctuate based on athlete performance, transfers, and market sentiment, enabling capital appreciation</p>
              </div>
            </div>

            <p className="text-gray-700 mb-6 text-lg font-semibold">
              This combination of <span className="text-royal-blue">scarcity</span> + <span className="text-royal-purple">dividends</span> + <span className="text-royal-gold">speculation</span>, all secured by smart contracts, creates a compelling investment product that has never been offered in the sports industry.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6 gradient-text mt-12">The Problem We're Solving</h2>
            <ul className="space-y-3 text-gray-700">
              <li><strong>For Athletes:</strong> Talented athletes struggle to fund early careers without financial backing or take on exploitative contracts</li>
              <li><strong>For Fans:</strong> Sports fans want deeper connection with players beyond jerseys and tickets, and meaningful participation in their success</li>
              <li><strong>For Investors:</strong> Traditional sports investing is inaccessible to everyday people, limited to wealthy owners and private equity</li>
              <li><strong>For Communities:</strong> There's no platform that combines social engagement with sports investing in one seamless experience</li>
            </ul>

            <h2 className="text-3xl font-heading font-bold mb-6 gradient-text mt-12">Our Three-Pillar Approach</h2>
            
            <div className="space-y-6 not-prose mb-8">
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-royal-blue to-blue-600 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-royal-blue">Social Sports Community</h3>
                  <p className="text-gray-700">A vibrant platform where athletes, fans, and investors connect, engage, and share the journey. Like Facebook meets LinkedIn for the sports world.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-royal-purple to-purple-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-royal-purple">Trade Athlete Shares</h3>
                  <p className="text-gray-700">Buy, sell, and trade fractional shares of athletes' future earnings with smart contract security. Earn dividends and benefit from capital appreciation.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-royal-gold to-orange-600 rounded-lg flex items-center justify-center">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-royal-gold">Scout Rising Talent</h3>
                  <p className="text-gray-700">Discover and invest early in the next generation of sports stars. Use advanced tools to identify breakthrough talent before they become legends.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold mb-6 gradient-text mt-12">Technology & Security</h2>
            <p className="text-gray-700 mb-6">
              Operating as a <strong>centralised exchange with smart contract security</strong>, Amigo Sports offers a hybrid model that combines the speed and user-friendliness of centralised order matching with the transparency and security of blockchain-based settlement.
            </p>
            <p className="text-gray-700 mb-6">
              Built on modern technology including Next.js, PostgreSQL, and Ethereum/Polygon blockchain, our platform ensures fast, secure, and scalable operations for millions of users worldwide.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6 gradient-text mt-12">Regulatory Approach</h2>
            <p className="text-gray-700 mb-6">
              We are committed to operating within regulatory frameworks and pursuing full Financial Conduct Authority (FCA) authorization. Our phased approach includes:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li><strong>Phase 1:</strong> FCA Regulatory Sandbox participation with MVP launch</li>
              <li><strong>Phase 2:</strong> Full FCA Authorization as Investment Firm (MiFID II)</li>
              <li><strong>Phase 3:</strong> Ongoing compliance with KYC/AML and consumer protection measures</li>
            </ul>

            <h2 className="text-3xl font-heading font-bold mb-6 gradient-text mt-12">Core Values</h2>
            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Shield className="w-6 h-6 text-royal-blue" />
                  <h3 className="text-xl font-bold">Transparency</h3>
                </div>
                <p className="text-gray-700">Open, honest communication about operations, fees, and risks</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Users className="w-6 h-6 text-royal-purple" />
                  <h3 className="text-xl font-bold">Community</h3>
                </div>
                <p className="text-gray-700">Building connections and fostering collaboration among all participants</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center space-x-3 mb-3">
                  <TrendingUp className="w-6 h-6 text-royal-gold" />
                  <h3 className="text-xl font-bold">Innovation</h3>
                </div>
                <p className="text-gray-700">Pushing boundaries with cutting-edge technology and creative solutions</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Gem className="w-6 h-6 text-royal-blue" />
                  <h3 className="text-xl font-bold">Fairness</h3>
                </div>
                <p className="text-gray-700">Equitable opportunities and treatment for athletes, fans, and investors</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
