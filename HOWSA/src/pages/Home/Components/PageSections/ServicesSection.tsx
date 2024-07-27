import ServiceCard from "../ServiceCard";
import howsa2 from "../../../../../public/howsa2.jpeg"
const ServicesSection = () => {
    return (
        <section className="padding-block-700 padding16px flow">
            <div>
                <h2 className="fs-secondary-heading fw-bold">Our Programs</h2>
                <p>Discover how HOWSA is making a tangible difference in the lives of underprivileged children. Our comprehensive programs are designed to address the educational, medical, and developmental needs of these children, ensuring they have the resources and support to thrive. From providing school fees and scholastic materials to offering vocational training and medical care, our initiatives aim to empower children and transform communities. Learn more about our key programs and see how you can get involved.</p>
            </div>
            <div className="container dynamic-grid padding-block-400">
                <ServiceCard title="Community Sensitization" url={howsa2} content="Conducting outreaches to raise awareness about child development, protection, and care."/>
                <ServiceCard title="Educational Support" url={howsa2.toString()} content="Providing school fees and scholastic materials like pens, books, and uniforms."/>
                <ServiceCard title="Skill Development" url={howsa2} content="Skilling children during holidays in areas like tailoring, handcrafts, and baking."/>
                <ServiceCard title="Medical Care" url={howsa2} content="Offering medical care for children in need."/>
            </div>
        </section>);
}

export default ServicesSection;