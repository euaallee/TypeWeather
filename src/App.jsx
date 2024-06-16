import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Result from './components/Result'
import axios from 'axios'

export default function App() {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState([])
    const [disabled, setDisabled] = useState(false);

    const APIWeather = async () => {
        try {
            const response = await axios.get(`http://3.141.167.220:3000/weather/?city_name=${city}`)
            setWeather(response.data.results)
        } catch (error) {
            console.error("Error fetching weather data:", error)
        }
    }

    const handleChange = (event) => {
        setCity(event.target.value)
    }

    const handleClink = (event) => {
        APIWeather()
        setCity("")
        setWeather([])
    }

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            APIWeather()
            setDisabled(true)
            setCity("")
            setWeather([])
        }
    }

    return (
        <>
            <Header />
            <Main City={city} change={handleChange} enter={handleEnter} click={handleClink} disabled={disabled} />
            {Object.keys(weather).length > 0 && (
                <Result
                    city={weather.city}
                    description={weather.description}
                    currently={weather.currently}
                    conditionSlug={weather.condition_slug}
                    dayWeek={weather.forecast[0].weekday}
                    hours={weather.time}
                    temp={weather.temp}
                    date={weather.date}
                    humidity={weather.humidity}
                    rain={weather.rain}
                    windSpeedy={weather.wind_speedy}
                    forecast={weather.forecast}
                    City={city}
                    change={handleChange}
                    enter={handleEnter}
                    click={handleClink}
                />
            )}
        </>
    )
}
