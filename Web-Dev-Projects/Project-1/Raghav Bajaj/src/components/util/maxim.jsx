import React, { useState, useEffect } from "react";

const Maxim = () => {
  const text = "Discover joy in simplicity - like a child like!";
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const startScroll = 100;
      const endScroll = 600;
      const totalScroll = endScroll - startScroll;

      // highlight index based on scroll
      if (window.scrollY < startScroll) {
        setHighlightIndex(0);
      } else if (window.scrollY > endScroll) {
        setHighlightIndex(text.length);
      } else {
        // highlight progress
        const scrollProgress = (window.scrollY - startScroll) / totalScroll;
        const newHighlightIndex = Math.floor(scrollProgress * text.length);
        setHighlightIndex(newHighlightIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [text.length]);

  return (
    <h1 className="mb-20 text-center text-4xl">
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className={`transition-colors duration-300 ${
            index < highlightIndex ? "text-[#e8fae5]" : "text-gray-700"
          }`}
        >
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default Maxim;
