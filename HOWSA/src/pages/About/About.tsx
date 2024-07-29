import { useState } from "react";
import TeamMember from "./components/TeamMember";
import heroImage from "/howsa3.jpeg";
import teamMember1 from "/team1.jpeg";
import teamMember2 from "/team2.jpeg";
import teamMember3 from "/team3.jpeg";
import teamMember4 from "/team4.jpeg";
import teamMember5 from "/team5.jpeg";
import teamMember6 from "/team6.jpeg";
import teamMember7 from "/team7.jpeg";
const About = () => {
    const [showTeam, setShowTeam] = useState(false)
    const handleShowTeam = () => {
        setShowTeam(!showTeam)
    }
    return (
        <main className="padding16px">
            <section>
                <div id="about" className=" d-f-r">
                    <div className="about-page-text about-page-text flow">
                        <h2 className="fs-secondary-heading fw-bold">Who <span>we are......</span></h2>
                        <p>
                            HEART OF WISDOM STUDENTS AID (HOWSA) UG LIMITED is a dedicated non-profit Christian-based charity located in Kampala, Uganda. We are committed to providing essential support to underprivileged school-going children, including orphans, street children, those with disabilities, and financially struggling students. Our goal is to ensure these children have access to quality education and the necessary resources to thrive.
                        </p>
                    </div>
                    <div className="about-page-image heroImage image-with-blob-bg">
                        <img src={heroImage} alt="" />
                    </div>
                </div>

            </section>
            <section>
                <div className="team d-f-c">
                    <div className="team-heading">
                        <h2 className="fs-secondary-heading fw-bold">Meet <span>Our Team</span></h2>
                    </div>
                    <div id="team" className="team-members d-f-r">
                        <TeamMember image={teamMember1} name={'Counsel Solomon Opolot'} role={'Legal Advisor'} className={''} />
                        <TeamMember image={teamMember2} name={'Ssebuyira Isaac kitiibwa'} role={'Board Of Trustees'} className={''} />
                        <TeamMember image={teamMember3} name={'Council Serwanga Alex'} role={'Governance,HR,Legal,Policy Expert'} className={''} />
                        <TeamMember image={teamMember4} name={'Mubiru Derrick'} role={'Secretary'} className={showTeam ? '' : 'hide'} />
                        <TeamMember image={teamMember5} name={'Baluku Joel'} role={'kasese Regional Coordinator'} className={showTeam ? '' : 'hide'} />
                        <TeamMember image={teamMember6} name={'Mwebaze Becky Mary'} role={'Administration And Ethics'} className={showTeam ? '' : 'hide'} />
                        <TeamMember image={teamMember7} name={'wama'} role={'Software Developer'} className={showTeam ? '' : 'hide'} />
                    </div>
                    <div className="d-f-c" style={{ width: "100%", alignItems: 'center', justifyContent: 'center' }}>
                        <button className="button" style={{ padding: '1rem', width: '10rem', margin: '2rem' }} onClick={handleShowTeam}>{showTeam ? "Hide" : "Show More"}</button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About;