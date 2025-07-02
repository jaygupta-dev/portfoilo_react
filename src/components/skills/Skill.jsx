import './Skill.css'
import {useEffect , useState} from 'react'

const hostUrl = import.meta.env.VITE_APP_URL;
const apiUrl = import.meta.env.VITE_API_BASE_URL;

function Skill(){

    const [aboutData,setAboutData] = useState(null);
    const [skillData,setSkillData] = useState(null);

    useEffect(()=>{

        const fecthcApi = async () => {
            try{
                const aboutResponse = await fetch(`${apiUrl}api/Home/AboutDeveloper`);
                const aboutApiData = await aboutResponse.json();
                if(aboutApiData.status == "Success"){
                    setAboutData(aboutApiData.data);
                }

                const skillResponse = await fetch(`${apiUrl}api/Home/SkillSection`);
                const skillApiData = await skillResponse.json();
                if(skillApiData.status == "Success"){
                    setSkillData(skillApiData.data);
                }
            }
            catch(error){

            }
        };

        fecthcApi();
    },[]);

    // console.log(aboutData)
    // console.log(skillData)
    if(aboutData != null && skillData != null){
        return (
        <section className="section skills-section has-before" id="skills" aria-label="skills">
    <div className="container">
        <div className="skills-about">
            <p className="section-subtitle">Skills</p>
            <h2 className="h2 section-title">{aboutData.title}</h2>
            <p className="section-text">
                {aboutData.description}
            </p>
        </div>

        <div className="skills-grid">   
           {
            skillData.map((skl,index)=>{

                let skillNames = [];
                if(skl.skillName != "" || skl.skillName != null){
                    skillNames = skl.skillName.split('~');
                }

                return (
                     <div className="skills-item" key={index}>
                <h3 className="skill-title">{skl.skillCategory}</h3>
                <ul>
                    {
                        skillNames.map((skName,indxs)=>{
                            return (
                                 <li className='bd-btm-grey' key={indxs}>{skName}</li>
                            )
                        })
                    }
                   
                </ul>
            </div>
                )
            })
           }
{/* 
            <div className="skills-item">
                <h3 className="skill-title">Frontend Technologies</h3>
                <ul>
                    <li>JavaScript / TypeScript</li>
                    <li>React / Angular</li>
                    <li>HTML5 & CSS3</li>
                    <li>Bootstrap / Tailwind CSS</li>
                    <li>Razor Pages / Blazor</li>
                </ul>
            </div>

            <div className="skills-item">
                <h3 className="skill-title">Database & Cloud</h3>
                <ul>
                    <li>SQL Server & T-SQL</li>
                    <li>Azure SQL / Cosmos DB</li>
                    <li>Azure App Services</li>
                    <li>Docker & Containerization</li>
                    <li>CI/CD with GitHub Actions / Azure DevOps</li>
                </ul>
            </div>

            <div className="skills-item">
                <h3 className="skill-title">DevOps & Tools</h3>
                <ul>
                    <li>Git / GitHub / Azure DevOps</li>
                    <li>CI/CD Pipelines</li>
                    <li>Docker Compose</li>
                    <li>Unit Testing / xUnit / Moq</li>
                    <li>Logging & Monitoring</li>
                </ul>
            </div> */}
        </div>

    </div>
</section>

        );
    }
else{
    return (<section></section>)
}
}

export default Skill;