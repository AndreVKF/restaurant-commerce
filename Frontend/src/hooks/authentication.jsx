import { createContext, useContext, useEffect, useState } from "react"

import { api } from "../services/api"
import { ROUTES } from "../common/constants"

import { toast } from "react-toastify"
import { storeInfo, deleteInfo, retrieveInfo } from "../services/localstorage"
import { useCartContext } from "./cart"

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)

  const login = ({ email, password }) => {
    api
      .post(ROUTES.LOGIN, { email, password })
      .then((resp) => {
        const { data } = resp
        const { token } = data

        const user = {
          id_user: data.user.id_user,
          name: data.user.name,
          email: data.user.email,
          avatar_url: data.user.avatar_url,
        }

        setUserData(user)
        setIsAdmin(data.user.user_type === "ADMIN" ? true : false)
        storeInfo(user, token)
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message)
        } else {
          toast.error("Não foi possível realizar login!!")
        }
      })
  }

  const logout = () => {
    try {
      delete api.defaults.headers.common["Authorization"]
    } finally {
      setUserData(null)
      setIsAdmin(false)

      deleteInfo()
    }
  }

  // validate user
  useEffect(() => {
    const { user, token } = retrieveInfo()
    if (!user || !token) return

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    api
      .get(ROUTES.VALIDATE, config)
      .then((resp) => {
        const { data } = resp

        const user = {
          id_user: data.id_user,
          name: data.name,
          email: data.email,
          avatar_url: data.avatar_url,
        }

        setUserData(user)
        setIsAdmin(data.user_type === "ADMIN" ? true : false)
        storeInfo(user, data.token)
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <AuthContext.Provider
      value={{ userData, setUserData, isAdmin, login, logout }}
    >
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
