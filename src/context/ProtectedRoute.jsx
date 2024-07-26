import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({children}) => {
    const { isAuthenticated } = useContext(AuthContext)  
    
    if(!isAuthenticated()) {
        return <Navigate to='/login' replace />
    }

    return children
}
