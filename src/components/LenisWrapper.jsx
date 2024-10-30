/* eslint-disable react/prop-types */
import Lenis from 'lenis';
import { useEffect, useRef } from 'react';

const LenisWrapper = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Set up Lenis for smooth scrolling
    lenisRef.current = new Lenis({
      duration: 2.5,
      easing: (t) => 1 - Math.pow(1 - t, 3), 
      smooth: true, 
      gestureMultiplier: 1,
      wheelMultiplier: 1.5, 
      touchMultiplier: 1.2, 
      lerp: 0.1, 
    });

    const scroll = (time) => {
      lenisRef.current.raf(time);
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);

    return () => {
      lenisRef.current.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default LenisWrapper;