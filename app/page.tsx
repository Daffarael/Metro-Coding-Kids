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

export default function Home() {
  const [settings, setSettings] = useState({
    whatsapp_number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281818778099",
    batch_name: "Batch November 2026",
    batch_deadline: "2026-11-15T23:59:59",
    price_normal: 950000,
    price_current: 499000,
    quota_seats_left: 4,
  });

  useEffect(() => {
    // Fetch live settings if available
    fetch("/api/settings")
      .then((res) => res.json())
      .then((data) => {
        if (data?.settings) {
          setSettings((prev) => ({ ...prev, ...data.settings }));
        }
      })
      .catch((err) => {
        console.warn("Using default settings:", err);
      });
  }, []);

  const [selectedCourse, setSelectedCourse] = useState("konsultasi_wa");

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

        {/* Section 3: Inspirasi & Emosi - Pilar 3: Menjual Emosi */}
        <InspirationSection />

        {/* 4 Pillars Section */}
        <Pillars />

        {/* Authentic Learning Atmosphere */}
        <ClassAtmosphere />

        {/* Curriculum & Classes */}
        <ClassPrograms onSelectClass={handleSelectClass} />

        {/* Facilities & Certifications */}
        <Facilities />

        {/* Real Parent Testimonials */}
        <Testimonials />

        {/* Pricing & Countdown */}
        <PricingBatch
          batchName={settings.batch_name}
          priceNormal={settings.price_normal}
          priceCurrent={settings.price_current}
          deadlineDate={settings.batch_deadline}
          onCtaClick={() => {
            const el = document.getElementById("form-pendaftaran");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Hybrid Lead Form */}
        <RegistrationForm
          whatsappNumber={settings.whatsapp_number}
          selectedCourse={selectedCourse}
        />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Footer with Contacts & Location */}
        <Footer whatsappNumber={settings.whatsapp_number} />

        {/* Live Social Proof Registration Toast */}
        <LiveRegistrationToast />
      </div>
    </main>
  );
}
