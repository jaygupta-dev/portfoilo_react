// import './COntactUs.css'
// import Header from '../header/Header'
// import Footer from '../footer/Footer'
// import { useEffect, useState } from 'react'

// const hostUrl = import.meta.env.VITE_APP_URL;
// const apiUrl = import.meta.env.VITE_API_BASE_URL;

// function ContactUs() {

//     const [profileData, setProfileData] = useState(null);

    
//     useEffect(() => {
        
//         const fetchApi = async () => {
//             const profileDetailResponse = await fetch(`${apiUrl}api/Home/ProfileDataContactUsPage`)
//             const profileDetailapiData = await profileDetailResponse.json();
//             if (profileDetailapiData.status == "Success") {
//                 setProfileData(profileDetailapiData.data);
//             }
//         }
//         fetchApi();
//     }, []);
    
//     const [formData,setFormData] = useState({
// name :"",
// email :"",
// mobile :"",
// message :""
// });


// const inputChange = (e)=>{
//     const {name,value} = e.target;



//     setFormData(pre => ({
//         ...pre,[name]:value
//     }));
// }

// const [submitMessage, setSubmitMessage] = useState('');

// const submitFormData = async (e)=>{
//     e.preventDefault();

//     try {
//         const response = await fetch(`${apiUrl}api/Home/SaveContactUsData`,{
//              method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(formData)
//         });

//         const result = await response.json();

//         if(result.status == "Success"){
//             setSubmitMessage('Thank you! Your message has been sent.');
//             setFormData({ name: '', email: '', mobile: '', message: '' });
//         }
//         else {
//         setSubmitMessage('Failed to send message. Please try again.');
//       }
//     } 
//     catch (error) {
//         setSubmitMessage('Error submitting form. Please try again later.');
//       console.error('Submit error:', error);
//     }
// }




// if(profileData != null){
//  return (
//         <>
//             <Header />
//             <div>
//                 <section className="section section-page contact" id="contact" aria-label="contact">
//                     <div className="container">

//                         <div className="contact-content">

//                             <p className="section-subtitle">Contact</p>

//                             <h2 className="h2 section-title">Get In Touch</h2>

//                             <p className="section-text">
//                                 Please fill out the form on this section to contact with me. Or call anytime
//                             </p>

//                             <ul className="contact-list">


//                                 <li className="contact-item">
//                                     <ion-icon name="location-outline" aria-hidden="true"></ion-icon>

//                                     <address className="contact-link">
//                                         {profileData.address}
//                                     </address>
//                                 </li>

//                                 <li className="contact-item">
//                                     <ion-icon name="call-outline" aria-hidden="true"></ion-icon>

//                                     <a href={`tel:${profileData.email}`}  className="contact-link">{profileData.mobile}</a>
//                                 </li>

//                                 <li className="contact-item">
//                                     <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

//                                     <a href={`mailto:${profileData.email}`} className="contact-link">{profileData.email}</a>
//                                 </li>

//                                 <li className="contact-item">
//                                     <ion-icon name="globe-outline" aria-hidden="true"></ion-icon>

//                                     <a href="www.domain.com" className="contact-link">www.jaydeveloper.com</a>
//                                 </li>

//                             </ul>

//                         </div>

//                         <form action="" method="post" className="contact-form" onSubmit={submitFormData}>
//                             <p className="contact-us-message">{submitMessage}</p>
//                             <input type="text" name="name" id="name" aria-label="name" placeholder="Name" className="input-field" value={formData.name} onChange={inputChange} />

//                             <input type="text" name="email" id="email" aria-label="email" placeholder="Email" className="input-field" value={formData.email} onChange={inputChange}  />

//                             <input type="text" name="mobile" id="mobile" aria-label="mobile" placeholder="mobile" className="input-field" value={formData.mobile} onChange={inputChange}  />

//                             <textarea name="message" id="message" aria-label="message" placeholder="Message" className="input-field"value={formData.message} style={{'height':'100px'}} onChange={inputChange} ></textarea>

//                             <button type="submit" className="submit-btn">
//                                 <span className="span">Submit</span>

//                                 <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
//                             </button>

//                         </form>

//                     </div>
//                 </section>
//             </div>
//             <Footer />
//         </>
//     );
// }
// else{
//     return (
//         <>
//             <Header />
//             <div>
//                 <section className="section section-page contact" id="contact" aria-label="contact">
//                     <div className="container">

//                         <div className="contact-content">

//                             <p className="section-subtitle">Contact</p>

//                             <h2 className="h2 section-title">Get In Touch</h2>

//                             <p className="section-text">
//                                 Please fill out the form on this section to contact with me. Or call anytime
//                             </p>

