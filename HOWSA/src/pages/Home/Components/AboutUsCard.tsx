interface AboutUsCardProps{
    title:String,
    content:String
}
const AboutUsCard:React.FC<AboutUsCardProps>= ({title,content}) => {
    return ( 
        <li className="flow">
            <h3 className="fs-600 fw-bold">{title}</h3>
            {content.includes("\n")?
            <div className="flow2">
                <ul role="list" className="numbered-items">
                {/* if is a list */}
                {content.split("\n").map((line,index)=>(<li className="">{line}</li>))
                }
            </ul>
            </div>:
            // if content not a list
            <p className="">{content}</p>
            }
        </li>
     );
}
 
export default AboutUsCard;