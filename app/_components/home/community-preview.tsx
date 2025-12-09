"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, MessageCircle, TrendingUp, Heart, Share2, ChevronRight } from "lucide-react";

export default function CommunityPreview() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-royal-blue/10 text-royal-blue font-semibold text-sm mb-4">
            <Users className="w-4 h-4 mr-2" />
            The Social Sports Community (SSC)
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 gradient-text">
            More Than Just Trading - It's a Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the excitement of social media combined with sports investing. 
            Connect, engage, and grow with athletes and fellow investors in a vibrant community.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Community Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
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

          {/* Community Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <CommunityFeature
              icon={MessageCircle}
              title="Engage with Athletes"
              description="Follow your favorite athletes, comment on their posts, and get exclusive insights into their careers"
            />
            <CommunityFeature
              icon={Users}
              title="Build Your Network"
              description="Connect with thousands of passionate sports fans and savvy investors worldwide"
            />
            <CommunityFeature
              icon={TrendingUp}
              title="Share Insights"
              description="Exchange investment strategies, discuss performance, and discover opportunities together"
            />
            <CommunityFeature
              icon={Heart}
              title="Celebrate Success"
              description="Share the excitement when your portfolio athletes achieve milestones and victories"
            />
          </motion.div>
        </div>

        {/* Social Feed Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-2xl font-heading font-bold mb-2">Your Personalized Feed</h3>
            <p className="text-gray-600">Stay updated with real-time posts from athletes, market movements, and community discussions</p>
          </div>
          
          <div className="relative aspect-video bg-gray-100">
            <Image
              src="https://cdn.abacus.ai/images/5c9d7d57-267a-447f-8620-a81810c49540.png"
              alt="Social feed interface"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 bg-gradient-to-r from-royal-blue to-royal-purple">
            <div className="flex items-center justify-between text-white">
              <div>
                <p className="font-semibold text-lg mb-1">Experience The Social Sports Network</p>
                <p className="text-white/90 text-sm">Join thousands of investors and athletes today</p>
              </div>
              <Link
                href="/platform"
                className="flex-shrink-0 inline-flex items-center px-6 py-3 rounded-lg bg-white text-royal-blue font-semibold hover:shadow-lg transition-all duration-300"
              >
                Explore Platform
                <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          <StatCard number="45,892+" label="Active Members" />
          <StatCard number="1,247+" label="Athletes" />
          <StatCard number="2.5M+" label="Monthly Posts" />
          <StatCard number="98%" label="Satisfaction Rate" />
        </motion.div>
      </div>
    </section>
  );
}

function CommunityFeature({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
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

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md text-center">
      <p className="text-3xl font-bold gradient-text mb-2">{number}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}
