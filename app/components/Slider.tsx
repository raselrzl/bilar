import { useEffect, useState } from "react";

const images = ["/hi1.webp", "/hi2.webp", "/karaven1.jpg"];

export default function CarImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:col-span-2 h-[200px] md:h-[300px]">
      <div className="relative w-full h-full overflow-hidden">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Car ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
