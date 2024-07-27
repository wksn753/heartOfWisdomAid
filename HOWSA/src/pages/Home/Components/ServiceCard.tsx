import React from "react";

interface ServiceCardProps{
    title:string;
    content:string;
    url:string;
}
const ServiceCard:React.FC<ServiceCardProps> = ({title,content,url}) => {
    return (
        <div className="even-columns card ignore-flow">
            <div className="service-img">
                <img src={url} alt="" />
            </div>
            <div className="ignore-flow">
                <h3 className="fs-600 fw-bold">{title}</h3>
                <p className="">{content}</p>
            </div>
        </div>
    );
}

export default ServiceCard;