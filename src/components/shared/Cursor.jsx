
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Cursor = () => {

    useGSAP(() => {
        const root = document.getElementById('root')
        console.log(root);
        
        root.addEventListener('mousemove', (dets) => {
            console.log(dets);
            
            gsap.to('.cursor', {x: dets.x, y: dets.y, duration: 1.5})
        })
    }, []);


    return (

        <>
            <div className='cursor size-5 bg-red-600 rounded-full z-50 fixed'></div>
        </>
    );
};

export default Cursor;
