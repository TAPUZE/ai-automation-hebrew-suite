
import React from "react";
import Layout from "@/components/layout/Layout";
import SolutionCard from "@/components/solutions/SolutionCard";
import CtaSection from "@/components/home/CtaSection";

const Solutions = () => {
  const solutions = [
    {
      id: "real-estate",
      title: "פתרונות לענף הנדל״ן",
      description: "מערכת האוטומציה שלנו מייעלת את תהליך המכירה והשירות בענף הנדל״ן, מהצעד הראשון ועד סגירת העסקה. המערכת מסייעת בניהול לידים, מעקב אחר התקדמות עסקאות, ותיעוד כל התקשורת עם הלקוח.",
      benefits: [
        "תיעוד אוטומטי של כל שיחה עם לקוחות פוטנציאליים",
        "יצירת הצעות מחיר ומסמכי עסקה מותאמים אישית באופן אוטומטי",
        "סנכרון מלא עם מערכות CRM ייעודיות לנדל״ן",
        "התראות בזמן אמת על התעניינות גבוהה או שינויים בעסקה"
      ],
      imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "services",
      title: "פתרונות לנותני שירות",
      description: "עבור חברות שירות, המערכת שלנו מאפשרת ניהול יעיל של פניות לקוחות, תיעוד בעיות והפתרונות שניתנו, ומעקב אחר שביעות רצון הלקוחות לאורך זמן. אנו מפשטים את תהליכי העבודה השגרתיים כדי לפנות זמן למה שחשוב באמת – מתן שירות איכותי.",
      benefits: [
        "תיעוד אוטומטי של כל פניית שירות ובקשה",
        "מעקב אחר זמני תגובה והתקדמות הטיפול בפניות",
        "סנכרון נתונים עם מערכות ניהול שירות ותמיכה",
        "שיפור זמני התגובה וחווית השירות ללקוחות"
      ],
      imageSrc: "https://images.unsplash.com/photo-1521791055366-0d553381c014?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "logistics",
      title: "פתרונות ללוגיסטיקה והובלות",
      description: "חברות לוגיסטיקה והובלות נהנות מהיכולת של המערכת שלנו לתעד הזמנות באופן מדויק, לעקוב אחר תהליכי משלוח, ולנהל תיאום ושינויים בזמן אמת. האוטומציה מפחיתה טעויות אנוש ומאפשרת מתן מידע מדויק ללקוחות.",
      benefits: [
        "תיעוד מדויק של פרטי הזמנה ודרישות מיוחדות",
        "יצירת אוטומטית של מסמכי משלוח והובלה",
        "התראות בזמן אמת על שינויים בלוח הזמנים",
        "סנכרון נתונים עם מערכות ניהול צי רכב ומעקב משלוחים"
      ],
      imageSrc: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-tech text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              פתרונות אוטומציה מותאמים לענפים שונים
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              המערכת שלנו מותאמת למגוון רחב של תעשיות וענפים עם דגש על הצרכים הייחודיים של כל תחום
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              id={solution.id}
              title={solution.title}
              description={solution.description}
              benefits={solution.benefits}
              imageSrc={solution.imageSrc}
            />
          ))}
        </div>
      </section>

      <CtaSection />
    </Layout>
  );
};

export default Solutions;
