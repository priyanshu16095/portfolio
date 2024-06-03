import { createContext, useContext, useState } from "react";

const AnimationContext = createContext()

const AnimationContextProvider = ({children}) => {
    const[showAnimation, setShowAnimation] = useState(false)
    return (
        <AnimationContext.Provider value={{showAnimation, setShowAnimation}}>
            {children}
        </AnimationContext.Provider>
    )
}

export default AnimationContextProvider

export const AnimationState = () => {
    return useContext(AnimationContext)
}