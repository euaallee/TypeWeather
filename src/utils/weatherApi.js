import axios from "axios"

// https://console.hgbrasil.com/
// Site da Documentação da API

const key = "635d8a03"

const api = axios.create({
    baseURL: `https://api.hgbrasil.com/weather?key=${key}&` // + city_name=${NOME_CITY},${UF}
})

export default api