//                             <ul className="contact-list">


//                                <li className="contact-item">
//     <ion-icon name="location-outline" aria-hidden="true"></ion-icon>

//     <address className="contact-link">
//         Delhi,India
//     </address>
// </li>

// <li className="contact-item">
//     <ion-icon name="call-outline" aria-hidden="true"></ion-icon>

//     <a href="tel:+919554107570" className="contact-link">+91 9554107570</a>
// </li>

// <li className="contact-item">
//     <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

//     <a href="mailto:jayanendragupta@gmail.com" className="contact-link">jayanendragupta@gmail.com</a>
// </li>

// <li className="contact-item">
//     <ion-icon name="globe-outline" aria-hidden="true"></ion-icon>

//     <a href="www.domain.com" className="contact-link">www.jaydeveloper.com</a>
// </li>

//                             </ul>

//                         </div>

//                         <form action="" method="post" className="contact-form" onSubmit={submitFormData}>
//                             <p className="contact-us-message">{submitMessage}</p>
//                             <input type="text" name="name" id="name" aria-label="name" placeholder="Name" className="input-field" value={formData.name} onChange={inputChange} />

//                             <input type="text" name="email" id="email" aria-label="email" placeholder="Email" className="input-field" value={formData.email} onChange={inputChange}  />

//                             <input type="text" name="mobile" id="mobile" aria-label="mobile" placeholder="mobile" className="input-field" value={formData.mobile} onChange={inputChange}  />

//                             <textarea name="message" id="message" aria-label="message" placeholder="Message" className="input-field"value={formData.message} style={{'height':'100px'}} onChange={inputChange} ></textarea>

//                             <button type="submit" className="submit-btn">
//                                 <span className="span">Submit</span>

//                                 <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
//                             </button>

//                         </form>

//                     </div>
//                 </section>
//             </div>
//             <Footer />
//         </>
//     );
// }
   

// }

// export default ContactUs;



import './ContactUs.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { useEffect, useState } from 'react'

const hostUrl = import.meta.env.VITE_APP_URL;
const apiUrl = import.meta.env.VITE_API_BASE_URL;

