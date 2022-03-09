import React from 'react'
import getCurrentTime from '@/Functions/datetime/getCurrentTime'
import getCurrentDate from '@/Functions/datetime/getCurrentDate'
import useWidgetContext from '@/Context/WidgetContext'

const MinimalClock = () => {
  const { time } = getCurrentTime()
  const { date } = getCurrentDate()
  const { properties } = useWidgetContext()
  const { timefont, datefont } = properties
  console.log(timefont)
  console.log(datefont)
  return (
    <div id="clock">
      <div className={[
        `text-center select-none pointer-events-none`,
        !timefont && 'text-content4xl',
        `font-bold m-2 `
      ].join(' ')} id="time"
        style={
          {
            fontSize: timefont && timefont,
          }
        }
      >
        {time}
      </div>
      <div
        className={[
          `text-center select-none pointer-events-none`,
          !datefont && 'text-content',
        ].join(' ')}
        style={{
          fontSize: datefont && datefont,
        }}
        id="date">
        {date}
      </div>
    </div>
  )
}

export default MinimalClock