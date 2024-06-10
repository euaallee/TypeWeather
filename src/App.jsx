import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { useState } from 'react'

//https://console.hgbrasil.com/

export default function App() {
    const [city, setCity] = useState("")

    const handleChange = (event) => {
        setCity(event.target.value)
    }

    return (
        <>
            <Header />
            <Main City={city} change={handleChange} />
        </>
    )
}
