'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

const images = [
  '/placeholder1.png',
  '/placeholder2.png',
  '/placeholder3.png',
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000); // Slide akan berpindah setiap 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Container Slide */}
      <div className="overflow-hidden rounded-2xl relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, idx) => (
            <div key={idx} className="min-w-full h-[300px] relative">
              <Image
                src={src}
                alt={`slide-${idx}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pointer Dots - berada di luar border carousel */}
      <div className="mt-4 flex justify-end pr-3 gap-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={clsx(
              'h-3 rounded-full transition-all',
              current === idx ? 'bg-orange-500' : 'bg-gray-300'
            )}
            style={{
              width: current === idx ? 50 : 10, // ⚙️ Atur panjang dot di sini
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
