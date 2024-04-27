import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext()

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const ThemeProvider = ({children}) => {
    const[isDarkMode, setIsDarkMode] = useState(false)
    const toggleTheme = () => {
        setIsDarkMode(prevState => !prevState)
    }
    const theme = isDarkMode ? 'dark' : 'light'

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
    }, [isDarkMode])

    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}


/* ------------------------DARK-MODE------------------ */
/* .app {
  background-color: #111111;
}
.appBody {
  background-color: #000000;
  box-shadow: none;
}
.container, .lightContainer, .bigContainer {
  border: 2px solid #333333 !important;
  border-radius: 8px;
}
.inputBox {
  border: 2px solid #333333 !important;
  border-radius: 8px;
}
.button {
  background-color: #ededed;
  color: rgba(0, 0, 0, 0.7);
}
.icon, .title, .name, .email {
  color: white;
} */

