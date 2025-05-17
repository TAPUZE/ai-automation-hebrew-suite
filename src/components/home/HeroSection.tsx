
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-right mb-6">
              <span className="gradient-text">האוטומציה החכמה</span> לעסקים מתקדמים
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              מערכת אוטומציה מבוססת AI שתשנה את האופן בו העסק שלך מנהל לקוחות. מהקלטת שיחות ועד אינטגרציה מלאה ל-CRM, הכל אוטומטי.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-brand hover:bg-brand-dark text-white text-lg px-6 py-6">
                קבע הדגמה חינם
              </Button>
              <Button variant="outline" className="text-lg px-6 py-6 border-brand text-brand hover:bg-brand hover:text-white flex items-center">
                <span>גלה עוד</span>
                <ArrowLeft className="mr-2 h-5 w-5 rtl-flip" />
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="relative mx-auto max-w-md lg:max-w-full">
              <div className="aspect-video relative bg-white p-2 rounded-2xl shadow-2xl overflow-hidden">
                {/* Replace with actual demo video or animation */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                  <svg className="w-16 h-16 text-brand" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              
              {/* Floating tech cards */}
              <div className="absolute -top-4 -left-4 bg-white p-3 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white mr-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">לקוח נשמר ב-CRM</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white ml-2">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">התראת וואטסאפ נשלחה</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="hidden lg:block absolute top-20 left-10 w-72 h-72 bg-brand opacity-5 rounded-full filter blur-3xl"></div>
      <div className="hidden lg:block absolute bottom-20 right-10 w-80 h-80 bg-blue-400 opacity-5 rounded-full filter blur-3xl"></div>
    </div>
  );
};

export default HeroSection;
