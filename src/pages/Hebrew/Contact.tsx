
import React from "react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "פנייה נשלחה בהצלחה",
      description: "נחזור אליכם בהקדם האפשרי. תודה!",
    });
  };

  return (
    <Layout>
      <div className="bg-gradient-tech text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">צור קשר</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              אנחנו כאן לענות על כל שאלה ולעזור לכם להפוך את העסק שלכם ליעיל יותר עם פתרונות האוטומציה שלנו
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="order-2 lg:order-1">
              <h2 className="heading-medium mb-8 text-right">
                <span className="gradient-text">השאירו פרטים</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="block text-gray-700 text-right">
                    שם מלא
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
                    שם החברה
                  </label>
                  <Input
                    id="company"
                    className="w-full p-3 border border-gray-300 rounded-lg text-right"
                    placeholder="הכנס את שם החברה"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="email" className="block text-gray-700 text-right">
                    דוא"ל
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg text-right"
                    placeholder="הכנס את כתובת הדוא״ל שלך"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="phone" className="block text-gray-700 text-right">
                    מספר טלפון
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg text-right"
                    placeholder="הכנס את מספר הטלפון שלך"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="message" className="block text-gray-700 text-right">
                    הודעה
                  </label>
                  <Textarea
                    id="message"
                    className="w-full p-3 border border-gray-300 rounded-lg text-right"
                    rows={4}
                    placeholder="כיצד נוכל לעזור לך?"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-brand hover:bg-brand-dark text-white py-6">
                  שלח פנייה
                </Button>
              </form>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="heading-medium mb-8 text-right">
                <span className="gradient-text">פרטי התקשרות</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="ml-4 p-3 bg-brand bg-opacity-10 rounded-lg">
                    <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1 text-right">כתובת</h3>
                    <p className="text-gray-600 text-right">רחוב הברזל 30, תל אביב, ישראל</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="ml-4 p-3 bg-brand bg-opacity-10 rounded-lg">
                    <Phone className="w-6 h-6 text-brand" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1 text-right">טלפון</h3>
                    <p className="text-gray-600 text-right">
                      <a href="tel:+972585315415" className="hover:text-brand">972-58-5315415+</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="ml-4 p-3 bg-brand bg-opacity-10 rounded-lg">
                    <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1 text-right">דוא"ל</h3>
                    <p className="text-gray-600 text-right">
                      <a href="mailto:office@holylandconnect.com" className="hover:text-brand">office@holylandconnect.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="ml-4 p-3 bg-brand bg-opacity-10 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-brand" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1 text-right">וואטסאפ</h3>
                    <p className="text-gray-600 text-right">
                      <a href="https://wa.me/972585315415" className="hover:text-brand">צור קשר בוואטסאפ</a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <div className="rounded-xl overflow-hidden h-64 shadow-lg">
                  <iframe
                    title="מפה"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.7006554718356!2d34.7959419!3d32.0855354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b7af328f89f%3A0x2ebcc283d00d25c9!2sHaBarzel%20St%2030%2C%20Tel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1652343707365!5m2!1sen!2sil"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
