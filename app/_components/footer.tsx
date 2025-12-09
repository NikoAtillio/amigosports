import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";

const footerNavigation = {
  product: [
    { name: "Platform", href: "/platform" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "For Investors", href: "/for-investors" },
    { name: "For Athletes", href: "/for-athletes" },
    { name: "Features", href: "/features" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "FAQ", href: "/faq" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "YouTube", href: "#", icon: Youtube },
  { name: "Discord", href: "#", icon: MessageCircle },
];

export default function Footer() {
  return (
    <footer className="bg-royal-blue text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="https://cdn.abacus.ai/images/2ff71fb5-fcec-4b05-a5a9-12ec3806006f.png"
                  alt="Amigo Sports"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-heading text-xl font-bold">Amigo Sports</span>
            </Link>
            <p className="text-sm text-gray-300 mb-2">The Social Sports Network (SSN)</p>
            <p className="text-xs text-gray-400">Building The Social Sports Community</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <ul className="space-y-2">
              {footerNavigation?.product?.map?.((item) => (
                <li key={item?.name ?? ""}>
                  <Link
                    href={item?.href ?? "/"}
                    className="text-sm text-gray-300 hover:text-royal-gold transition-colors"
                  >
                    {item?.name ?? ""}
                  </Link>
                </li>
              )) ?? null}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              {footerNavigation?.company?.map?.((item) => (
                <li key={item?.name ?? ""}>
                  <Link
                    href={item?.href ?? "/"}
                    className="text-sm text-gray-300 hover:text-royal-gold transition-colors"
                  >
                    {item?.name ?? ""}
                  </Link>
                </li>
              )) ?? null}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              {footerNavigation?.resources?.map?.((item) => (
                <li key={item?.name ?? ""}>
                  <Link
                    href={item?.href ?? "/"}
                    className="text-sm text-gray-300 hover:text-royal-gold transition-colors"
                  >
                    {item?.name ?? ""}
                  </Link>
                </li>
              )) ?? null}
            </ul>
          </div>
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks?.map?.((item) => {
            const Icon = item?.icon;
            return Icon ? (
              <a
                key={item?.name ?? ""}
                href={item?.href ?? "#"}
                className="text-gray-300 hover:text-royal-gold transition-colors"
              >
                <span className="sr-only">{item?.name ?? ""}</span>
                <Icon className="h-6 w-6" />
              </a>
            ) : null;
          }) ?? null}
        </div>

        {/* Risk warning */}
        <div className="border-t border-royal-purple/30 pt-8">
          <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4 mb-6">
            <p className="text-sm text-yellow-100">
              ⚠️ <strong>High-Risk Investment Warning:</strong> Don&apos;t invest unless you&apos;re prepared to lose all the money you invest. 
              This is a high-risk investment and you should not expect to be protected if something goes wrong. 
              Investments carry risk and capital is at risk. This is not financial advice.
            </p>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-gray-300">
            © {new Date()?.getFullYear?.()} Amigo Sports. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
