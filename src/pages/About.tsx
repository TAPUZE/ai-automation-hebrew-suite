
import React from "react";
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="bg-gradient-tech text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">אודות החברה</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              חברת טכנולוגיה ישראלית מובילה בפיתוח פתרונות אוטומציה חכמים
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="צוות החברה"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            
            <div>
              <h2 className="heading-medium mb-6 text-right">
                <span className="gradient-text">הסיפור שלנו</span>
              </h2>
              <p className="text-lg text-gray-700 mb-4 text-right leading-relaxed">
                חברת AutomateAI הוקמה בשנת 2020 על ידי צוות מהנדסים ומומחי AI מובילים בישראל, עם חזון להפוך את הטכנולוגיה המתקדמת ביותר לנגישה עבור עסקים מכל הגדלים.
              </p>
              <p className="text-lg text-gray-700 text-right leading-relaxed">
                לאחר שנים של פיתוח וניסיון בתחומי האוטומציה, הבינה המלאכותית ועיבוד שפה טבעית, פיתחנו את מערכת האוטומציה המלאה הראשונה שמשלבת הקלטת שיחות, עיבוד AI, ואינטגרציה מלאה למערכות CRM - הכל בממשק אחד פשוט וידידותי.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h2 className="heading-medium mb-6 text-right">
                <span className="gradient-text">החזון שלנו</span>
              </h2>
              <p className="text-lg text-gray-700 mb-4 text-right leading-relaxed">
                אנו מאמינים שהעתיד של עסקים מצליחים טמון באוטומציה חכמה של תהליכים ובשימוש מושכל בטכנולוגיות AI. החזון שלנו הוא לאפשר לכל עסק בישראל לאמץ טכנולוגיות מתקדמות באופן פשוט ואפקטיבי.
              </p>
              <p className="text-lg text-gray-700 text-right leading-relaxed">
                אנו שואפים להיות המובילים בתחום האוטומציה החכמה בישראל ולהפוך את הטכנולוגיה למנוע צמיחה משמעותי עבור לקוחותינו בכל הענפים.
              </p>
            </div>
            
            <div className="order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="חזון החברה"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="heading-medium mb-12 text-center">
              <span className="gradient-text">הערכים שלנו</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="tech-card text-center">
                <div className="w-16 h-16 rounded-full bg-brand bg-opacity-10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">מצוינות טכנולוגית</h3>
                <p className="text-gray-600">
                  אנחנו מחויבים למצוינות טכנולוגית בכל היבט של המוצר שלנו, מתוך הבנה שהפרטים הקטנים הם שעושים את ההבדל.
                </p>
              </div>

              <div className="tech-card text-center">
                <div className="w-16 h-16 rounded-full bg-brand bg-opacity-10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">חדשנות מתמדת</h3>
                <p className="text-gray-600">
                  אנו מאמינים בחדשנות מתמדת והשקעה במחקר ופיתוח כדי להבטיח שהפתרונות שלנו תמיד בחזית הטכנולוגיה.
                </p>
              </div>

              <div className="tech-card text-center">
                <div className="w-16 h-16 rounded-full bg-brand bg-opacity-10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">שירות לקוחות</h3>
                <p className="text-gray-600">
                  הלקוחות שלנו הם במרכז כל מה שאנחנו עושים. אנו מחויבים למתן שירות ברמה הגבוהה ביותר ותמיכה מקצועית ללא פשרות.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="heading-medium mb-6 text-center">
              <span className="gradient-text">הצוות שלנו</span>
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
              הצוות שלנו מורכב ממומחים מובילים בתחומי הטכנולוגיה, הבינה המלאכותית, ופיתוח תוכנה, עם ניסיון רב בענפי התעשייה השונים.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="tech-card">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="יוסי כהן"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-1">יוסי כהן</h3>
                <p className="text-gray-500 mb-4">מייסד ומנכ"ל</p>
                <p className="text-gray-600 text-center">
                  בעל ניסיון של 15 שנים בתחום הטכנולוגיה ופיתוח מערכות אוטומציה מורכבות.
                </p>
              </div>

              <div className="tech-card">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="מיכל לוי"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-1">מיכל לוי</h3>
                <p className="text-gray-500 mb-4">סמנכ"לית טכנולוגיות</p>
                <p className="text-gray-600 text-center">
                  מומחית AI ולמידת מכונה, עם רקע אקדמי מהטכניון וניסיון בחברות טכנולוגיה מובילות.
                </p>
              </div>

              <div className="tech-card">
                <img
                  src="https://randomuser.me/api/portraits/men/67.jpg"
                  alt="דוד אברהם"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-1">דוד אברהם</h3>
                <p className="text-gray-500 mb-4">מנהל פיתוח עסקי</p>
                <p className="text-gray-600 text-center">
                  בעל ניסיון עשיר בליווי עסקים וייעוץ אסטרטגי בתחום האוטומציה והדיגיטציה.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
