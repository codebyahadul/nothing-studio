import { useEffect } from "react";
import gsap from "gsap";
const Navbar = () => {
    useEffect(() => {
        const tl = gsap.timeline();

        // Initial animation for logo and menu buttons on page load
        tl.from(".logo .static-text", { x: -50, opacity: 0, duration: 1 });
        tl.from(".menu .static-text", { x: 50, opacity: 0, duration: 1 }, "<");

        // Hover effect for sliding text animation
        document.querySelectorAll(".hover-effect").forEach((button) => {
            const animatedText = button.querySelector(".animated-text");
            button.addEventListener("mouseenter", () => {
                gsap.fromTo(
                    animatedText,
                    { y: "100%", opacity: 0, rotation: 10, },
                    { y: "0%", opacity: 1, duration: 0.3, rotation: 0, zIndex: 80, color: '#d9d9d9cc'}
                );
                gsap.to('.cursor', { scale: 5, duration: 0.3, opacity: 1 });
            });

            button.addEventListener("mouseleave", () => {
                gsap.fromTo(
                    animatedText,
                    { y: "-100%", opacity: 0, },
                    { y: "0%", opacity: 1, duration: 0.3, color: '#d9d9d9' }
                );
                gsap.to('.cursor', { scale: 1, duration: 0.3, opacity: 1 });
            });
        });

    }, []);

    return (
        <nav className="flex justify-between items-center py-8 px-8 bg-black">
            <button className="text-xl text-[#d9d9d9] uppercase logo hover-effect relative overflow-hidden">
                <div className="overlay absolute w-full h-full bg-transparent z-50"></div>
                <div className="static-text">[ NOTHING STUDIO ]</div>
                <div className="animated-text absolute top-0 left-0">[ NOTHING STUDIO ]</div>
            </button>
            <button className="text-xl text-[#d9d9d9] uppercase menu hover-effect relative overflow-hidden">
                <div className="overlay absolute w-full h-full bg-transparent z-50"></div>
                <div className="static-text">[ Menu ]</div>
                <div className="animated-text absolute top-0 left-0">[ Menu ]</div>
            </button>
        </nav>
    );
};

export default Navbar;
