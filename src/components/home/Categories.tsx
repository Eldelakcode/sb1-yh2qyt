import React from 'react';
import { Pizza, Beef, Coffee, Wine } from 'lucide-react';

const categories = [
  { icon: Beef, label: 'Burger' },
  { icon: Pizza, label: 'Pizza' },
  { icon: Coffee, label: 'Drinks' },
  { icon: Wine, label: 'Meat' },
];

export function Categories() {
  return (
    <div className="px-4 mb-8">
      <div className="flex justify-between">
        {categories.map((category) => (
          <button
            key={category.label}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
              <category.icon className="w-8 h-8" />
            </div>
            <span className="text-sm">{category.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}