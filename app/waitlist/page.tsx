"use client";

import { useState } from "react";
import { CheckCircle, Users, TrendingUp, Gift, Star } from "lucide-react";

const countries = ["United Kingdom", "United States", "India", "Spain", "Germany", "France", "Brazil", "Argentina", "Other"];
const sports = ["Football", "Cricket", "Tennis", "Basketball", "Rugby", "Other"];

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    country: "",
    userType: "investor",
    favoriteSport: "",
    referralCode: "",
    marketingConsent: false,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response?.ok) {
        setStatus("success");
      } else {
        const data = await response?.json?.();
        setErrorMessage(data?.error ?? "Something went wrong");
        setStatus("error");
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-royal-blue via-royal-purple to-royal-blue text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
            Join the Future of Sports Investing
          </h1>
          <p className="text-xl text-gray-100">
            Get early access to the world's first social sports trading platform
          </p>
        </div>
      </section>

      {status === "success" ? (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-green-900 mb-4">
                Welcome to the Waitlist!
              </h2>
              <p className="text-lg text-green-700 mb-6">
                You're now on the list! We'll send you updates as we approach launch and you'll get early access before the general public.
              </p>
              <div className="bg-white rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-3">What happens next?</h3>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>✅ Confirmation email sent</li>
                  <li>✅ Updates on launch progress</li>
                  <li>✅ Exclusive content for waitlist members</li>
                  <li>✅ Early access invitation before public launch</li>
                </ul>
              </div>
              <button
                onClick={() => {
                  if (navigator?.share) {
                    navigator?.share?.({
                      title: "Join Amigo Sports",
                      text: "Join me on the Amigo Sports waitlist!",
                      url: window?.location?.href ?? "",
                    })?.catch?.(() => {});
                  }
                }}
                className="px-6 py-3 bg-gradient-to-r from-royal-blue to-royal-purple text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Share with Friends
              </button>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="py-12 bg-white">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-5 gap-6 mb-12">
                {[
                  { icon: Users, text: "Early Access" },
                  { icon: Gift, text: "£100 Bonus Credits" },
                  { icon: Star, text: "Founding Member" },
                  { icon: TrendingUp, text: "Exclusive IPOs" },
                  { icon: CheckCircle, text: "Priority Support" },
                ]?.map?.((benefit, index) => {
                  const Icon = benefit?.icon;
                  return (
                    <div key={index} className="text-center">
                      {Icon ? (
                        <div className="w-12 h-12 bg-gradient-to-br from-royal-blue to-royal-purple rounded-full flex items-center justify-center mx-auto mb-2">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      ) : null}
                      <p className="text-sm font-medium text-gray-700">{benefit?.text ?? ""}</p>
                    </div>
                  );
                }) ?? null}
              </div>
            </div>
          </section>

          <section className="pb-20 bg-white">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
              <form onSubmit={handleSubmit} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-heading font-bold mb-6 text-center">Sign Up for Waitlist</h2>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData?.email ?? ""}
                      onChange={(e) => setFormData({ ...formData, email: e?.target?.value ?? "" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData?.name ?? ""}
                      onChange={(e) => setFormData({ ...formData, name: e?.target?.value ?? "" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData?.phone ?? ""}
                      onChange={(e) => setFormData({ ...formData, phone: e?.target?.value ?? "" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue"
                      placeholder="+44 7700 900000"
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country (Optional)
                    </label>
                    <select
                      id="country"
                      value={formData?.country ?? ""}
                      onChange={(e) => setFormData({ ...formData, country: e?.target?.value ?? "" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue"
                    >
                      <option value="">Select your country</option>
                      {countries?.map?.((country) => (
                        <option key={country} value={country}>{country}</option>
                      )) ?? null}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      I am: *
                    </label>
                    <div className="flex gap-4">
                      {["investor", "athlete", "both"]?.map?.((type) => (
                        <label key={type} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="userType"
                            value={type}
                            checked={formData?.userType === type}
                            onChange={(e) => setFormData({ ...formData, userType: e?.target?.value ?? "investor" })}
                            className="mr-2 accent-royal-blue"
                          />
                          <span className="capitalize">{type}</span>
                        </label>
                      )) ?? null}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="sport" className="block text-sm font-medium text-gray-700 mb-1">
                      Favorite Sport (Optional)
                    </label>
                    <select
                      id="sport"
                      value={formData?.favoriteSport ?? ""}
                      onChange={(e) => setFormData({ ...formData, favoriteSport: e?.target?.value ?? "" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue"
                    >
                      <option value="">Select sport</option>
                      {sports?.map?.((sport) => (
                        <option key={sport} value={sport}>{sport}</option>
                      )) ?? null}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-1">
                      Referral Code (Optional)
                    </label>
                    <input
                      type="text"
                      id="referral"
                      value={formData?.referralCode ?? ""}
                      onChange={(e) => setFormData({ ...formData, referralCode: e?.target?.value ?? "" })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue"
                      placeholder="Enter code"
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="marketing"
                      checked={formData?.marketingConsent ?? false}
                      onChange={(e) => setFormData({ ...formData, marketingConsent: e?.target?.checked ?? false })}
                      className="mt-1 mr-2 accent-royal-blue"
                    />
                    <label htmlFor="marketing" className="text-sm text-gray-600">
                      I want to receive updates and exclusive content (optional)
                    </label>
                  </div>
                </div>

                {status === "error" ? (
                  <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                    {errorMessage || "Something went wrong. Please try again."}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-6 w-full py-4 bg-gradient-to-r from-royal-blue to-royal-purple text-white font-bold rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
                >
                  {status === "loading" ? "Joining..." : "Join the Waitlist"}
                </button>

                <p className="mt-4 text-center text-sm text-gray-600">
                  No credit card required • Free to join
                </p>
              </form>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
