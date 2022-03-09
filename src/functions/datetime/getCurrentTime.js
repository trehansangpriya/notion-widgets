// get current time every second
const getCurrentTime = () => {
    const date = new Date()

    let time = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    })
    setInterval(() => {
        time = date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        })
    }, 1000)
    return {
        time
    }
}

export default getCurrentTime