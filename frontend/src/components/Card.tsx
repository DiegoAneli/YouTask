'use client';

import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <div className="flex justify-center pt-4">
        <img className="h-16 w-16" src="/" alt="Logo" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
        <div className="text-gray-700 text-base">{children}</div>
      </div>
    </div>
  );
};

export default Card;
