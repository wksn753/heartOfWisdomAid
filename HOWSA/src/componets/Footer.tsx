import youtube from "/Youtube.svg"
import ig from "/Instagram.svg"
import twitter from "/Twitter.svg"
import { Link} from "react-router-dom"
const Footer = () => {
    
    return (
        <section className="cta | footer d-f-c bg-primary-400 text-neutral-100">
            <div className="sb-footer section-padding d-f-c">
                <div className="sb-footer-links d-f-r">
                    <div className="sb-footer-links-div d-f-c">
                        <h4>HOWSA</h4>
                        <Link to="/about#about"><p>About</p></Link>
                        <Link to="/services"><p>Services</p></Link>
                        <Link to="/about#team"><p>Team</p></Link>
                    </div>
                    <div className="sb-footer-links-div d-f-c">
                        <h4>Programs</h4>
                        <Link to="/programs"><p>Community Sensitization</p></Link>
                        <Link to="/programs"><p>Educational Support</p></Link>
                        <Link to="/programs"><p>Skill Development</p></Link>
                        <Link to="/programs"><p>Medical Care</p></Link>
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
                        Copyright &copy;{new Date().getFullYear()} HOWSA LTD. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Footer;