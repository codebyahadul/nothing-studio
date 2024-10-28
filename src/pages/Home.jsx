import { useRef, useEffect } from 'react';
import Mountain from '../assets/mountain.avif';
import gsap from 'gsap';
import WaveHover from '../components/WaveHover';

const Home = () => {
    const cursorRef = useRef(null);
    const textRef = useRef(null);
    useEffect(() => {
        // Mouse move listener for custom cursor
        const handleMouseMove = (event) => {
            gsap.to(textRef.current, {
                x: event.clientX + 30,
                y: event.clientY + 30,
                duration: 0.2,
                ease: 'power2.out',
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    return (
        <div className="h-screen relative w-full z-10 overflow-hidden">
            <img className="h-full w-full object-cover" src={Mountain} alt="Mountain" />
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-5xl font-bold text-gray-300 text-center">
                    <WaveHover text={'Tapping Into Your'} /> <br /> <WaveHover  text={"Brand's  Unrealized Potential."}/>
                </h1>
            </div>

            {/* Custom Cursor */}
            <div ref={cursorRef} className="fixed top-0 left-0  bg-transparent pointer-events-none z-40"></div>
            {/* Scroll Down Text */}
            <div ref={textRef} className="fixed top-0 left-0 text-white text-lg pointer-events-none z-40">

            </div>
        </div>
    );
};

export default Home;
