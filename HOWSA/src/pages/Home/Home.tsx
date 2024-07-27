import HeroSectionText from "./Components/PageSections/HeroSectionText";
import OurWorkSection from "./Components/PageSections/OurWorkSections";
import ServicesSection from "./Components/PageSections/ServicesSection";
import heroImage from "/howsa3.jpeg";
import OrganizationActivities from "./Components/PageSections/OrganizationActivities";
import ImpactSection from "./Components/PageSections/ImpactSection";
const Home = () => {
    return (
        <main className="d-f-c">
            <section className="padding-block-700 padding16px">
                <div className="container ">
                    <div className="even-columns ">
                        <HeroSectionText />
                        <div className="reversed heroImage  image-with-blob-bg">
                           <img src={heroImage} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <OurWorkSection />
            <OrganizationActivities/>
            <ServicesSection/>
            <ImpactSection/>
        </main>
    );
}

export default Home;