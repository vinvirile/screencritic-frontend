import { createContext, useState } from 'react'

/* 

*  Basically, we're using this context to control how the navigation works. If the user 
*  isn't viewing a movie, we keep the navigation stable and unchanged. 
*  But, when they're watching a movie, we blur the navigation a bit so more of the background 
*  image can be seen.
*/

export const NavConditionContext = createContext({
  blurNav: false,
  setBlurNav: () => null,
  staticNav: true,
  setStaticNav: () => null,
})

export const NavConditionProvider = ({ children }) => {
  const [blurNav, setBlurNav] = useState(false)
  const [staticNav, setStaticNav] = useState(true)

  const value = { blurNav, setBlurNav, staticNav, setStaticNav }

  return (
    <NavConditionContext.Provider value={value}>
      {children}
    </NavConditionContext.Provider>
  )
}
