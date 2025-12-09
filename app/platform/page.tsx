"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Users, 
  TrendingUp, 
  MessageCircle, 
  Heart, 
  Share2, 
  Bell,
  Search,
  UserPlus,
  BarChart3,
  Trophy,
  DollarSign,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

export default function PlatformPage() {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: feedRef, inView: feedInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: profileRef, inView: profileInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: tradingRef, inView: tradingInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 bg-gradient-to-br from-royal-blue via-royal-purple to-royal-gold overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.shutterstock.com/image-photo/blue-soccer-stadium-night-time-260nw-2597641479.jpg opacity-10 bg-cover bg-center" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-heading font-bold text-white mb-6">
              Experience The Social Sports Network
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              A revolutionary platform where social media meets sports investing - 
              connect, trade, and discover the next generation of athletic talent
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/waitlist"
                className="px-8 py-4 rounded-xl bg-white text-royal-blue font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Join the Community
              </Link>
              <Link
                href="/how-it-works"
                className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Feed Preview */}
      <section ref={feedRef} className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={feedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-royal-blue/10 text-royal-blue font-semibold text-sm mb-4">
              <Users className="w-4 h-4 mr-2" />
              Social Sports Community
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 gradient-text">
              Your Personalized Sports Feed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay connected with your favorite athletes, follow their journey, and engage with a 
              passionate community of sports fans and investors
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Feed Preview Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={feedInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="relative aspect-video bg-gray-100">
                <Image
                  src="https://cdn.abacus.ai/images/5c9d7d57-267a-447f-8620-a81810c49540.png"
                  alt="Social feed interface"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Feed Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={feedInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <FeedFeature
                icon={MessageCircle}
                title="Real-Time Updates"
                description="Get instant notifications about athlete performance, contract updates, and market movements"
              />
              <FeedFeature
                icon={Heart}
                title="Engage with Content"
                description="Like, comment, and share posts from athletes and fellow investors in the community"
              />
              <FeedFeature
                icon={Bell}
                title="Custom Alerts"
                description="Set personalized alerts for your portfolio athletes and trending rising stars"
              />
              <FeedFeature
                icon={Users}
                title="Build Your Network"
                description="Follow athletes, connect with investors, and grow your sports trading community"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Athlete Profile Preview */}
      <section ref={profileRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={profileInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-royal-purple/10 text-royal-purple font-semibold text-sm mb-4">
              <Trophy className="w-4 h-4 mr-2" />
              Athlete Profiles
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 gradient-text">
              Professional Athlete Profiles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive athlete pages combining career stats, investment data, and social engagement - 
              everything you need to make informed decisions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Profile Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={profileInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6 order-2 lg:order-1"
            >
              <ProfileFeature
                icon={BarChart3}
                title="Performance Analytics"
                description="Track career stats, season performance, and detailed metrics across all competitions"
              />
              <ProfileFeature
                icon={TrendingUp}
                title="Share Price Charts"
                description="View historical price data, market cap, and trading volume with interactive charts"
              />
              <ProfileFeature
                icon={DollarSign}
                title="Dividend History"
                description="See monthly dividend payments, earnings reports, and projected future returns"
              />
              <ProfileFeature
                icon={UserPlus}
                title="Social Engagement"
                description="Follow athletes, view their posts, and connect with their investor community"
              />
            </motion.div>

            {/* Profile Preview Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={profileInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2"
            >
              <div className="relative aspect-video bg-gray-100">
                <Image
                  src="https://cdn.abacus.ai/images/e113d5f9-fcff-4303-82a1-b3cece03a22c.png"
                  alt="Athlete profile interface"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trading Dashboard Preview */}
      <section ref={tradingRef} className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={tradingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-royal-gold/10 text-royal-gold font-semibold text-sm mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Trading Platform
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 gradient-text">
              Sophisticated Trading Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional-grade trading interface with real-time data, advanced charts, 
              and seamless execution - all secured by blockchain technology
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={tradingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl mb-12"
          >
            <div className="relative aspect-video bg-gray-100">
              <Image
                src="https://cdn.abacus.ai/images/5d5aeecd-c43d-4719-a8b3-db27c2507161.png"
                alt="Trading dashboard interface"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Trading Features Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <TradingFeature
              title="Real-Time Pricing"
              description="Live share prices with millisecond updates and instant order execution"
            />
            <TradingFeature
              title="Advanced Charts"
              description="Professional charting tools with technical indicators and market analysis"
            />
            <TradingFeature
              title="Portfolio Management"
              description="Track your holdings, view performance, and manage your sports investment portfolio"
            />
            <TradingFeature
              title="Market Insights"
              description="AI-powered insights, trending athletes, and investment recommendations"
            />
            <TradingFeature
              title="Secure Transactions"
              description="Blockchain-secured trades with smart contract settlement and verification"
            />
            <TradingFeature
              title="Low Fees"
              description="Competitive trading fees and transparent pricing with no hidden costs"
            />
          </div>
        </div>
      </section>

      {/* Discover Talent Section */}
      <section className="py-20 bg-gradient-to-br from-royal-blue/5 to-royal-purple/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-royal-gold/10 text-royal-gold font-semibold text-sm mb-4">
                <Search className="w-4 h-4 mr-2" />
                Scout Rising Stars
              </div>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 gradient-text">
                Discover the Next Sports Legends
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Use advanced scouting tools to identify breakthrough talent before they hit the mainstream. 
                Invest early and watch your portfolio grow as athletes rise through the ranks.
              </p>
              <ul className="space-y-4 mb-8">
                <DiscoverItem text="Filter by sport, age, position, and potential rating" />
                <DiscoverItem text="View detailed scouting reports and performance predictions" />
                <DiscoverItem text="Get early access to athlete IPOs before public launch" />
                <DiscoverItem text="Join communities of scouts sharing insights and opportunities" />
              </ul>
              <Link
                href="/waitlist"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-royal-blue to-royal-purple text-white font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Scouting
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="relative aspect-video bg-gray-100">
                <Image
                  src="https://cdn.abacus.ai/images/ea134efb-589c-4293-a8ac-9c88df59e164.png"
                  alt="Young athletes training"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Engagement Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="relative aspect-video bg-gray-100">
                <Image
                  src="https://cdn.abacus.ai/images/b47fef45-6e37-445a-9fb2-c359fe5b500e.png"
                  alt="Community engagement"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-royal-blue/10 text-royal-blue font-semibold text-sm mb-4">
                <Users className="w-4 h-4 mr-2" />
                The Social Sports Community
              </div>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 gradient-text">
                Join a Thriving Community
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Connect with thousands of passionate sports fans and savvy investors. 
                Share insights, celebrate victories, and build your network in The Social Sports Network (SSN).
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <CommunityMetric number="45,892+" label="Active Investors" />
                <CommunityMetric number="1,247+" label="Listed Athletes" />
                <CommunityMetric number="£127M" label="Assets Under Management" />
                <CommunityMetric number="2.5M+" label="Monthly Trades" />
              </div>
              <Link
                href="/waitlist"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-royal-blue to-royal-purple text-white font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Join the Community
                <Users className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-royal-blue via-royal-purple to-royal-gold">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
              Ready to Join The Social Sports Network?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Be part of the revolution where sports passion meets smart investing. 
              Join thousands of fans and investors already on the platform.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/waitlist"
                className="px-8 py-4 rounded-xl bg-white text-royal-blue font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Early Access
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Helper Components
function FeedFeature({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-royal-blue to-royal-purple rounded-lg flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function ProfileFeature({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-royal-purple to-purple-600 rounded-lg flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function TradingFeature({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl">
      <h3 className="text-lg font-semibold mb-2 text-royal-blue">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function DiscoverItem({ text }: { text: string }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-royal-gold to-orange-600 rounded-full flex items-center justify-center">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}

function CommunityMetric({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center p-4 bg-white rounded-xl shadow-sm">
      <p className="text-3xl font-bold gradient-text mb-1">{number}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}