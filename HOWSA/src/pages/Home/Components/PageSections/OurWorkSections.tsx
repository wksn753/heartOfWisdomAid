import AboutUsCard from "../AboutUsCard";


const OurWorkSection = () => {
    const objectives = [
        "To provide support to less privileged pupils and students that cover school fees, scholastic materials and other academic expenses for the identified children at academic levels.",
        "To mentor and equip school going children with moral and spiritual values through the word of God that will develop their character, integrity and empathy.",
        "To identify, nurture and develop children’s innate skills, talents and abilities ",
    ]
    let objectiveToPrint: string ="";
    objectives.forEach((objective) => {
        objectiveToPrint +=objective+"\n";

    })
    return ( 
        <section className="three-row-grid wd-100vw ht-80vh padding16px background-primary">
            <div className="wd-100 padding-btm-10px">
            <h2 className="colorWhite">About HOWSA UG LIMITED</h2>
            <p className="txt-alin-justified cardDescription colorWhite"> HOWSA UG LTD is a non-for-profit Christian based charity company in Uganda that aims to provide support for the underprivileged school going children, specifically orphaned children from poor background, street children, children with disabilities and financially struggling school children in the vulnerable communities. Our main objectives are to fund their education, provide necessary scholastic materials, nature their innate skills talent and abilities and instill values rooted in the fear of God.
                We envision a society where every child regardless of his/her background has equal educational opportunities to harness their potential. We aim to transform the lives of these children and aid them build a brighter future for them and their communities.</p>
            </div>
            <div className="card-row-grid span-2-rows">
                <AboutUsCard title={"Mission"} content={"To bridge the education gap and empower school going underprivileged children through financial assistance educational resources, skill development and moral guidance to enable them become responsible citizens that will better their communities with the principles of God."}/>
                <AboutUsCard title={"Vision"} content={"To transform lives and societies through aiding school going children acquire academic skills and knowledge that will enable them to flourish in life and contribute to societal growth."}/>
                <AboutUsCard title={"Objectives"} content={objectiveToPrint}/>
            </div>
        </section>
     );
}
 
export default OurWorkSection;