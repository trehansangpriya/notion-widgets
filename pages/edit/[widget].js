import React, { useState, useEffect } from 'react'
import useNavigation from '@/Hooks/useNavigation'
import EditTopBar from '@/PageComponent/edit/TopBar'
import WidgetEditor from '@/PageComponent/edit/Editor'
import WidgetViewer from '@/PageComponent/edit/Viewer'
import { viewWidgets, editWidgets } from '@/Data/widgets';
import useLoading from '@/Hooks/useLoading'

const EditWidget = () => {
    const { query } = useNavigation()
    const { widgetName } = query
    const { setLoading } = useLoading()
    const [widget, setWidget] = useState(null)
    const [editOptions, setEditOptions] = useState(null)
    useEffect(() => {
        setLoading(true);
        setWidget(viewWidgets[widgetName])
        setEditOptions(editWidgets[widgetName])
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [setLoading, widgetName])
    return (
        <div className='w-full overflow-hidden'>
            <EditTopBar widget={widgetName} />
            <div className="flex w-full h-[90vh] items-center">
                <WidgetEditor editOptions={editOptions} />
                <WidgetViewer widget={widget} />
            </div>
        </div>
    )
}

export default EditWidget