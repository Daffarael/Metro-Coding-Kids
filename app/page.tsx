"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoint from "@/components/PainPoint";
import InspirationSection from "@/components/InspirationSection";
import Pillars from "@/components/Pillars";
import ClassAtmosphere from "@/components/ClassAtmosphere";
import ClassPrograms from "@/components/ClassPrograms";
import Facilities from "@/components/Facilities";
import Testimonials from "@/components/Testimonials";
import PricingBatch from "@/components/PricingBatch";
import RegistrationForm from "@/components/RegistrationForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import LiveRegistrationToast from "@/components/LiveRegistrationToast";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  DEFAULT_CAMPAIGN_SETTINGS,
  DEFAULT_PROGRAMS,
  DEFAULT_TESTIMONIALS,
  DEFAULT_FAQS,
  ProgramItem,
  TestimonialItem,
  FAQItem,
  CampaignSettings,
} from "@/lib/default-data";

export default function Home() {
  const [settings, setSettings] = useState<CampaignSettings>(DEFAULT_CAMPAIGN_SETTINGS);
  const [programs, setPrograms] = useState<ProgramItem[]>(DEFAULT_PROGRAMS);
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(DEFAULT_TESTIMONIALS);
  const [faqs, setFaqs] = useState<FAQItem[]>(DEFAULT_FAQS);

  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    // 1. Fetch Campaign Settings
    fetch("/api/settings")
      .then((res) => res.json())
      .then((data) => {
        if (data?.settings) {
          setSettings((prev) => ({ ...prev, ...data.settings }));
        }
      })
      .catch((err) => console.warn("Using default settings:", err));

    // 2. Fetch Class Programs
    fetch("/api/programs")
      .then((res) => res.json())
      .then((data) => {
        if (data?.programs && Array.isArray(data.programs) && data.programs.length > 0) {
          setPrograms(data.programs);
        }
      })
      .catch((err) => console.warn("Using default programs:", err));

    // 3. Fetch Testimonials
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        if (data?.testimonials && Array.isArray(data.testimonials) && data.testimonials.length > 0) {
          setTestimonials(data.testimonials);
        }
      })
      .catch((err) => console.warn("Using default testimonials:", err));

    // 4. Fetch FAQs
    fetch("/api/faq")
      .then((res) => res.json())
      .then((data) => {
        if (data?.faqs && Array.isArray(data.faqs) && data.faqs.length > 0) {
          setFaqs(data.faqs);
        }
      })
      .catch((err) => console.warn("Using default faqs:", err));
  }, []);

  const handleSelectClass = (courseId?: string) => {
    if (courseId) {
      setSelectedCourse(courseId);
    }
    const el = document.getElementById("form-pendaftaran");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#F7F5EE] sm:bg-[#EFECE3] py-0 sm:py-6 overflow-x-hidden">
      <div className="brochure-container relative bg-[#F7F5EE] overflow-x-hidden w-full">
        {/* Navigation Bar */}
        <Navbar whatsappNumber={settings.whatsapp_number} />

        {/* Hero Section */}
        <Hero
          seatsLeft={settings.quota_seats_left}
          onCtaClick={() => {
            const el = document.getElementById("form-pendaftaran");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Section 2: Pain Point - Pilar 2: Mengerti Kebutuhan Customer */}
        <PainPoint />

        {/* Section 3: Inspirasi & Emosi */}
        <InspirationSection />

        {/* 4 Pillars Section */}
        <Pillars />

        {/* Authentic Learning Atmosphere */}
        <ClassAtmosphere />

        {/* Curriculum & Classes */}
        <ClassPrograms
          programs={programs}
          onSelectClass={handleSelectClass}
        />

        {/* Facilities & Certifications */}
        <Facilities />

        {/* Real Parent Testimonials */}
        <Testimonials testimonials={testimonials} />

        {/* Voucher Batch & Countdown */}
        <PricingBatch
          batchName={settings.batch_name}
          deadlineDate={settings.batch_deadline}
          voucherBadge={settings.voucher_badge}
          voucherDescription={settings.voucher_description}
          onCtaClick={() => {
            const el = document.getElementById("form-pendaftaran");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Hybrid Lead Form */}
        <RegistrationForm
          whatsappNumber={settings.whatsapp_number}
          selectedCourse={selectedCourse}
          programs={programs}
        />

        {/* Frequently Asked Questions */}
        <FAQ faqs={faqs} />

        {/* Footer with Contacts & Location */}
        <Footer whatsappNumber={settings.whatsapp_number} />

        {/* Live Social Proof Registration Toast */}
        <LiveRegistrationToast />

        {/* Floating WhatsApp Action Button */}
        <FloatingWhatsApp whatsappNumber={settings.whatsapp_number} />
      </div>
    </main>
  );
}
