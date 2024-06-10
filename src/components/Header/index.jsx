import React from 'react'
import * as C from './style'
import logo1 from '/images/Logo1.svg'

export default function Header() {
  return (
      <C.HeaderStyle>
        <img src={logo1} alt="logo" />
      </C.HeaderStyle>
  )
}
