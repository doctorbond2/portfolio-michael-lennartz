import { SlideShowProps } from '@/types/types';
import Image from 'next/image';
export default function ImageSlideShow({ images }: SlideShowProps) {
  const imageLoop = images.map((image, index) => (
    <Image
      key={index}
      src={image}
      alt={`Image ${index + 1}`}
      className={`absolute inset-0 w-full h-full object-cover opacity-0 animate-slideshow${
        index >= 1 && '-' + index * 3000
      }`}
      width={300}
      height={300}
    />
  ));
  return <div className="relative h-[300px] w-[300px]">{imageLoop}</div>;
}
