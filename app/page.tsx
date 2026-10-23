"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import ClassAtmosphere from "@/components/ClassAtmosphere";
import ClassPrograms from "@/components/ClassPrograms";
import Facilities from "@/components/Facilities";
import Testimonials from "@/components/Testimonials";
import PricingBatch from "@/components/PricingBatch";
import RegistrationForm from "@/components/RegistrationForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";

export default function Home() {
  const [selectedCourseId, setSelectedCourseId] = useState("junior");
  const [settings, setSettings] = useState({
    whatsapp_number: "6282382872411",
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

  const handleSelectClass = (courseId: string) => {
    setSelectedCourseId(courseId);
  };

  return (
    <main className="min-h-screen bg-[#E3EFE1] py-0 sm:py-6">
      <div className="brochure-container relative overflow-hidden bg-[#F4FAF2]">
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
          defaultCourseId={selectedCourseId}
          whatsappNumber={settings.whatsapp_number}
        />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Footer with Contacts & Location */}
        <Footer whatsappNumber={settings.whatsapp_number} />

        {/* Sticky Mobile WhatsApp Bar */}
        <StickyWhatsApp
          whatsappNumber={settings.whatsapp_number}
          priceCurrent={settings.price_current}
        />
      </div>
    </main>
  );
}
