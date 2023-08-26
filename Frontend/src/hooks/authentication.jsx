import { createContext, useContext, useState } from "react"

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ isAdmin: true })

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  return context
}

/* 
  I - Create context => createContext({})
  II - Create context provider => 
    used to englobe elements
    provides values within the context
  III - Create hook to retrieve context => useContext
*/
