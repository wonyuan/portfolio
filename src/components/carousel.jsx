import { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHoveredLeft, setHoveredLeft] = useState(false);
  const [isHoveredRight, setHoveredRight] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        <img key={currentIndex} src={images[currentIndex]} />
        <div className="slide_direction">
          <div
            className={`left ${isHoveredLeft ? "hovered" : ""}`}
            onClick={handlePrevious}
            onMouseEnter={() => setHoveredLeft(true)}
            onMouseLeave={() => setHoveredLeft(false)}
          >
            <svg
              className="left-logo"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
            </svg>
          </div>
          <div
            className={`right ${isHoveredRight ? "hovered" : ""}`}
            onClick={handleNext}
            onMouseEnter={() => setHoveredRight(true)}
            onMouseLeave={() => setHoveredRight(false)}
          >
            <svg
              className="right-logo"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="carousel-indicator">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
