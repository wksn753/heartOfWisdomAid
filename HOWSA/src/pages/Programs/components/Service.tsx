const Service = ({ serviceImage, serviceTitle, serviceText,classname }: { serviceImage: string, serviceTitle: string, serviceText: string,classname:string }) => {
    return (
            <div className={classname+" service d-f-r "}>
            <div className="service-component-img">
                <img src={serviceImage} alt="services" />
            </div>
            <div className="service-text">
                <h2>{serviceTitle}</h2>
                <p>{serviceText}</p>
            </div>
            </div>
    );
}
export default Service;