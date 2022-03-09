import React, { useState } from 'react';
import useTheme from '@/Hooks/useTheme';
import useWidgetContext from '@/Context/WidgetContext';

export const Theme = () => {
    const { theme, setTheme, light, dark } = useTheme()
    return (
        <div className='flex flex-col w-full my-4'>
            <h2 className='text-headings font-heading mb-4'>
                Edit Theme
            </h2>
            <div className="flex gap-2">
                <button className={[
                    'w-full rounded border-2 py-2 px-4',
                    theme === light && 'bg-gray-100 text-gray-800',
                ].join(' ')} onClick={() => setTheme(light)}>Light</button>
                <button className={[
                    'w-full rounded border-2 py-2 px-4',
                    theme === dark && 'bg-gray-100 text-gray-800',
                ].join(' ')} onClick={() => setTheme(dark)}>Dark</button>
            </div>
        </div>
    )
}

export const FontSize = ({ title }) => {
    const [fontSize, setFontSize] = useState(16)
    const { properties, setProperties } = useWidgetContext()
    const property = title.toLowerCase().replace(' ', '')
    const handleChange = (e) => {
        setFontSize(e.target.value)
        setProperties({ ...properties, [property]: `${e.target.value}px` })
        console.log(properties)
    }
    return (
        <div className='flex flex-col w-full my-4'>
            <h2 className='text-headings font-heading mb-4'>
                Edit {title}
            </h2>
            <input
                type='range'
                min='16'
                max='64'
                value={fontSize}
                onChange={handleChange}
            />
        </div>

    )
}