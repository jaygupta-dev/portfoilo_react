import './ProfileService.css'
import { useEffect,useState } from 'react';

const hostUrl = import.meta.env.VITE_APP_URL;
const apiUrl = import.meta.env.VITE_API_BASE_URL;


function ProfileService(){
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
    const fetchApi = async () => {
        try {
            const profileResponse = await fetch(`${apiUrl}api/Home/ProfileDetail`);
            const profileApiData = await profileResponse.json();
            // console.log(response);
            // console.log(response.status);   
            // console.log(response.statusCode);  
            // console.log(response.message);   
            // console.log(response.data);    
            // console.log(response.data.name);   

            if(profileApiData.status == "Success"){
                setProfileData(profileApiData.data);
            }

        } 
        catch (error) {
        //console.error('Fetch error:', error);
        }
    };

    fetchApi(); 
    }, []);

    //console.log(profileData);

    let services = [];
    let yrsExp = "2";
    if(profileData != null){

        
        if(profileData.serviceNames != "" || profileData.serviceNames != null){
            services = profileData.serviceNames.split(',');
        }

        yrsExp = profileData.experience != "" || profileData.experience != "" ? profileData.experience/12 : "2";
        yrsExp = Math.floor(yrsExp);

         return (
        <section className="section hero" id="home" aria-label="hero">
        <div className="container">

            <figure className="hero-banner img-holder has-before" style={{'--width': '640', '--height': '840',}} >
                <img src={`${profileData.profilePath}`} width="640" height="840" alt="Bernard Smith" className="img-cover" />
            </figure>

            <div className="hero-content">

                <p className="section-subtitle">{profileData.name}</p>

                <h1 className="h1 hero-title">{profileData.jobTitle}</h1>

                <ul className="hero-list">

                    {services.map((service,index)=>{
                        return (
                            <li key={index}>
                            <a href="javascript:void(0)" className="list-link">
                                <span className="span">{service}</span>

                                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                            </a>
                        </li>
                        );
                    })}

                    {/* <li>
                        <a href="javascript:void(0)" className="list-link">
                            <span className="span">Web Development</span>

                            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </a>
                    </li>

                    <li>
                        <a href="javascript:void(0)" className="list-link">
                            <span className="span">Digital Marketing</span>

                            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </a>
                    </li>

                    <li>
                        <a href="javascript:void(0)" className="list-link">
                            <span className="span">Freelancing</span>

                            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </a>
                    </li> */}

                </ul>

                <ul className="exp-list">

                    <li className="list-item">
                        <strong className="strong">{yrsExp}+</strong>

                        <span className="span">
                            Years of<br/>
                            Experience
                        </span>
                    </li>

                    <li className="list-item">
                        <strong className="strong">{profileData.workProjects-1}+</strong>
                        <span className="span">
                            Live<br/>
                            Projects
                        </span>
                    </li>

                </ul>

                <a href="#portfolio" className="slide-down-btn" aria-label="scroll down">
                    <ion-icon name="arrow-down" aria-hidden="true"></ion-icon>
                </a>

            </div>

        </div>
    </section>
    );

    }
else{
     return (
        <section className="section hero" id="home" aria-label="hero">
        <div className="container">

            <figure className="hero-banner img-holder has-before" style={{'--width': '640', '--height': '840',}} >
                <img src={`${hostUrl}src/images/others/new template-photoroom.jpg`} width="640" height="840" alt="Bernard Smith" className="img-cover" />
            </figure>

            <div className="hero-content">

                <p className="section-subtitle">Jayanendra Gupta</p>

                <h1 className="h1 hero-title">Dot Net Developer</h1>

                <ul className="hero-list">

                    <li>
                        <a href="javascript:void(0)" className="list-link">
                            <span className="span">Web Development</span>

                            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </a>
                    </li>

                    <li>
                        <a href="javascript:void(0)" className="list-link">
                            <span className="span">Digital Marketing</span>

                            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </a>
                    </li>

                    <li>
                        <a href="javascript:void(0)" className="list-link">
                            <span className="span">Freelancing</span>

                            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </a>
                    </li>

                </ul>

                <ul className="exp-list">

                    <li className="list-item">
                        <strong className="strong">{yrsExp}+</strong>

                        <span className="span">
                            Years of<br/>
                            Experience
                        </span>
                    </li>

                    <li className="list-item">
                        <strong className="strong">2+</strong>

                        <span className="span">
                            Live<br/>
                            Projects
                        </span>
                    </li>

                </ul>

                <a href="#portfolio" className="slide-down-btn" aria-label="scroll down">
                    <ion-icon name="arrow-down" aria-hidden="true"></ion-icon>
                </a>

            </div>

        </div>
    </section>
    );
}
   
}

export default ProfileService;