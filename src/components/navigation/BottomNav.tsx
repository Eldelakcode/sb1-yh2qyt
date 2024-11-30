import React from 'react';
import { Home, Search, Heart, User } from 'lucide-react';

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around py-3">
        <button className="p-2">
          <Home className="w-6 h-6 text-orange-500" />
        </button>
        <button className="p-2">
          <Search className="w-6 h-6 text-gray-400" />
        </button>
        <button className="p-2">
          <Heart className="w-6 h-6 text-gray-400" />
        </button>
        <button className="p-2">
          <User className="w-6 h-6 text-gray-400" />
        </button>
      </div>
    </nav>
  );
}