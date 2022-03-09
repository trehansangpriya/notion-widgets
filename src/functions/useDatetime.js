import { useState } from "react"

const useDatetime = () => {
    const [datetime, setDatetime] = useState(new Date())
    setInterval(() => {
        setDatetime(new Date())
    }, 1000)
    return {
        time: datetime.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }),
        date: datetime.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
        }),
    }
}

export default useDatetime