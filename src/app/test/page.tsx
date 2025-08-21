import Benefits from "@/components/Benefits";
import Calculator from "@/components/Calculator";
import CaseStudies from "@/components/CaseStudies";
import Comparison from "@/components/Comparison";
import Cta from "@/components/cta";
import Faqs from "@/components/faqs";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Onboarding from "@/components/Onboarding";
import OurTeam from "@/components/OurTeam";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import type { NextPage } from "next";

const DesktopV3: NextPage = () => {
  return (
    <div className="w-full relative bg-whitesmoke-400 overflow-hidden flex flex-col items-start justify-start text-center text-base text-gray-1400 font-inter">
      {/* Hero */}
      <Hero />

      {/* Features */}
      <Features />

      {/* Benefits */}
      <Benefits />

      {/* Comparison */}
      <Comparison />

      {/* Onboarding */}
      <Onboarding />

      {/* Case Studies */}
      <CaseStudies />

      {/* Calculator */}
      <Calculator />

      {/* Pricing */}
      <Pricing />

      {/* Our Team */}
      <OurTeam />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQs */}
      <Faqs />

      {/* CTA */}
      <Cta />
    </div>
  );
};

export default DesktopV3;
