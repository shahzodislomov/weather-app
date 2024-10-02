import React, { useState } from 'react'
import WeatherDescription from './components/WeatherDescription'
import Serch from './components/Serch'

function App() {
  const [value, setValue] = useState('')
  const handleSearch = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Serch handleSearch={handleSearch } value={value} setVaue={setValue}/>
      <WeatherDescription value={value}/>
    </>
  )
}

export default App
