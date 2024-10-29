import { useEffect, useState } from "react";
import gsap from "gsap";
import AnimatedButton from "./AnimatedButton";
import img from '../../assets/img1.avif';
import HoverImage from "../HoverImage";
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        const tl = gsap.timeline();
        // Initial animation for logo and menu buttons on page load
        tl.from(".logo .static-text", { x: -50, opacity: 0, duration: 1 });
        tl.from(".menu .static-text", { x: 50, opacity: 0, duration: 1 }, "<");
    }, []);

    return (
        <>
            <nav className="flex justify-between items-center py-4 md:py-8 px-4 md:px-8 bg-black">
                <AnimatedButton text="[ NOTHING STUDIO ]" name="logo" />
                <AnimatedButton onClick={() => {
                    setToggle(!toggle)

                }} text={toggle ? "[ Close ]" : "[ Menu ]"} name="menu" />

            </nav>
            {
                toggle && <div className="min-h-screen bg-black navbar-wrapper">
                    <div className="flex gap-16 -mt-4">
                        {/* <img className="max-w-lg rounded-xl ml-10 hidden md:block" src={img} alt="" /> */}
                        <HoverImage src={img} alt="Image" />
                        <div className="flex flex-col z-50 px-4 md:px-0">
                            <AnimatedButton text='Home' size="text-5xl md:text-[116px] font-extrabold" name="home" intialColor='#464646' />
                            <AnimatedButton text='Showcase' size="text-5xl md:text-[116px] font-extrabold" name='showcase' intialColor='#464646' />
                            <AnimatedButton text='Carrier' size="text-5xl md:text-[116px] font-extrabold" name='carrier' intialColor='#464646' />
                            <AnimatedButton text='About' size="text-5xl md:text-[116px] font-extrabold" name='about' intialColor='#464646' />
                            <AnimatedButton text='Contacts' size="text-5xl md:text-[116px] font-extrabold" name='contact' intialColor='#464646' />
                        </div>
                    </div>
                    <div className="flex justify-between items-center px-4 md:px-8 py-1 md:py-2">
                        <div className="text-start text-[#d9d9d9] ">
                            <AnimatedButton text="HELLO@NOTHING.STUDIO" name='email2' />
                            <h1 >+44 12 34 56 78</h1>
                        </div>
                        <div className="text-[#d9d9d9] text-sm md:text-xl flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8 *:uppercase">
                            <AnimatedButton text="Linkedin" name='linkedin' />
                            <AnimatedButton text="Twitter" name='twitter' />
                            <AnimatedButton text="Instagram" name='instagram' />
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Navbar;
