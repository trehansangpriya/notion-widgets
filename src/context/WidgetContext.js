import React, { useState, useContext, createContext, useMemo } from 'react';
import useNavigation from '@/Hooks/useNavigation';

export const WidgetContext = createContext({});

export const WidgetProvider = ({ children }) => {
    const [properties, setProperties] = useState({});
    // value useMemo to avoid re-render
    const value = useMemo(() => ({
        properties,
        setProperties
    }), [properties]);
    // return context
    return (
        <WidgetContext.Provider value={value}>
            {children}
        </WidgetContext.Provider>
    );
}
const useWidgetContext = () => {
    return useContext(WidgetContext);
}

export default useWidgetContext;