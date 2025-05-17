
import React from "react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "הקלטת שיחה",
      description: "המערכת מקליטה באופן אוטומטי כל שיחת לקוח נכנסת",
    },
    {
      number: "02",
      title: "עיבוד AI",
      description: "בינה מלאכותית מתקדמת מחלצת את המידע החשוב מהשיחה",
    },
    {
      number: "03",
      title: "יצירת מסמכים",
      description: "המערכת מייצרת הצעות מחיר וטפסי הזמנה באופן אוטומטי",
    },
    {
      number: "04",
      title: "עדכון CRM",
      description: "כל המידע והמסמכים מסונכרנים אוטומטית למערכת ה-CRM",
    },
    {
      number: "05",
      title: "התראות",
      description: "שליחת התראות למנהל על התקדמות ועדכונים בזמן אמת",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-medium mb-4">
            <span className="gradient-text">איך זה עובד?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            תהליך האוטומציה המלא שלנו מפשט את העבודה שלך עם לקוחות מהרגע הראשון
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2 h-1 bg-gray-200"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="tech-card text-center">
                  <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
