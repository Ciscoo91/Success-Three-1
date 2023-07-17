import React, { useState, useEffect } from "react";

const images = [
  {
    original: "images/christina-wocintechchat-com-0Nfqp0WiJqc-unsplash.jpg",
    thumbnail: "https://picsum.photos/id/668/250/150/",
  },
  {
    original: "images/uk-black-tech-dfmsZyFVi_I-unsplash.jpg",
    thumbnail: "https://picsum.photos/id/802/250/150/",
  },
  {
    original: "images/uk-black-tech-uZyE3w7khzw-unsplash.jpg",
    thumbnail: "https://picsum.photos/id/60/250/150/",
  },
];

export default function HeroGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(changeImage, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <img
          key={index}
          className={`carousel-image ${
            index === currentIndex ? "current" : ""
          }`}
          src={image.original}
          alt={`carousel items`}
        />
      ))}
    </div>
  );
}
