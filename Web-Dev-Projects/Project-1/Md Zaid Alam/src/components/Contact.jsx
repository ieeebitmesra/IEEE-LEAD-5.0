import { CONTACT, SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Contact = () => {
  const [isInView, setIsInView] = useState(false);
  const [animationKey, setAnimationKey] = useState(0); // State to force re-trigger animation on scroll
  const ref = useRef(null);

  // Using Intersection Observer API to detect when the element comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger animation when in view
          setAnimationKey(prevKey => prevKey + 1); // Force reset of animation by changing key
        } else {
          setIsInView(false); // Reset animation when out of view
        }
      },
      {
        threshold: 0.05, // Trigger when 10% of the section is in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section id="contact" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="my-10 text-center text-3xl lg:text-8xl text-customText2"
          key={animationKey} // Trigger a re-render and reset animation with the key change
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{
            delayChildren: 0.05, // Reduced delay to make it faster
            staggerChildren: 0.05, // Reduced stagger delay for faster stagger
            duration: 0.5, // Reduced duration to make the animation faster
          }}
        >
          {"Interested in Working Together?".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : -10,
              }}
              transition={{
                delay: index * 0.02, // Reduced delay to make letters appear faster
                type: "spring",
                stiffness: 100,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
        <p className="p-4 text-center text-xl">{CONTACT.text}</p>
        <p className="my-4 text-center text-2xl font-medium text-customText2 lg:pt-6 lg:text-5xl">
          <a
            href={`mailto:${CONTACT.email}`}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-customText transition-colors duration-500"
          >
            {CONTACT.email}
          </a>
        </p>
        <p className="my-4 text-center text-2xl font-medium text-customText2 lg:pt-6 lg:text-5xl">
          {CONTACT.phone}
        </p>
      </div>
      <div className="mt-20 flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-customText2"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="my-8 text-center text-customText2">&copy; Zaid Alam, All rights reserved.</p>
    </section>
  );
};

export default Contact;
