import React from 'react'
import WidgetContainer from '@/SharedComponent/WidgetContainer';
import useLoading from '@/Hooks/useLoading';
import useNavigation from '@/Hooks/useNavigation';

const WidgetViewer = ({ widget }) => {
    const { loading } = useLoading()
    const { goHome } = useNavigation()
    return (
        <div className='w-2/3 h-full p-2'>
            <WidgetContainer >
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
        </div>
    )
}

export default WidgetViewer
// // convert properties (object) to query string (?theme=dark&color=red)
// const query = Object.entries(properties).reduce((acc, [key, value]) => {
//     return `${acc}&${key}=${value}`
// }, '?')
// useEffect(() => {

// }, [query])
// console.log(query)
            // {/* <iframe className='w-full h-full rounded' src={`http://localhost:3000/view/${widget}${query}`} /> */}