import React from 'react'
import * as C from './style'
import AutocompleteComponent from '../Autocomplete'

export default function Main({ City, change }) {
    return (
        <C.Main>
            <C.TextWrapper>
                <C.H1>Boas vindas ao <C.Strong>TypeWeather</C.Strong></C.H1>
                <C.P>Escolha um local para ver a previsão do tempo</C.P>
            </C.TextWrapper>
            <C.InputWrapper>
                <input type="text" placeholder='Buscar local' value={City} onChange={change} />
            </C.InputWrapper>
            <AutocompleteComponent />
        </C.Main>
    )
}
