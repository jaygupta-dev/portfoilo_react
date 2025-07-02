import './ProjectDetail.css'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

import Header from '../header/Header'
import Footer from '../footer/Footer'

const hostUrl = import.meta.env.VITE_APP_URL;
const apiUrl = import.meta.env.VITE_API_BASE_URL;


function ProjectDetail(){

    const [projectData,setProjectData] = useState(null);
    const [queryData] = useSearchParams();

    const projectId = queryData.get("ProjectId");

    useEffect(()=>{

        const fetchApi = async ()=>{

            if (!projectId) return;

            const projectResponse = await fetch(`${apiUrl}api/Home/ProjectDetail?ProjectId=${projectId}`);
            const projectApiData = await projectResponse.json();

            if(projectApiData.status == "Success"){
                setProjectData(projectApiData.data);
            }
        }
    fetchApi();
    },[projectId]);
    
    //console.log(projectData);
    let currentIndex = 0;
    let imageList = [];

    if (projectData && projectData.projectImagePath) {
    imageList = projectData.projectImagePath.split(',');
    }

    // Example: Call this once initially
    const showProjectImage = (index) => {
        const container = document.querySelector(".project-detail-content");
        const imgElement = container.querySelector(".project-slider-image");

        const path = hostUrl + "Images/Project/" + imageList[index];
        imgElement.src = path;
        container.setAttribute("data-current-index", index);
    };

    const nextProjectImage = () => {
    if (imageList.length === 0) return;

    currentIndex = (currentIndex + 1) % imageList.length;
    showProjectImage(currentIndex);
    };

    const preProjectImage = () => {
    if (imageList.length === 0) return;

    currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    showProjectImage(currentIndex);
    };





    if(projectData != null && projectData.length > 0){
         return (

            <>
            <Header/>
            {
                projectData.map((data,index)=>{
                   return (
                    <section className="section" id="ProjectDetails" aria-label="ProjectDetails">
                    <div class="project-detail-card">
                     <div className="project-detail-content" key={index}>
                        <div className="project-image-wrapper" style={{'position': 'relative'}}>
                            <img className="project-slider-image project-image" src={`${hostUrl}src/images/project/${data.projectImagePath}`} alt="Project Image" />
                            <button className="prevBtn" style={{'position': 'absolute', 'top': '50%', 'left': '0', 'transform': 'translateY(-50%)'}} onclick={preProjectImage}>❮</button>
                            <button className="nextBtn" style={{'position': 'absolute', 'top': '50%', 'right': '0', 'transform': 'translateY(-50%)'}} onclick={nextProjectImage}>❯</button>

                            <input type="hidden" className="image-list-data" value='@Html.Raw(Newtonsoft.Json.JsonConvert.SerializeObject(item.ProjectImagePathList))' />
                        </div>

                        <div className="project-text-wrapper">
                            <h3 className="project-title">{data.projectTitle}</h3>
                            
                            <p className="project-summary">
                                {data.projectSummary} .
                            </p>
                        </div>
                    </div>
                </div>
            </section>
                   )
                })
            }
<Footer/>
            </>

        );
    }
    else
    {
        return (
            <>
            <section className="section" id="ProjectDetails" aria-label="ProjectDetails">
    <div class="project-detail-card">
            <div className="project-text-wrapper">
                <h3 className="project-title">No data available!!! Please wait for add.</h3>
            </div>
                </div>
</section>
        </>
        );
    }

}

export default ProjectDetail;