
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="bg-gradient-tech text-white p-10 md:p-16 rounded-2xl relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              מוכנים לשדרג את העסק שלכם עם אוטומציה חכמה?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              קבעו הדגמה חינם ללא התחייבות וגלו איך המערכת שלנו יכולה לחסוך לכם זמן, כסף וכאב ראש.
            </p>
            <Button size="lg" className="bg-white text-brand hover:bg-gray-100 hover:text-brand-dark text-lg px-8 py-6 flex items-center mx-auto">
              <Calendar className="ml-2 h-5 w-5" />
              קבע הדגמה עכשיו
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
