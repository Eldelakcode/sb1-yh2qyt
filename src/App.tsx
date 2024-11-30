import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Categories } from './components/home/Categories';
import { PopularFoods } from './components/home/PopularFoods';
import { BottomNav } from './components/navigation/BottomNav';

function App() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <Header />
      <main>
        <Hero />
        <Categories />
        <PopularFoods />
      </main>
      <BottomNav />
    </div>
  );
}

export default App;