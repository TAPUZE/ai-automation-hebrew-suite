
import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesPreview from "@/components/home/FeaturesPreview";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import CtaSection from "@/components/home/CtaSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesPreview />
      <ProcessSection />
      <TestimonialSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
