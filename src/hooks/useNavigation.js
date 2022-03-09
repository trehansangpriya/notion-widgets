import { useEffect } from 'react'
import { useRouter } from "next/router"
import useWidgetContext from '@/Context/WidgetContext'
const useNavigation = () => {
    const { properties, setProperties } = useWidgetContext()
    const router = useRouter()
    const goBack = () => {
        router.back()
    }
    const goHome = () => {
        router.push('/')
    }
    const widgetName = router.query.widget
    useEffect(() => {
        // get all query params except widget and theme
        const query = Object.keys(router.query).filter(key => key !== 'widget' && key !== 'theme')
        // get query params
        const queryParams = query.reduce((acc, key) => {
            acc[key] = router.query[key]
            return acc
        }
            , {})
        setProperties(queryParams)
        console.log(queryParams)
    }, [router.query, setProperties])
    return {
        router,
        goBack,
        goHome,
        query: {
            widgetName
        }
    }
}

export default useNavigation