import { MARQUEE_TEXT } from "../constants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Marquee = () => {
  const [scrollDirection, setScrollDirection] = useState("left");
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling downwards
        setScrollDirection("right");
      } else {
        // Scrolling upwards
        setScrollDirection("left");
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <div className="mt-4 w-full bg-customText text-customText2 lg:py-6 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        initial={{ x: scrollDirection === "left" ? "0%" : "-100%" }}
        animate={{ x: scrollDirection === "left" ? "-100%" : "0%" }}
        transition={{
          duration: 10, 
          ease: "linear",
          repeat: Infinity,
        }}
      >
        
        {[...Array(3)].map((_, index) => (
          <span
            key={index}
            className="py-2 text-3xl font-bold leading-none tracking-tighter lg:text-7xl mx-4"
          >
            {MARQUEE_TEXT}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
