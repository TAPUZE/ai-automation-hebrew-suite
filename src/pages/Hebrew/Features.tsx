
import React from "react";
import Layout from "@/components/layout/Layout";
import FeaturesList from "@/components/features/FeaturesList";
import CtaSection from "@/components/home/CtaSection";

const Features = () => {
  return (
    <Layout>
      <div className="bg-gradient-tech text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              היכולות של מערכת האוטומציה שלנו
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              גלה את כל הפיצ׳רים המתקדמים שיכולים להפוך את העסק שלך לחכם יותר, יעיל יותר, וריווחי יותר
            </p>
          </div>
        </div>
      </div>

      <FeaturesList />
      <CtaSection />
    </Layout>
  );
};

export default Features;
