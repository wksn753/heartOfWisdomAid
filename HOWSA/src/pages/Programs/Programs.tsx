
import Service from "../../pages/Programs/components/Service";
import howsa1 from "/howsa1.jpeg"
import howsa2 from "/howsa2.jpeg"

const Programs = () => {
    return (
        <main className="padding16px d-f-c">
            <section>
            <div className="flow">
                    <h2 className="fs-secondary-heading fw-bold">Our <span>Programs</span></h2>
                    <p>At HEART OF WISDOM STUDENTS AID (HOWSA) UG LIMITED, we believe that every child deserves the opportunity to succeed. Our programs are designed to provide comprehensive support to underprivileged children, ensuring they have access to education, healthcare, and the tools necessary to develop their talents and skills. Explore our key programs and see how we are making a difference.</p>
            </div>
            </section>
            <div className="training-programs d-f-c">
                <div className="traing-programs-container d-f-c">
                    <Service serviceImage={howsa1} serviceTitle={"Educational Support"} serviceText={"Education is the cornerstone of our mission. We provide financial assistance for school fees, uniforms, and scholastic materials such as books, pens, and backpacks. This support ensures that children from vulnerable communities can attend school without financial barriers."} classname="" />
                    <Service serviceImage={howsa2} serviceTitle={"Child Well-being"} serviceText={"We are committed to safeguarding the mental, physical, and spiritual health of children. Our programs include medical care, counseling, and spiritual mentorship to ensure children grow up healthy and resilient."} classname="f-d-r-r" />
                    <Service serviceImage={howsa1} serviceTitle={"Community Sensitization and Outreach"} serviceText={"We conduct community sensitization and outreach programs to raise awareness about child development, protection, and care. These programs engage local leaders, parents, and guardians to create a supportive environment for children."} classname="" />
                </div>
            </div>
        </main>
    );
}
export default Programs;