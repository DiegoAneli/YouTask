import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-lg text-white transform hover:scale-105 transition-transform duration-300">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Card;
