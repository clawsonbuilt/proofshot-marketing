"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui";
import { CONTACT_EMAIL } from "@/lib/site";
import { Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        setErrorMessage(
          body.error ?? "Something went wrong. Please try again or email us directly."
        );
        setFormState("error");
        return;
      }

      setFormState("success");
      setFormData({ name: "", email: "", subject: "general", message: "" });
    } catch {
      setErrorMessage(
        "We couldn't reach the server. Check your connection, or email us directly."
      );
      setFormState("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Navigation />
      <main id="main">
        {/* Hero Section */}
        <section className="pt-32 lg:pt-36 pb-16 lg:pb-20">
          <div className="max-w-[600px] mx-auto px-6 lg:px-8 text-center">
            <h1 className="font-display font-black text-4xl md:text-5xl text-black uppercase tracking-tight mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600">
              Have a question? We&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-[500px] mx-auto px-6 lg:px-8">
            {formState === "success" ? (
              <div className="bg-green/5 border border-green/20 rounded-2xl p-8 text-center">
                <CheckCircle className="w-12 h-12 text-green mx-auto mb-4" />
                <h2 className="font-display font-bold text-xl text-gray-900 mb-2">
                  Message Sent!
                </h2>
                <p className="text-gray-600 mb-6">
                  Thanks for reaching out. We&apos;ll get back to you as soon as possible.
                </p>
                <Button onClick={() => setFormState("idle")} variant="outline">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-colors bg-white"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="sales">Sales</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-colors resize-none"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Error Message */}
                {formState === "error" && (
                  <div
                    role="alert"
                    className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 text-sm"
                  >
                    {errorMessage ||
                      "Something went wrong. Please try again or email us directly."}
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={formState === "submitting"}
                >
                  {formState === "submitting" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}

            {/* Direct Email */}
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                Or email us directly at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-orange hover:text-orange-hover font-medium"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
