import React from 'react';
import { Bell, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <button className="p-2">
        <Menu className="w-6 h-6 text-gray-800" />
      </button>
      <button className="p-2">
        <Bell className="w-6 h-6 text-gray-800" />
      </button>
    </header>
  );
}