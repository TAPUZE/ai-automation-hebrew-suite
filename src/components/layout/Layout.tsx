
import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HolyLand Connect Software Solutions",
    "url": "https://holylandconnect.com",
    "logo": "https://holylandconnect.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+972585315415",
      "contactType": "customer service",
      "email": "office@holylandconnect.com",
      "availableLanguage": ["Hebrew", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "HaBarzel 30",
      "addressLocality": "Tel Aviv",
      "addressRegion": "TA",
      "postalCode": "6971036",
      "addressCountry": "IL"
    },
    "sameAs": [
      "https://www.linkedin.com/company/holylandconnect/",
      "https://www.facebook.com/holylandconnect/"
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        {title && <title>{title} | HolyLand Connect</title>}
        {description && <meta name="description" content={description} />}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
