import { useEffect, useState } from "react";
import gsap from "gsap";
import AnimatedButton from "./AnimatedButton";
import img from '../../assets/img1.avif';
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
                toggle && <div className="min-h-screen bg-black">
                    <div className="flex gap-10">
                        <img className="max-w-lg rounded-xl ml-10" src={img} alt="" />
                        <div className="flex flex-col z-20">
                            <AnimatedButton text='Home' size="text-5xl md:text-[128px] font-extrabold" className='home' />
                            <AnimatedButton text='Showcase' size="text-5xl md:text-[128px] font-extrabold" className='showcase' />
                            <AnimatedButton text='Carrier' size="text-5xl md:text-[128px] font-extrabold" className='carrier' />
                            <AnimatedButton text='About' size="text-5xl md:text-[128px] font-extrabold" className='about' />
                            <AnimatedButton text='Contacts' size="text-5xl md:text-[128px] font-extrabold" className='contact' />
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Navbar;
