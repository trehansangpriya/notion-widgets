// get current date
const getCurrentDate = () => {
    const now = new Date()
    const date = now.toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    })
    return {
        date
    }
}
export default getCurrentDate