import React from 'react'
import { FiArrowLeftCircle } from 'react-icons/fi'
import useNavigation from '@/Hooks/useNavigation'

const EditTopBar = ({ widget }) => {
    const { goHome } = useNavigation()
    return (
        // TopBar with widget name and back button aligned to the left using tailwind classes
        <div className="flex items-center w-full h-[8vh] px-4 py-2 shadow shadow-[#ffffff1f] z-50">
            <FiArrowLeftCircle onClick={goHome} className="text-2xl m-2 cursor-pointer" />
            <h1 className="text-2xl ml-3">{widget}</h1>
        </div>
    )
}

export default EditTopBar