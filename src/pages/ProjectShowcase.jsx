import Navbar from "../components/shared/Navbar";
import allos1 from '../assets/projects/ellos.avif'
import allos2 from '../assets/projects/ellos2.avif'
import allos3 from '../assets/projects/ellos3.avif'
import allos4 from '../assets/projects/ellos4.avif'
import allos5 from '../assets/projects/ellos5.avif'
import allos6 from '../assets/projects/ellos6.avif'
import allos7 from '../assets/projects/ellos7.avif'
import allos8 from '../assets/projects/ellos8.avif'
import OurClients from "../components/OurClients";
import wiling from '../assets/projects/willi.avif'
import catering from '../assets/projects/catering.avif'
import kinetic from '../assets/projects/kintic.avif'
import dessert from '../assets/projects/dessert.avif'
import donemate from '../assets/projects/donate.avif'
import { useEffect } from "react";
import gsap from "gsap";
import { useParams } from "react-router-dom";
const projectImages = {
    'ellos rebranding': allos1,
    'wiley roots brewing': wiling,
    'catering': catering,
    'kinetic campaign': kinetic,
    'desert flower': dessert,
    'donemate': donemate,
};
const ProjectShowcase = () => {
    const { projectName } = useParams();
    const selectedImage = projectImages[projectName.toLocaleLowerCase()] || null;
    console.log(projectName.toLocaleLowerCase(), selectedImage);
    
    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.projectContainer',
                end: '+=6400',
                scrub: true,
                markers: true
            }
        })
    }, [projectName])
    return (
        <div className="bg-black projectContainer">
            <Navbar />
            <div className="px-4 md:px-8 text-white">
                <div className="text-4xl md:text-[152px] md:leading-[137px] font-extrabold text-center uppercase w-full mx-auto">
                    <div className="overflow-hidden">
                        <span className="hero-title block">{projectName.split(" ")[0]}</span>
                    </div>
                    <div className="overflow-hidden">
                        <span className="hero-title block">{projectName.split(" ")[1]}</span>
                    </div>
                </div>
                <div className="h-[calc(100vh-100px)] my-10">
                    {selectedImage ? (
                        <img className="rounded-3xl w-full h-full" src={selectedImage} alt={projectName} />
                    ) : (
                        <p>Image not found for this project.</p>
                    )}
                </div>
                <div className="flex  justify-between">
                    <div className="flex flex-1 text-[#d9d9d9]">
                        <h1 className="text-sm md:text-xl uppercase mr-[25%] text-nowrap">[ ABOUT PROJECTS ]</h1>
                        <div className="flex flex-col gap-10 text-[40px] leading-[48px]">
                            <h1 className="text-sm md:text-xl uppercase">[ Brand Identity ]</h1>
                            <h1>We envision a world where wellbeing fundament & everyone is empowered to reach their peak potential.</h1>
                            <h1>Don't traditional healthcare system to determine your health.</h1>
                            <h1>Take control your super power.</h1>
                        </div>
                    </div>
                    <div className=" flex justify-end">
                        <h1 className="text-sm md:text-xl uppercase">[ ABOUT PROJECTS ]</h1>
                    </div>
                </div>
                <div className="max-h-screen my-10">
                    <img className="rounded-3xl w-full max-h-screen" src={allos2} alt="" />
                </div>
                <div className="flex gap-10 items-center h-[400px]">
                    <img className="rounded-3xl w-full h-full" src={allos3} alt="" />
                    <img className="rounded-3xl w-full h-full" src={allos4} alt="" />
                </div>
                <div className="max-h-screen my-10">
                    <img className="rounded-3xl w-full max-h-screen" src={allos5} alt="" />
                </div>
                <div className="flex gap-10 items-center h-[400px]">
                    <img className="rounded-3xl w-full h-full" src={allos6} alt="" />
                    <img className="rounded-3xl w-full h-full" src={allos7} alt="" />
                </div>
                <div className="max-h-screen my-10">
                    <img className="rounded-3xl w-full max-h-screen" src={allos6} alt="" />
                </div>
                <div className="flex gap-10 items-center h-[400px]">
                    <img className="rounded-3xl w-full h-full" src={allos7} alt="" />
                    <img className="rounded-3xl w-full h-full" src={allos8} alt="" />
                </div>
                <OurClients />
            </div>
        </div>
    );
};

export default ProjectShowcase;