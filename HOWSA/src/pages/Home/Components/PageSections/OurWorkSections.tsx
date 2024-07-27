import AboutUsCard from "../AboutUsCard";


const OurWorkSection = () => {
    const objectives = [
        "To provide support to less privileged pupils and students that cover school fees, scholastic materials and other academic expenses for the identified children at academic levels.",
        "To mentor and equip school going children with moral and spiritual values through the word of God that will develop their character, integrity and empathy.",
        "To identify, nurture and develop children’s innate skills, talents and abilities",
    ]
    let objectiveToPrint: string = "";
    objectives.forEach((objective) => {
        if (!(objectives.indexOf(objective) === objectives.length - 1)) {
            objectiveToPrint += objective + "\n";
        } else {
            objectiveToPrint += objective;
        }

    })
    return (
        <section className="padding-block-700 padding16px">
            <div className="container even-columns">
                <div className="wd-100 flow">
                    <h2 className="fs-secondary-heading fw-bold">Who Are We?</h2>
                    <p className="">HEART OF WISDOM STUDENTS AID (HOWSA) UG LIMITED is a non-for-profit Christian-based charity in Uganda dedicated to supporting underprivileged school-going children. Our mission is to bridge the education gap and empower these children through financial assistance, educational resources, skill development, and moral guidance.</p>
                </div>
                <div className="">
                    <ul role="list">
                        <AboutUsCard title={"Mission Statement"} content={"To bridge the education gap and empower school going underprivileged children through financial assistance educational resources, skill development and moral guidance to enable them become responsible citizens that will better their communities with the principles of God."} />
                        <AboutUsCard title={"Vision"} content={"To transform lives and societies through aiding school going children acquire academic skills and knowledge that will enable them to flourish in life and contribute to societal growth."} />
                        <AboutUsCard title={"Core Values"} content={objectiveToPrint} />
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default OurWorkSection;