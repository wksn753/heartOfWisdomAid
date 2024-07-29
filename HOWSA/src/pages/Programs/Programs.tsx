
import Service from "../../pages/Programs/components/Service";
import howsa1 from "/howsa1.jpeg"
import howsa2 from "/howsa2.jpeg"

const Programs = () => {
    return (
        <main>
            <div className="training-programs d-f-c">

                <div className="services-page-title d-f-c">
                    <h1>Training <span>Programs</span></h1>
                </div>
                <div className="traing-programs-container d-f-c">
                    <Service serviceImage={howsa1} serviceTitle={"Flight Training"} serviceText={"Start your aviation journey with our comprehensive Flight Training programs. Tailored for aspiring pilots, our courses blend theoretical knowledge with hands-on experience, providing the essential skills needed to navigate the skies confidently. From the basics to advanced maneuvers, we guide you through every step, ensuring a safe and exhilarating path to becoming a certified pilot."} classname="" />
                    <Service serviceImage={howsa2} serviceTitle={"Air Traffic Control Training"} serviceText={"Unlock the world of Air Traffic Control with our specialized training. Our Air Traffic Control Training program equips individuals with the skills to manage and coordinate air traffic safely and efficiently. From understanding airspace regulations to mastering communication protocols, our comprehensive curriculum prepares you for a crucial role in aviation."} classname="f-d-r-r" />
                </div>
            </div>
        </main>
    );
}
export default Programs;