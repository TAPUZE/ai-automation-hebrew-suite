
import React from "react";
import { Mic, Database, FileText, MessageSquare, Phone, Zap } from "lucide-react";

const FeaturesList = () => {
  const features = [
    {
      icon: <Mic className="h-12 w-12 text-brand" />,
      title: "הקלטת שיחות אוטומטית",
      description: 
        "המערכת שלנו מקליטה באופן אוטומטי כל שיחה נכנסת ויוצאת, מאפשרת תיעוד מלא של כל התקשורת עם הלקוח. אין צורך להתקין תוכנות הקלטה נוספות או לבצע פעולות נוספות."
    },
    {
      icon: <Zap className="h-12 w-12 text-brand" />,
      title: "מיצוי מידע באמצעות AI",
      description: 
        "מנוע הבינה המלאכותית המתקדם שלנו מנתח את תוכן השיחה ומחלץ באופן אוטומטי את כל הפרטים החשובים - פרטי הלקוח, דרישות, מחירים ומידע חיוני אחר."
    },
    {
      icon: <Database className="h-12 w-12 text-brand" />,
      title: "אינטגרציה מלאה ל-CRM",
      description: 
        "כל המידע שנאסף מהשיחות מסונכרן אוטומטית למערכת ה-CRM שלך. המערכת תומכת במגוון פלטפורמות CRM מובילות, כולל Salesforce, HubSpot, Zoho, ומערכות ייעודיות לשוק הישראלי."
    },
    {
      icon: <FileText className="h-12 w-12 text-brand" />,
      title: "יצירת הצעות מחיר וטפסי הזמנה",
      description: 
        "בהתבסס על המידע שנאסף מהשיחה, המערכת מייצרת באופן אוטומטי הצעות מחיר מפורטות וטפסי הזמנה מותאמים אישית, מוכנים לשליחה ללקוח."
    },
    {
      icon: <FileText className="h-12 w-12 text-brand" />,
      title: "עדכון היסטוריית לקוח",
      description: 
        "המערכת מתעדת ומעדכנת באופן אוטומטי את היסטוריית הלקוח ב-CRM, כולל פרטי שיחות, בקשות מיוחדות, מסמכים ופרטי מעקב, המאפשרים שירות רציף ומקצועי."
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-brand" />,
      title: "התראות וואטסאפ למנהל",
      description: 
        "המערכת שולחת התראות וואטסאפ מיידיות למנהל עם סיכום השיחה, כולל פרטי הלקוח, דרישות, והפעולות שבוצעו. ניתן להגדיר כללים לסינון ההתראות לפי חשיבות ועדיפות."
    },
    {
      icon: <Phone className="h-12 w-12 text-brand" />,
      title: "אינטגרציה מלאה לטלפון נייד",
      description: 
        "המערכת מתממשקת באופן מלא עם הטלפון הנייד של אנשי המכירות והשירות, מאפשרת גישה לכל המידע והפונקציונליות גם בשטח וגם במשרד."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="tech-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex flex-col mb-4 items-start">
                <div className="mb-4 p-3 bg-brand bg-opacity-10 rounded-xl">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-right">{feature.title}</h3>
                <p className="text-gray-600 text-right leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesList;
