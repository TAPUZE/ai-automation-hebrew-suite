
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Demo = () => {
  const { toast } = useToast();
  const [demoType, setDemoType] = useState("video");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "בקשה לדמו נשלחה בהצלחה",
      description: "נציג יצור איתך קשר בהקדם לתיאום הדגמה. תודה!",
    });
  };

  const demoTimes = [
    { day: "יום ראשון", times: ["9:00", "11:00", "13:00", "15:00"] },
    { day: "יום שני", times: ["9:00", "11:00", "13:00", "15:00"] },
    { day: "יום שלישי", times: ["9:00", "11:00", "13:00", "15:00"] },
    { day: "יום רביעי", times: ["9:00", "11:00", "13:00", "15:00"] },
    { day: "יום חמישי", times: ["9:00", "11:00", "13:00", "15:00"] },
  ];

  return (
    <Layout>
      <div className="bg-gradient-tech text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">תיאום הדגמה</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              ראה בעצמך איך מערכת האוטומציה המתקדמת שלנו יכולה לשפר את העסק שלך
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="tech-card">
            <h2 className="heading-medium mb-6 text-center">בחר את סוג ההדגמה המועדף עליך</h2>
            
            <RadioGroup defaultValue="video" className="flex justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 space-x-reverse" onClick={() => setDemoType("video")}>
                <RadioGroupItem value="video" id="video" className="ml-2" />
                <Label htmlFor="video" className="cursor-pointer text-lg">הדגמת וידאו</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse" onClick={() => setDemoType("zoom")}>
                <RadioGroupItem value="zoom" id="zoom" className="ml-2" />
                <Label htmlFor="zoom" className="cursor-pointer text-lg">הדגמת זום אישית</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse" onClick={() => setDemoType("office")}>
                <RadioGroupItem value="office" id="office" className="ml-2" />
                <Label htmlFor="office" className="cursor-pointer text-lg">הדגמה במשרד</Label>
              </div>
            </RadioGroup>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="block text-gray-700 text-right">
                    שם מלא *
                  </label>
                  <Input
                    id="name"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg text-right"
                    placeholder="הכנס את שמך המלא"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="company" className="block text-gray-700 text-right">
                    שם החברה *
                  </label>
                  <Input
                    id="company"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg text-right"
                    placeholder="הכנס את שם החברה"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="email" className="block text-gray-700 text-right">
                    דוא"ל *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg text-right"
                    placeholder="הכנס את כתובת הדוא"ל שלך"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="phone" className="block text-gray-700 text-right">
                    מספר טלפון *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg text-right"
                    placeholder="הכנס את מספר הטלפון שלך"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label htmlFor="industry" className="block text-gray-700 text-right">
                  תחום העיסוק של החברה *
                </label>
                <Input
                  id="industry"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg text-right"
                  placeholder="לדוגמא: נדל״ן, שירות לקוחות, לוגיסטיקה וכו׳"
                />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="message" className="block text-gray-700 text-right">
                  הערות נוספות
                </label>
                <Textarea
                  id="message"
                  className="w-full p-3 border border-gray-300 rounded-lg text-right"
                  rows={3}
                  placeholder="ספר לנו קצת על הצרכים של העסק שלך"
                />
              </div>
              
              {(demoType === "zoom" || demoType === "office") && (
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="font-bold mb-4 text-right flex items-center">
                    <Calendar className="ml-2 h-5 w-5 text-brand" />
                    בחירת מועד מועדף
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {demoTimes.map((dayItem, dayIndex) => (
                      <div key={dayIndex} className="text-center">
                        <h4 className="font-medium mb-2 bg-gray-100 py-2 rounded">{dayItem.day}</h4>
                        <div className="space-y-2">
                          {dayItem.times.map((time, timeIndex) => (
                            <div 
                              key={timeIndex}
                              className="flex items-center justify-center p-2 cursor-pointer rounded border border-gray-200 hover:bg-brand hover:text-white hover:border-brand transition-colors"
                            >
                              <Clock className="ml-1 h-4 w-4" />
                              <span>{time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <Button type="submit" className="w-full bg-brand hover:bg-brand-dark text-white py-6">
                {demoType === "video" ? "קבל גישה להדגמת וידאו" : "תאם הדגמה"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Demo;
