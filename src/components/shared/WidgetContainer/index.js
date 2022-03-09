import React from 'react'
import useTheme from '@/Hooks/useTheme'

const WidgetContainer = ({ children }) => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={`flex justify-center items-center w-full h-screen ${theme}`} onDoubleClick={toggleTheme} title="Double Click to change theme">
            {/* Render children with props  */}
            {children}
        </div>
    )
}

export default WidgetContainer