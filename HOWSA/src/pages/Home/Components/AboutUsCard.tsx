interface AboutUsCardProps{
    title:String,
    content:String
}
const AboutUsCard:React.FC<AboutUsCardProps>= ({title,content}) => {
    return ( 
        <div className="d-f-c border-1px-solid padding16px">
            <div><h3 className="cardHeading colorWhite">{title}</h3></div>
            {content.includes("\n")?
            <div>
                {/* if is a list */}
                {content.split("\n").map((line,index)=>(<p className="cardDescription txt-alin-justified colorWhite">{index+1+". "+line}</p>))
                }
            </div>:
            // if content not a list
            <div><p className="cardDescription txt-alin-justified colorWhite">{content}</p></div>}
        </div>
     );
}
 
export default AboutUsCard;