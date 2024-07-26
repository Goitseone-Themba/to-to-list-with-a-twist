import { createContext, useState } from "react"


export const AuthContext = createContext()

export const AuthProvider = ({children}) => { 
    const [user, setUser] = useState(null)

    const signup = async (email, password) => { 
        console.log("signup attempt with ", email, password)
     }

     const login = (email, password) => { 
        console.log("login attempt with ", email, password)
      }

    const logout = async () => { 
        console.log("logout attempt.")
     }

     const isAuthenticated = () => { 
        console.log("isAuth from context")
        return true
      }

      return(
        <AuthContext.Provider value={{user, signup, login, logout, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
      )
 }