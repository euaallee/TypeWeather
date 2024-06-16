import React from 'react'
import * as C from './style'
import Search from '../Search'

export default function Main({ City, change, enter }) {
    return (
        <C.Main>
            <C.TextWrapper>
                <C.H1>Boas vindas ao <C.Strong>TypeWeather</C.Strong></C.H1>
                <C.P>Escolha um local para ver a previsão do tempo</C.P>
            </C.TextWrapper>
            <C.GroupSearch>
                <C.InputWrapper>
                    <input
                        disabled={false}
                        type="text"
                        placeholder='Buscar local'
                        value={City}
                        onChange={change}
                        onKeyDownCapture={enter}
                    />
                </C.InputWrapper>
                {/* <C.NamesCities>
                    <Search
                        NameCity={"Petrolina, PE - Brasil"}
                    />
                    <Search
                        NameCity={"Belém do São Francisco, PE - Brasil"}
                    />
                    <Search
                        NameCity={"Morro de São Paulo, BA - Brasil"}
                    />
                </C.NamesCities> */}
            </C.GroupSearch>
        </C.Main>
    )
}
