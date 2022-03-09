import React, { useState, useEffect } from 'react'
import useWidgetContext from '@/Context/WidgetContext'
import useNavigation from '@/Hooks/useNavigation'
import useTheme from '@/Hooks/useTheme'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const WidgetEditor = ({ editOptions }) => {
    const prod = 'https://trehans-widgets.vercel.app/'
    const dev = 'http://localhost:3000/'
    const enviroment = process.env.NODE_ENV === 'production' ? prod : dev
    const { properties } = useWidgetContext()
    const { query } = useNavigation()
    const { themeName } = useTheme()
    const [queryParams, setQueryParams] = useState('')
    const url = enviroment + query.widgetName + '?theme=' + themeName + '&' + queryParams
    const [copyURL, setCopyURL] = useState({
        text: 'Copy Embed URL',
        copied: false
    })
    useEffect(() => {
        // create query params for each property
        const params = Object.keys(properties).map(key => `${key}=${properties[key]}`)
        setQueryParams(params.join('&'))
    }, [properties])
    return (
        <div className='w-1/3 p-4'>
            {editOptions}
            <div>
                <input
                    className='w-full rounded p-2 mt-4'
                    type="text" value={url} disabled />
                <CopyToClipboard
                    text={url}
                    onCopy={() => {
                        setCopyURL({
                            text: 'Copied!',
                            copied: true
                        })
                        setTimeout(() => {
                            setCopyURL({
                                text: 'Copy Embed URL',
                                copied: false
                            })
                        }, 3000)
                    }}
                >
                    <p className='py-2 px-4 border-2 rounded w-fit mt-4 cursor-pointer transition-all hover:scale-105 active:scale-100 '>
                        {copyURL.text}
                    </p>
                </CopyToClipboard>
            </div>
        </div>
    )
}

export default WidgetEditor