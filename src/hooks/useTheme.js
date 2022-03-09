import useWeb from '@/Context/WebContext'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const useTheme = () => {
    const { light, dark, theme, setTheme } = useWeb()
    const [themeName, setThemeName] = useState(theme === light ? 'light' : 'dark')
    const router = useRouter()
    // toggle between light and dark theme
    const toggleTheme = () => {
        setTheme(theme === light ? dark : light)
    }
    useEffect(() => {
        const query = router.query.theme
        if (query) {
            if (query === 'dark') {
                setTheme(dark)
            }
            if (query === 'light') {
                setTheme(light)
            }
        }
        setThemeName(theme === light ? 'light' : 'dark')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.query.theme, theme])
    return {
        toggleTheme,
        light,
        dark,
        theme,
        setTheme,
        themeName,
        setThemeName
    }
}

export default useTheme