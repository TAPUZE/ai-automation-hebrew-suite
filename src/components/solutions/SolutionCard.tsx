
import React from "react";
import { motion } from "framer-motion";

interface SolutionCardProps {
  title: string;
  description: string;
  benefits: string[];
  imageSrc: string;
  id: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, benefits, imageSrc, id }) => {
  return (
    <div id={id} className="tech-card mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-bold mb-4 text-right">{title}</h3>
          <p className="text-gray-600 mb-6 text-right leading-relaxed">{description}</p>
          
          <div className="space-y-3">
            <h4 className="font-bold text-lg text-right">יתרונות:</h4>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center justify-end">
                  <span className="text-gray-700 text-right">{benefit}</span>
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white ml-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="order-1 md:order-2">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
