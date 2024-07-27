const TeamMember = ({image,name,role,className}:{image:string,name:string,role:string,className:string}) => {
    return ( 
        <div className={"team-member d-f-c "+className}>
            <div className="team-member-image d-f-c">
                <img src={image} alt="" />
            </div>
            <div className="team-member-name d-f-c">
                <h3>{name}</h3>
            </div>
            <div className="team-member-role d-f-c">
                <h4>{role}</h4>
            </div>
        </div>
     );
}
 
export default TeamMember;