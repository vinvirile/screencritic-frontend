import { createContext, useState } from 'react'

/* 

*  This context is just to manage the state of the navigation's blur functionality. This is used for when a
*  user is viewing a movie.

*/

export const NavBlurContext = createContext({
  blurNav: false,
  setBlurNav: () => null,
})

export const NavBlurProvider = ({ children }) => {
  const [blurNav, setBlurNav] = useState(false)

  const value = { blurNav, setBlurNav }

  return (
    <NavBlurContext.Provider value={value}>{children}</NavBlurContext.Provider>
  )
}
