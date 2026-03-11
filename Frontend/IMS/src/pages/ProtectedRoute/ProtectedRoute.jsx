import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode"

function ProtectedRoute({children,allowedRole}){
    const token = localStorage.getItem("token");
    if(!token){
   
    return <Navigate to="/home" replace />;
    }
    const decode = jwtDecode(token);
    if(allowedRole &&  decode.role!==allowedRole){
        return <Navigate to ="/" replace/>
    }
    return children

}
export default ProtectedRoute;