import e from "express"
import axios from "axios"
import cors from "cors"

const app = e()
const PORT = process.env.PORT || 5000

app.use(cors())

app.get('/weather', async (req, res) => {
    const cityName = req.query.city_name

    if (!cityName) {
        return res.status(400).send('City name is required')
    }

    try {
        const response = await axios.get('https://api.hgbrasil.com/weather/', {
            params: {
                key: '65926e64',
                city_name: cityName
            }
        })
        const climate = response.data;
        res.json(climate);
    } catch (error) {
        res.status(500).send('Error fetching climate data')
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// import axios from "axios";

// const API = axios.create({
//     baseURL: 'https://api.hgbrasil.com/weather/'
// })

// export default API
