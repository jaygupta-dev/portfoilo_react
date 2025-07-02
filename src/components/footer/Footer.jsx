
import './Footer.css'
function Footer(){
    return(
        <footer className="footer">
    <div className="container">

        <p className="copyright">
            &copy; 2025. All rights reserved by <a href="javascript:void(0)" className="copyright-link">Jayanendra Gupta</a>
        </p>

        <ul className="social-list">

            <li>
                <a href="https://www.facebook.com/jayanendragupta/" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                </a>
            </li>

            <li>
                <a href="https://www.instagram.com/jayanendra_gupta/" className="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
            </li>

        </ul>

    </div>
</footer>
    );
}


export default Footer;