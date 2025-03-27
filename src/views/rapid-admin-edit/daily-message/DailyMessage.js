// src/components/MyCalendar.jsx
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const DailyMessage = () => {
  const [date, setDate] = useState(new Date())

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', textAlign: 'center' }}>
      <h3>Select a date</h3>
      <Calendar onChange={setDate} value={date} />
      <p style={{ marginTop: '1rem' }}>
        <strong>Selected Date:</strong> {date.toDateString()}
      </p>
    </div>
  )
}

export default DailyMessage
