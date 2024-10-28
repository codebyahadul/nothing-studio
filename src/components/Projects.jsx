import img1 from '../assets/img1.avif';
import img2 from '../assets/img2.avif';
import img3 from '../assets/img3.avif';
import img4 from '../assets/img4.avif';
import img5 from '../assets/img5.avif';
import img6 from '../assets/img6.avif';

const projects = [
    { img: img1, title: '[Ellos Rebranding]' },
    { img: img2, title: '[Wiley Roots Brewing]' },
    { img: img3, title: '[Catering]' },
    { img: img4, title: '[Kinetic Campaign]' },
    { img: img5, title: '[Desert Flower]' },
    { img: img6, title: '[Donemate]' }
];

const Projects = () => {
    return (
        <div className="bg-black p-8">
            <div className="flex justify-between items-center text-[#d9d9d9]">
                <button className="text-xl uppercase">[ FEATURED PROJECTS ]</button>
                <button className="text-xl uppercase">[ Hire Us ]</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 my-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-3xl h-[230px] md:h-[450px] cursor-pointer transition-all duration-300"
                    >
                        <img
                            src={project.img}
                            alt={`project-${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 p-3 md:p-6 w-full">
                            <h3 className="text-[#d9d9d9] text-2xl font-semibold uppercase">
                                {project.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;