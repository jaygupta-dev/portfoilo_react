import { useEffect, useState } from 'react';
import './Projects.css';

const hostUrl = import.meta.env.VITE_APP_URL;
const apiUrl = import.meta.env.VITE_API_BASE_URL;


function Projects() {

    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        const fectApi = async () => {
            try {
                const projectResponse = await fetch(`${apiUrl}api/Home/ProjectData`);
                const projectApiData = await projectResponse.json();

                if (projectApiData.status == "Success") {
                    setProjectData(projectApiData.data);
                }
            }
            catch (error) {
                //console.log(error);
            }
        }

        fectApi();
    },[]);
    //console.log(projectData);

    if(projectData != null){
        return (
        <section className="section portfolio" id="portfolio" aria-label="portfolio">
            <div className="container">

                <p className="section-subtitle">Projects</p>

                <h2 className="h2 section-title">Selected Works</h2>

                <ul className="has-scrollbar">

                    {
                       projectData.map((project,index)=>{
                           return (
                             <li className="scrollbar-item" key={index}>
                                <div className="card">

                                    <figure className="card-banner img-holder" style={{'--width': '600', '--height': '675',}}>
                                        <img src={`${hostUrl}src/images/project/${project.projectImagePath}`} width="600" height="675" loading="lazy" alt="project" className="img-cover"/>
                                    </figure>

                                    <a href={`${hostUrl}ProjectDetail?ProjectId=${project.id}`} className="card-content">
                                        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                                        <h3 className="h3 card-title">{project.projectName}</h3>
                                        <p className="card-text"></p>
                                    </a>

                                </div>
                            </li>
                           )
                       })
                    }
                    {/* for dynamic bind */}
                    {/* <li className="scrollbar-item">
                <div className="card">

                    <figure className="card-banner img-holder" style={{'--width': '600', '--height': '675',}}>
                        <img src={`${hostUrl}src/images/Project/"+item.ProjectImagePath`} width="600" height="675" loading="lazy" alt="Magic Art" className="img-cover"/>
                    </figure>

                    <a href={`${hostUrl}Home/ProjectDetails?ProjectId=0`} className="card-content">
                        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        <h3 className="h3 card-title">ProjectName</h3>
                        <p className="card-text"></p>
                    </a>

                </div>
            </li> */}

                    {/* <li className="scrollbar-item">
                        <div className="card">

                            <figure className="card-banner img-holder" style={{ '--width': '600', '--height': '675', }}>
                                <img src={`${hostUrl}src/assets/images/portfolio-2.jpg`} width="600" height="675" loading="lazy" alt="Bona Green" className="img-cover" />
                            </figure>

                            <a href="#" className="card-content">

                                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>

                                <h3 className="h3 card-title">Bona Green</h3>

                                <p className="card-text">Youtube</p>

                            </a>

                        </div>
                    </li>

                    <li className="scrollbar-item">
                        <div className="card">

                            <figure className="card-banner img-holder" style={{ '--width': '600', '--height': '675', }}>
                                <img src={`${hostUrl}src/assets/images/portfolio-3.jpg`} width="600" height="675" loading="lazy" alt="Leo Dandora" className="img-cover" />
                            </figure>

                            <a href="#" className="card-content">

                                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>

                                <h3 className="h3 card-title">Leo Dandora</h3>

                                <p className="card-text">Soundcloud</p>

                            </a>

                        </div>
                    </li>

                    <li className="scrollbar-item">
                        <div className="card">

                            <figure className="card-banner img-holder" style={{ '--width': '600', '--height': '675', }}>
                                <img src={`${hostUrl}src/assets/images/portfolio-4.jpg`} width="600" height="675" loading="lazy" alt="Folio Grasia" className="img-cover" />
                            </figure>

                            <a href="#" className="card-content">

                                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>

                                <h3 className="h3 card-title">Folio Grasia</h3>

                                <p className="card-text">Detail</p>

                            </a>

                        </div>
                    </li>

                    <li className="scrollbar-item">
                        <div className="card">

                            <figure className="card-banner img-holder" style={{ '--width': '600', '--height': '675', }}>
                                <img src={`${hostUrl}src/assets/images/portfolio-5.jpg`} width="600" height="675" loading="lazy" alt="Viva Mercury" className="img-cover" />
                            </figure>

                            <a href="#" className="card-content">

                                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>

                                <h3 className="h3 card-title">Viva Mercury</h3>

                                <p className="card-text">Image</p>

                            </a>

                        </div>
                    </li>

                    <li className="scrollbar-item">
                        <div className="card">

                            <figure className="card-banner img-holder" style={{ '--width': '600', '--height': '675', }}>
                                <img src={`${hostUrl}src/assets/images/portfolio-6.jpg`} width="600" height="675" loading="lazy" alt="Santa Onera" className="img-cover" />
                            </figure>

                            <a href="#" className="card-content">

                                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>

                                <h3 className="h3 card-title">Santa Onera</h3>

                                <p className="card-text">Image</p>

                            </a>

                        </div>
                    </li> */}

                </ul>

            </div>
        </section>
    );
    }
}

export default Projects