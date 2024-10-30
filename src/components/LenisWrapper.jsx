/* eslint-disable react/prop-types */
// LenisWrapper.jsx
import Lenis from 'lenis';
import { useEffect, useRef } from 'react';

const LenisWrapper = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: .5, // Scroll duration in seconds
      easing: (t) => Math.min(1, 1.5 * t), // Easing function
      smooth: true, // Enable smooth scrolling
      orientation: 'vertical', // Scroll orientation
    });

    const scroll = (time) => {
      lenisRef.current.raf(time); // Request Animation Frame
      requestAnimationFrame(scroll); // Recursive scroll
    };

    requestAnimationFrame(scroll); // Start the animation loop

    return () => {
      lenisRef.current.destroy(); // Cleanup on unmount
    };
  }, []);

  return <>{children}</>;
};

export default LenisWrapper;