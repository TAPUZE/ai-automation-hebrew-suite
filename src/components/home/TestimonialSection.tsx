
import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "מערכת האוטומציה חסכה לנו שעות עבודה בכל יום ושיפרה את שירות הלקוחות שלנו באופן דרמטי.",
      author: "רון לוי",
      company: "לוי נכסים",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote: "החיבור למערכת ה-CRM שלנו היה פשוט וההתראות בוואטסאפ עוזרות לנו להגיב מהר יותר ללקוחות.",
      author: "מיכל כהן",
      company: "שירותי הובלות כהן",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote: "הפקת ההצעות האוטומטיות והסנכרון עם היסטוריית הלקוחות חוסכים לנו זמן יקר ומשאבים רבים.",
      author: "דוד ישראלי",
      company: "פתרונות לעסקים",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
    },
  ];

  return (
    <section className="section-padding bg-brand text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-medium mb-4">מה לקוחות אומרים עלינו</h2>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            עסקים מובילים בישראל כבר נהנים מפתרון האוטומציה המתקדם שלנו
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm border border-white border-opacity-20"
            >
              <div className="flex items-start mb-6">
                <svg className="h-8 w-8 text-white opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391h-3.498L12.319 8h-3.975L6 13.609V21h8.017zM7.574 18.426h-1.17V13.61L8.396 10.5h1.453l-1.638 3.519h1.226v4.407h-1.863zm7.254-3.509h-1.637l1.957-4.417h-1.645V8h3.975l-2.65 6.926zm-3.772 3.509h-1.17V13.61l1.992-3.11h1.453l-1.638 3.519h1.226v4.407h-1.863z" />
                </svg>
              </div>
              <p className="text-lg mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full ml-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm opacity-80">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
