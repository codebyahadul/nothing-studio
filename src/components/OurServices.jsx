import { useEffect } from "react";
import Vd from '../assets/ne9l3T3ovtDswK4FAYqMEN0ZAs.mp4';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const OurServices = () => {
    useEffect(() => {
        const services = [".service1", ".service2", ".service3", ".service4"];
        services.forEach((service, index) => {
            gsap.fromTo(service, 
                { opacity: 0, y: 100 }, 
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: service,
                        start: 'top 80%',
                        end: 'top 60%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="p-8 bg-black text-[#d9d9d9]">
            <div className="flex">
                <div className="min-w-[25%]"></div>
                <div>
                    <div className='py-8 text-xl font-normal'>
                        <h1 className="w-5/12">With a blend of creativity and technical prowess, we transform ideas into reality!</h1>
                    </div>
                    <h1 className="text-xl font-normal my-8 pb-10">[ OUR SERVICES ]</h1>
                    <div className="space-y-28 services">
                        <div className="flex w-full">
                            <div className="flex-1 pl-5 border-l flex flex-col justify-between min-h-[300px] service1">
                                <div>
                                    <p className="text-2xl text-[#ea4826]">01</p>
                                    <h1 className="text-5xl font-medium">Research</h1>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-normal">Digging deep</h3>
                                    <p className="text-xl text-[#777] w-8/12">
                                        We unearth valuable insights that inform strategic decisions, guiding you towards sustainable growth and impact.
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 pl-5 border-l flex flex-col justify-between min-h-[300px] service2">
                                <div>
                                    <p className="text-2xl text-[#ea4826]">02</p>
                                    <h1 className="text-5xl font-medium">Strategy</h1>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-normal">Paving the way</h3>
                                    <p className="text-xl text-[#777] w-8/12">
                                        Tailored strategies that align with your goals, helping you navigate complexities and seize opportunities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full pb-32">
                            <div className="flex-1 pl-5 border-l flex flex-col justify-between min-h-[300px] service3">
                                <div>
                                    <p className="text-2xl text-[#ea4826]">03</p>
                                    <h1 className="text-5xl font-medium">Design</h1>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-normal">Shaping the future</h3>
                                    <p className="text-xl text-[#777] w-8/12">
                                        We blend creativity with functionality, crafting experiences that leave lasting impressions and resonate.
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 pl-5 border-l flex flex-col justify-between min-h-[300px] service4">
                                <div>
                                    <p className="text-2xl text-[#ea4826]">04</p>
                                    <h1 className="text-5xl font-medium">Development</h1>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-normal">Building visions</h3>
                                    <p className="text-xl text-[#777] w-8/12">
                                        We harness the latest technologies to build robust, scalable platforms that drive your digital presence forward.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full overflow-hidden rounded-xl max-h-[400px] flex items-center">
                <video
                    className="w-full h-full object-cover z-50"
                    loop
                    preload="auto"
                    autoPlay
                    muted
                    src={Vd}
                />
                <div className="text-white text-2xl font-semibold absolute z-50 top-[50%] left-[25%]">
                    <h1>Pure Design,<br /> NOTHING else!</h1>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
