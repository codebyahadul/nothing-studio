import { useEffect } from "react";
import gsap from "gsap";
import AnimatedButton from "./AnimatedButton";
const Navbar = () => {
    useEffect(() => {
        const tl = gsap.timeline();
        // Initial animation for logo and menu buttons on page load
        tl.from(".logo .static-text", { x: -50, opacity: 0, duration: 1 });
        tl.from(".menu .static-text", { x: 50, opacity: 0, duration: 1 }, "<");
    }, []);

    return (
        <nav className="flex justify-between items-center py-8 px-8 bg-black">
             <AnimatedButton text="[ NOTHING STUDIO ]" className="logo" />
             <AnimatedButton text="[ Menu ]" className="menu" />
        </nav>
    );
};

export default Navbar;
