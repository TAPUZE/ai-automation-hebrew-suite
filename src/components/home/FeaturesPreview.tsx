
import React from "react";
import { Mic, Database, MessageSquare, FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturesPreview = () => {
  const features = [
    {
      icon: <Mic className="h-8 w-8 text-brand" />,
      title: "הקלטת שיחות אוטומטית",
      description: "הקלטה אוטומטית של כל שיחת לקוח לתיעוד ושירות מיטבי",
    },
    {
      icon: <Database className="h-8 w-8 text-brand" />,
      title: "אינטגרציה מלאה ל-CRM",
      description: "סנכרון אוטומטי של כל נתוני הלקוח למערכת ה-CRM שלך",
    },
    {
      icon: <FileText className="h-8 w-8 text-brand" />,
      title: "יצירת הצעות מחיר",
      description: "יצירה אוטומטית של הצעות מחיר בהתאם לדרישות הלקוח",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-brand" />,
      title: "התראות וואטסאפ",
      description: "שליחת עדכונים אוטומטיים למנהל דרך וואטסאפ",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-medium mb-4">
            <span className="gradient-text">הכלי המושלם</span> לאוטומציה מלאה
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            מערכת האוטומציה החכמה שלנו מפשטת את כל תהליכי העבודה עם לקוחות ומאפשרת לעסק שלך להתמקד בצמיחה
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="tech-card"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-right">{feature.title}</h3>
              <p className="text-gray-600 text-right">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/features"
            className="inline-flex items-center text-brand hover:text-brand-dark font-medium"
          >
            גלה את כל היכולות שלנו
            <ArrowLeft className="mr-2 h-5 w-5 rtl-flip" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesPreview;
