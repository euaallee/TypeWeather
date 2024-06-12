import e from "express"
import axios from "axios"

const app = e()
const PORT = process.env.PORT || 5000

app.get('/api/countries', async (res, req) => {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all')
        const countries = response.data.map(country => ({
            name: country.name.common,
            code: country.cca2
        }))
        res.json(countries)
    } catch (error) {
        res.status(500).send('Error fetching')
    }
})

app.get('/api/states/:countryCode', async (req, res) => {
    const { countryCode } = req.params
    try {
        const response = await axios.get(`http://educacao.dadosabertosbr.org/api/cidades/${countryCode}`)
        const states = response.data
        console.log(states);
        console.log(res)
    } catch (error) {
        res.status(500).send('Error fetching states')
    }
})

app.get('/api/weather/', async (req, res) => {
    try {
        const response = await axios.get(`https://api.hgbrasil.com/weather/`)
        const climate = response.data
        console.log(climate)
    } catch (error) {
        res.status(500).send(`Error fetching climate`)
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
