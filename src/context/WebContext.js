import React, { createContext, useContext, useState, useMemo } from 'react';
// create theme context
export const WebContext = createContext({});

export const WebProvider = ({ children }) => {
    const light = 'bg-lightMode text-darkMode'
    const dark = 'bg-darkMode text-lightMode'
    const [theme, setTheme] = useState(light)
    const [loading, setLoading] = useState(false)

    // value useMemo to avoid re-render
    const value = useMemo(() => ({
        light,
        dark,
        theme,
        setTheme,
        loading,
        setLoading,
    }), [theme, loading]);
    // return context
    return (
        <WebContext.Provider value={value}>
            {children}
        </WebContext.Provider>
    )
}

// get context
const useWeb = () => {
    return useContext(WebContext);
}

// export context
export default useWeb;