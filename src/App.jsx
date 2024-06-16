import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Result from './components/Result'
import axios from 'axios'

export default function App() {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState([])

    const APIWeather = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/weather/?city_name=${city}`)
            setWeather(response.data.results)
        } catch (error) {
            console.error("Error fetching weather data:", error)
        }
    }

    const handleChange = (event) => {
        setCity(event.target.value)
    }

    const handleEnter = (event) => {
        setWeather([])
        if (event.key === 'Enter') {
            APIWeather()
        }
    }

    return (
        <>
            <Header />
            <Main City={city} change={handleChange} enter={handleEnter} />
            {Object.keys(weather).length > 0 && (
                <Result
                    city={weather.city}
                    description={weather.description}
                    currently={weather.currently}
                    conditionSlug={weather.condition_slug}
                    dayWeek={"Sábado"}
                    hours={weather.time}
                    temp={weather.temp}
                    date={weather.date}
                    humidity={weather.humidity}
                    rain={weather.rain}
                    windSpeedy={weather.wind_speedy}
                    forecast={weather.forecast}
                />
            )}
        </>
    )
}
