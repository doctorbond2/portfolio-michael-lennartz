'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function ImageSlideShow({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="border-2 border-black relative md:w-[80%] md:h-[60%] lg:h-[80%] lg:w-[90%] xl:w-[80%] xl:h-[90%] overflow-hidden rounded-lg md:mr-20 max-h-[90%]">
      {images.length > 1 && (
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded z-10"
        >
          &lt;
        </button>
      )}
      {images.length > 1 && (
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded z-10"
        >
          &gt;
        </button>
      )}

      <div className="relative w-full h-full bg-slate-600 p-8">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
