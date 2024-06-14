import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
// import API from './utils/server'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function App() {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState(null)

    const APIWeather = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/weather/?city_name=${city}`)
            setWeather(response.data.results)
        } catch (error) {
            console.error("Error fetching weather data:", error)
        }

        // API.get('?key=65926e64&city_name=${city}')
        // .then((res) => {
        //     const data = res.data
        //     setWeather(data)
        // })
        // .catch((error) => {
        //     console.error(error)
        // })
    }

    const handleChange = (event) => {
        setCity(event.target.value)
    }

    const handleEnter = (event) => {
        console.log(event.keyCode)
        if (event.keyCode == 13) {
            APIWeather()
        }
    }
    console.log(weather)
    return (
        <>
            <Header />
            <Main City={city} change={handleChange} enter={handleEnter} />
        </>
    )
}
