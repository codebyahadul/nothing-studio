import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from('.logo', {x: -50, opacity: 0})
        tl.from('.menu', {x: 50, opacity: 0})
    })
    return (
        <nav className="flex justify-between items-center py-8 px-8 bg-black z-50 sticky top-0">
            <button className="text-xl text-[#d9d9d9] uppercase logo">
                [ NOTHING STUDIO]
            </button>
            <button className="text-xl text-[#d9d9d9] uppercase menu">
                [ Menu]
            </button>
        </nav>
    );
};

export default Navbar;