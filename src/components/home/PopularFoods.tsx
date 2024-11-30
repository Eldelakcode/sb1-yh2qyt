import React from 'react';

const popularItems = [
  {
    title: 'French Fries',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=500',
    bgColor: 'bg-orange-500',
  },
  {
    title: 'Salad',
    price: 16.00,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
    bgColor: 'bg-green-500',
  },
];

export function PopularFoods() {
  return (
    <div className="px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Popular Foods</h2>
        <span className="text-gray-500">01:18</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {popularItems.map((item) => (
          <div
            key={item.title}
            className={`${item.bgColor} rounded-2xl p-4 text-white`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="font-medium mb-2">{item.title}</h3>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">${item.price.toFixed(2)}</span>
              <button className="bg-white text-black px-3 py-1 rounded-full text-sm">
                Buy now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}