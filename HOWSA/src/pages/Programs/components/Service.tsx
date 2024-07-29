const Service = ({ serviceImage, serviceTitle, serviceText,classname }: { serviceImage: string, serviceTitle: string, serviceText: string,classname:string }) => {
    return (
            <div className={classname+" service d-f-r "}>
            <div className="heroImage">
                <img src={serviceImage} alt="services" />
            </div>
            <div className="service-text flow">
                <h3 className="fs-600 fw-bold">{serviceTitle}</h3>
                <p>{serviceText}</p>
                
            </div>
            </div>
    );
}
export default Service;