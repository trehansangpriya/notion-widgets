import { FontSize, Theme } from '@/EditOptions/index'
import React from 'react'

const EditMinimalClock = () => {
    return (
        <div>
            <Theme />
            <FontSize title='Time Font' />
            <FontSize title='Date Font' />
        </div>
    )
}

export default EditMinimalClock