import React, { useEffect, useState } from 'react'
import { viewWidgets } from '@/Data/widgets'
import useLoading from '@/Hooks/useLoading'
import WidgetContainer from '@/SharedComponent/WidgetContainer'
import useNavigation from '@/Hooks/useNavigation';

const ViewWidget = () => {
    const [widget, setWidget] = useState(null)
    const { loading, setLoading } = useLoading()
    const { goHome, query } = useNavigation()
    useEffect(() => {
        setLoading(true);
        setWidget(viewWidgets[query.widgetName])
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [setLoading, query.widgetName])
    return (
        <WidgetContainer>
            {loading ? (
                <>
                    {'Loading...'}
                </>
            ) :
                (
                    <>
                        {widget && widget}
                        {!widget && (
                            <div className="text-center select-none">
                                <p className="text-2xl font-bold m-2">
                                    Widget Not Found
                                </p>
                                <br />
                                {/* Link to go back */}
                                <button onClick={goHome}>
                                    Go Home
                                </button>
                            </div>
                        )}
                    </>

                )}
        </WidgetContainer>
    )

}

export default ViewWidget