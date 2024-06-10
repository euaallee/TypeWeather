import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Autocomplete } from '@mui/material'

export default function AutocompleteComponent(props) {
    const [countries, setCountries] = useState([])
    const [states, setStates] = useState([])
    const [selectedCountry, setSelectedCountry] = useState('')
    const [selectedState, setSelectedState] = useState('')

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('/api/countries')
                setCountries(response.data)
            } catch (error) {
                console.error('Error fetching countries:', error)
            }
        };

        fetchCountries()
    }, [])

    const handleCountrySelect = async (value) => {
        setSelectedCountry(value)
        try {
            const response = await axios.get(`/api/states/${value}`)
            setStates(response.data)
        } catch (error) {
            console.error('Error fetching states:', error)
        }
    }

    return (
        <div>
            <h2>Select Country and State</h2>
            <Autocomplete
                getItemValue={(item) => item.name}
                items={countries}
                renderItem={(item, isHighlighted) =>
                    <div key={item.code} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                        {item.name}
                    </div>
                }
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                onSelect={(value) => handleCountrySelect(value)}
            />
            {selectedCountry && (
                <Autocomplete
                    getItemValue={(item) => item.name}
                    items={states}
                    renderItem={(item, isHighlighted) =>
                        <div key={item.code} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                            {item.name}
                        </div>
                    }
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    onSelect={(value) => setSelectedState(value)}
                />
            )}
        </div>
    )
}