function ContactUs() {

    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        const fetchApi = async () => {
            const profileDetailResponse = await fetch(`${apiUrl}api/Home/ProfileDataContactUsPage`)
            const profileDetailapiData = await profileDetailResponse.json();
            if (profileDetailapiData.status === "Success") {
                setProfileData(profileDetailapiData.data);
            }
        }
        fetchApi();
    }, []);

    const [formData,setFormData] = useState({
        name :"",
        email :"",
        mobile :"",
        message :""
    });

    // Validation errors state
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        mobile: "",
        message: ""
    });

    const [submitMessage, setSubmitMessage] = useState('');

    const inputChange = (e) => {
        const {name, value} = e.target;

        // Remove error message on input change for that field
        setErrors(pre => ({
            ...pre,
            [name]: ""
        }));

        setFormData(pre => ({
            ...pre,
            [name]: value
        }));
    }

    // Validate form before submit
    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            tempErrors.name = "Name is required.";
            isValid = false;
        }
        if (!formData.email.trim()) {
            tempErrors.email = "Email is required.";
            isValid = false;
        }
        if (!formData.mobile.trim()) {
            tempErrors.mobile = "Mobile number is required.";
            isValid = false;
        } else if (!/^\d+$/.test(formData.mobile.trim())) {
            tempErrors.mobile = "Mobile number must be numeric.";
            isValid = false;
        }
        if (!formData.message.trim()) {
            tempErrors.message = "Message is required.";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    }

    const submitFormData = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        try {
            const response = await fetch(`${apiUrl}api/Home/SaveContactUsData`,{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if(result.status === "Success"){
                setSubmitMessage('Thank you! Your message has been sent.');
                setFormData({ name: '', email: '', mobile: '',message:''});
                setErrors({ name: "", email: "", mobile: "",message:'' });
            }
            else {
                setSubmitMessage('Failed to send message. Please try again.');
            }
        } 
        catch (error) {
            setSubmitMessage('Error submitting form. Please try again later.');
            console.error('Submit error:', error);
        }
    }

    if(profileData != null){
        return (
            <>
                <Header />
                <div>
                    <section className="section section-page contact" id="contact" aria-label="contact">
                        <div className="container">
                            <div className="contact-content">

                                <p className="section-subtitle">Contact</p>
                                <h2 className="h2 section-title">Get In Touch</h2>

                                <p className="section-text">
                                    Please fill out the form on this section to contact with me. Or call anytime
                                </p>

                                <ul className="contact-list">

                                    <li className="contact-item">
                                        <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
                                        <address className="contact-link">{profileData.address}</address>
                                    </li>

                                    <li className="contact-item">
                                        <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
                                        <a href={`tel:${profileData.mobile}`} className="contact-link">{profileData.mobile}</a>
                                    </li>

                                    <li className="contact-item">
                                        <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                                        <a href={`mailto:${profileData.email}`} className="contact-link">{profileData.email}</a>
                                    </li>

                                    <li className="contact-item">
                                        <ion-icon name="globe-outline" aria-hidden="true"></ion-icon>
                                        <a href="www.domain.com" className="contact-link">www.jaydeveloper.com</a>
                                    </li>

                                </ul>

                            </div>

                        <form action="" method="post" className="contact-form" onSubmit={submitFormData} noValidate>
            <p className="contact-us-message">{submitMessage}</p>

            <input
                type="text"
                name="name"
                id="name"
                aria-label="name"
                placeholder="Name"
                className="input-field"
                value={formData.name}
                onChange={inputChange}
            />
            {errors.name && <span className="validation-error">{errors.name}</span>}

            <input
                type="text"
                name="email"
                id="email"
                aria-label="email"
                placeholder="Email"
                className="input-field"
                value={formData.email}
                onChange={inputChange}
            />
            {errors.email && <span className="validation-error">{errors.email}</span>}

            <input
                type="text"
                name="mobile"
                id="mobile"
                aria-label="mobile"
                placeholder="Mobile"
                className="input-field"
                value={formData.mobile}
                onChange={inputChange}
            />
            {errors.mobile && <span className="validation-error ">{errors.mobile}</span>}

            <textarea
                name="message"
                id="message"
                aria-label="message"
                placeholder="Message"
                className="input-field"
                value={formData.message}
                style={{ height: '100px' }}
                onChange={inputChange}
            ></textarea>

            <button type="submit" className="submit-btn">
                <span className="span">Submit</span>
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </button>
        </form>

                        </div>
                    </section>
                </div>
                <Footer />
            </>
        );
    }
    else{
        return (
            <>
                <Header />
                <div>
                    <section className="section section-page contact" id="contact" aria-label="contact">
                        <div className="container">

                            <div className="contact-content">

                                <p className="section-subtitle">Contact</p>

                                <h2 className="h2 section-title">Get In Touch</h2>

                                <p className="section-text">
                                    Please fill out the form on this section to contact with me. Or call anytime
                                </p>

                                <ul className="contact-list">

                                    <li className="contact-item">
                                        <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
                                        <address className="contact-link">
                                            Delhi,India
                                        </address>
                                    </li>

                                    <li className="contact-item">
                                        <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
                                        <a href="tel:+919554107570" className="contact-link">+91 9554107570</a>
                                    </li>

                                    <li className="contact-item">
                                        <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                                        <a href="mailto:jayanendragupta@gmail.com" className="contact-link">jayanendragupta@gmail.com</a>
                                    </li>

                                    <li className="contact-item">
                                        <ion-icon name="globe-outline" aria-hidden="true"></ion-icon>
                                        <a href="www.domain.com" className="contact-link">www.jaydeveloper.com</a>
                                    </li>

                                </ul>

                            </div>

                        <form action="" method="post" className="contact-form" onSubmit={submitFormData} noValidate>
            <p className="contact-us-message">{submitMessage}</p>

            <input
                type="text"
                name="name"
                id="name"
                aria-label="name"
                placeholder="Name"
                className="input-field"
                value={formData.name}
                onChange={inputChange}
            />
            {errors.name && <span className="validation-error">{errors.name}</span>}

            <input
                type="text"
                name="email"
                id="email"
                aria-label="email"
                placeholder="Email"
                className="input-field"
                value={formData.email}
                onChange={inputChange}
            />
            {errors.email && <span className="validation-error">{errors.email}</span>}

            <input
                type="text"
                name="mobile"
                id="mobile"
                aria-label="mobile"
                placeholder="Mobile"
                className="input-field"
                value={formData.mobile}
                onChange={inputChange}
            />
            {errors.mobile && <span className="validation-error ">{errors.mobile}</span>}

            <textarea
                name="message"
                id="message"
                aria-label="message"
                placeholder="Message"
                className="input-field"
                value={formData.message}
                style={{ height: '100px' }}
                onChange={inputChange}
            ></textarea>

            <button type="submit" className="submit-btn">
                <span className="span">Submit</span>
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </button>
        </form>

                        </div>
                    </section>
                </div>
                <Footer />
            </>
        );
    }

}

export default ContactUs;

