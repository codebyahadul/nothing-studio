import { useLoaderData, useParams } from "react-router-dom";

const ProjectShowcase = () => {
    const {projectName} = useParams()
    const {data} = useLoaderData();
    console.log(data);
    
    return (
        <div>
            
        </div>
    );
};

export default ProjectShowcase;