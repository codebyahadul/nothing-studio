/* eslint-disable react/prop-types */
// AnimatedButton.jsx
import { useEffect } from "react";
import gsap from "gsap";

const AnimatedButton = ({ text }) => {
    useEffect(() => {
        const button = document.querySelector(`.${text.replace(/[\[\]\s]/g, "")}`);
        
        // Hover effect for sliding text animation
        button.addEventListener("mouseenter", () => {
            gsap.fromTo(
                button.querySelector(".animated-text"),
                { y: "100%", opacity: 0, rotation: 10 },
                { y: "0%", opacity: 1, duration: 0.3, rotation: 0 }
            );
        });

        button.addEventListener("mouseleave", () => {
            gsap.fromTo(
                button.querySelector(".animated-text"),
                { y: "-100%", opacity: 1 },
                { y: "0%", opacity: 0, duration: 0.3 }
            );
        });
    }, [text]);

    return (
        <button
            className={`text-xl text-[#d9d9d9] uppercase relative overflow-hidden hover-effect ${text.replace(/[\[\]\s]/g, "")}`}
        >
            <div className="static-text">{text}</div>
            <div className="animated-text absolute top-0 left-0">{text}</div>
        </button>
    );
};

export default AnimatedButton;
