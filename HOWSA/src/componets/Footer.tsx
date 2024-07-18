import youtube from "/Youtube.svg"
import ig from "/Instagram.svg"
import twitter from "/Twitter.svg"
import { Link} from "react-router-dom"
const Footer = () => {
    
    return (
        <div className="footer d-f-c">
            <div className="sb-footer section-padding d-f-c">
                <div className="sb-footer-links d-f-r">
                    <div className="sb-footer-links-div d-f-c">
                        <h4>Company</h4>
                        <Link to="/about#about"><p>About</p></Link>
                        <Link to="/services"><p>Services</p></Link>
                        <Link to="/about#team"><p>Team</p></Link>
                    </div>
                    <div className="sb-footer-links-div d-f-c">
                        <h4>Programs</h4>
                        <Link to="/programs"><p>Therapeutic consultations</p></Link>
                        <Link to="/programs"><p>Wellness Programs</p></Link>
                    </div>
                    <div className="sb-footer-links-div d-f-c">
                        <h4>Social</h4>
                        <div className="socialmedia d-f-r">
                            <a href=""><img src={ig} alt="" width={35} height={35}/></a>
                            <a href=""><img src={twitter} width={35} height={35} alt="" /></a>
                            <a href=""><img src={youtube} width={35} height={35} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="sb-footer-below">
                <div className="sb-footer-copyright d-f-r">
                    <p>
                        Copyright &copy;{new Date().getFullYear()} Inner Spark Recovery. All rights reserved.
                    </p>
                    <div className="sb-footer-below-links d-f-r">
                        <a href="#"><div><p>Privacy Policy</p></div></a>
                        <a href="#"><div><p>Terms of Use</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;