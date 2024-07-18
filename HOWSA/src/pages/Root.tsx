import { Outlet } from "react-router-dom";

const Root = () => {
    return ( 
    <div className="d-f-c wd-100vw ht-100vh">
         <div className="d-f-c wd-100vw mht-100vh"><Outlet /></div>
    </div> );
}
 
export default Root;