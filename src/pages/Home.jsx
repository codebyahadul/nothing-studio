import { useGSAP } from "@gsap/react";
import Navbar from "../components/shared/Navbar";
import gsap from "gsap";
import Projects from "../components/Projects";
const Home = () => {
    useGSAP(() => {
        const tl = gsap.timeline()
        tl.fromTo(
            '.hero-title',
            { opacity: 0, y: 100 }, // Start off-screen below
            { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" } // Slide up smoothly
        )
            .fromTo(
                '.hero-title2',
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" },
                "-=0.8" // Overlap animations slightly
            )
            .from('.hero-des', { opacity: 0, y: 10, }, "-=0.9")
    })

    return (
        <>
            <div className="flex h-full justify-center items-center text-[#d9d9d9] bg-black px-8">
                <div className="relative hero-text-container min-h-[calc(100vh-180px)] pt-20">
                    <div className="text-[152px] leading-[137px] font-extrabold text-center uppercase w-full mx-auto">
                        <div className="overflow-hidden">
                            <span className="hero-title block">NOTHING</span>
                        </div>
                        <div className="overflow-hidden text-nowrap w-full">
                            <span className="hero-title2 block">DESIGN STUDIO</span>
                        </div>
                    </div>
                    <div className="w-[30%] mt-16 absolute left-[10%] hero-des">
                        <p className="text-start text-xl"><span className="px-16"></span> We are a creative studio based in Canada, We build solid brands that needs no introduction at all.</p>
                    </div>
                </div>
            </div>
            <Projects />
        </>
    );
};

export default Home;
