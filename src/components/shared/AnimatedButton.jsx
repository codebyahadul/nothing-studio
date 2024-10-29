/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedButton = ({ size = 'text-sm md:text-xl', text, name, onHoverEffect = true, onClick }) => {
    const buttonRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        const animatedText = button.querySelector(".animated-text");

        if (onHoverEffect) {
            const handleMouseEnter = () => {
                gsap.fromTo(
                    animatedText,
                    { y: "100%", opacity: 0, rotation: 10 },
                    { y: "0%", opacity: 1, duration: 0.3, rotation: 0, zIndex: 80, color: '#d9d9d9cc' }
                );
                gsap.to('.static-text', {opacity: 0})
                gsap.to('.cursor', { scale: 6, duration: 0.3, opacity: 0.5 });
            };

            const handleMouseLeave = () => {
                gsap.fromTo(
                    animatedText,
                    { y: "-100%", opacity: 0 },
                    { y: "0%", opacity: 1, duration: 0.3, color: '#d9d9d9' }
                );
                gsap.to('.cursor', { scale: 1, duration: 0.3, opacity: 1 });
            };

            button.addEventListener("mouseenter", handleMouseEnter);
            button.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                button.removeEventListener("mouseenter", handleMouseEnter);
                button.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, [onHoverEffect]);

    return (
        <button
            onClick={onClick}
            ref={buttonRef}
            className={`${size} text-[#d9d9d9] uppercase relative overflow-hidden ${name}`}
        >
            <div className="absolute w-full h-full bg-transparent z-50"></div>
            <div className="static-text ">{text}</div>
            <div className="animated-text absolute top-0 left-0">{text}</div>
        </button>
    );
};

export default AnimatedButton;
