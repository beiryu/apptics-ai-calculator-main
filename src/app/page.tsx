"use client";

import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";

// Import only above-the-fold components directly for immediate rendering
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";

// Dynamically import below-the-fold components with loading placeholders
const Comparison = dynamic(() => import("@/components/Comparison"), {
  loading: () => <div className="w-full h-96 bg-gray-100 animate-pulse rounded-xl" />,
});

const Onboarding = dynamic(() => import("@/components/Onboarding"), {
  loading: () => <div className="w-full h-80 bg-gray-100 animate-pulse rounded-xl" />,
});

const CaseStudies = dynamic(() => import("@/components/CaseStudies"), {
  loading: () => <div className="w-full h-64 bg-gray-100 animate-pulse rounded-xl" />,
});

const SubCalculator = dynamic(() => import("@/components/SubCalculator"), {
  ssr: false, // Disable SSR for interactive components
  loading: () => <div className="w-full h-96 bg-gray-100 animate-pulse rounded-xl" />,
});

// These components are far below the fold, so we can load them later
const Pricing = dynamic(() => import("@/components/Pricing"));
const OurTeam = dynamic(() => import("@/components/OurTeam"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Faqs = dynamic(() => import("@/components/Faqs"));
const Cta = dynamic(() => import("@/components/Cta"));

// Create a component that loads when it's visible in viewport
const LazyLoadComponent = ({
  children,
  height = "h-64",
  id = "lazy-section",
}: {
  children: React.ReactNode;
  height?: string;
  id: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    const currentElement = document.getElementById(id);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.disconnect();
      }
    };
  }, [id]);

  return (
    <div id={id} className={`w-full ${!isVisible ? height : ""}`}>
      {isVisible ? (
        children
      ) : (
        <div className={`w-full ${height} bg-gray-100 animate-pulse rounded-xl`} />
      )}
    </div>
  );
};

const DesktopV3: NextPage = () => {
  return (
    <div className="w-full relative bg-whitesmoke-400 overflow-hidden flex flex-col items-start justify-start text-center text-base text-gray-1400 font-inter">
      {/* Prioritize critical above-the-fold content */}
      <Hero />
      <Features />
      <Benefits />

      {/* Load when scrolled into view with suspense boundaries */}
      <Suspense fallback={<div className="w-full h-96 bg-gray-100 animate-pulse rounded-xl" />}>
        <Comparison />
      </Suspense>

      <Suspense fallback={<div className="w-full h-80 bg-gray-100 animate-pulse rounded-xl" />}>
        <Onboarding />
      </Suspense>

      <Suspense fallback={<div className="w-full h-64 bg-gray-100 animate-pulse rounded-xl" />}>
        <CaseStudies />
      </Suspense>

      {/* Calculator needs client-side interaction, loaded without SSR */}
      <SubCalculator />

      {/* Components far below the fold with intersection observer */}
      <LazyLoadComponent height="h-96" id="pricing-section">
        <Pricing />
      </LazyLoadComponent>

      <LazyLoadComponent height="h-80" id="team-section">
        <OurTeam />
      </LazyLoadComponent>

      <LazyLoadComponent height="h-64" id="testimonials-section">
        <Testimonials />
      </LazyLoadComponent>

      <LazyLoadComponent height="h-96" id="faqs-section">
        <Faqs />
      </LazyLoadComponent>

      <LazyLoadComponent height="h-64" id="cta-section">
        <Cta />
      </LazyLoadComponent>
    </div>
  );
};

export default DesktopV3;
