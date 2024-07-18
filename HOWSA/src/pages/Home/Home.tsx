import HeroSectionText from "./Components/PageSections/HeroSectionText";
import OurWorkSection from "./Components/PageSections/OurWorkSections";
import ServicesSection from "./Components/PageSections/ServicesSection";
import heroImage from "../../../public/howsa3.jpeg";
const Home = () => {
    return (
        <div className="d-f-c">
            <section>
                <div className="grid-5-columns wd-100vw ht-80vh padding16px">
                    <div className=" grid-span-3-column">
                        <HeroSectionText />
                    </div>
                    <div className="grid-span-2-column hero-image-container">
                        <img src={heroImage} alt="" />
                    </div>
                </div>
            </section>
            <OurWorkSection />;
            <ServicesSection />;
        </div>
    );
}

export default Home;