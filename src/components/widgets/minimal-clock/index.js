import React from 'react'
import useWidgetContext from '@/Context/WidgetContext'
import useDatetime from '@/Functions/useDatetime'

const MinimalClock = () => {
  const { date, time } = useDatetime()
  const { properties } = useWidgetContext()
  const { timefont, datefont } = properties
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