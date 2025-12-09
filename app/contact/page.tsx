"use client";

import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response?.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
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
            Contact Us
          </h1>
          <p className="text-xl text-gray-100">
            Get in touch with our team
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {status === "success" ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-green-900 mb-2">Thank You!</h2>
              <p className="text-green-700">
                Your message has been sent successfully. We'll get back to you within 24-48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData?.name ?? ""}
                  onChange={(e) => setFormData({ ...formData, name: e?.target?.value ?? "" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
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
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData?.subject ?? ""}
                  onChange={(e) => setFormData({ ...formData, subject: e?.target?.value ?? "" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData?.message ?? ""}
                  onChange={(e) => setFormData({ ...formData, message: e?.target?.value ?? "" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue"
                  placeholder="Your message..."
                />
              </div>

              {status === "error" ? (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                  {errorMessage || "Something went wrong. Please try again."}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-gradient-to-r from-royal-blue to-royal-purple text-white font-bold rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
              <Mail className="w-8 h-8 text-royal-blue mb-3" />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-sm text-gray-600">info@amigosports.com</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
              <MessageSquare className="w-8 h-8 text-royal-purple mb-3" />
              <h3 className="font-bold mb-2">Social Media</h3>
              <p className="text-sm text-gray-600">@amigosports</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
