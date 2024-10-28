import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Cursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const cursorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            {/* Main Cursor */}
            <motion.div
                ref={cursorRef}
                style={{
                    position: 'fixed',
                    width: '20px', // Adjust size as needed
                    height: '20px', // Adjust size as needed
                    backgroundColor: 'green',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    transform: 'translate(-50%, -50%)',
                    top: cursorPosition.y,
                    left: cursorPosition.x,
                }}
                animate={{
                    scale: [1, 1.5, 1], // Scale effect
                    opacity: [0.5, 1, 0.5], // Opacity effect
                }}
                transition={{
                    duration: 0.4, // Slightly longer for smoother effect
                    ease: 'easeInOut',
                }}
            />
            {/* Shadow Cursor */}
            <motion.div
                style={{
                    position: 'fixed',
                    width: '30px', // Shadow size
                    height: '30px', // Shadow size
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Shadow color
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    transform: 'translate(-50%, -50%)',
                    top: cursorPosition.y + 10, // Slight offset
                    left: cursorPosition.x + 10, // Slight offset
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.9, 0.9, 0.9],
                }}
                transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                }}
            />
        </>
    );
};

export default Cursor;
