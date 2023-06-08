import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const UserContext = createContext({
  userData: null,
  setUserData: () => null,
})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL
    axios
      .get(`${API_URL}api/auth`, { withCredentials: true })
      .then(({ data }) => {
        if (!data.username) return

        console.log(`Logged in as: ${data.username}`)

        setUserData({
          username: data.username,
          email: data.email,
        })
      })
  }, [])

  const value = { userData, setUserData }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
