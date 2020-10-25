import React from 'react'

import Logo from './../../assets/images/logo.png'

import './styles.scss'

import { FaInfoCircle, FaWhatsapp, FaRegUserCircle } from "react-icons/fa"

const Header = () => {

  return (
    <header className="header container">
      <div className="_flex _flex-1">
        <div className="_flex _align-center">
          <FaInfoCircle color="#007A8D" size="32" />

          <a href="/" className="_margin-l-1x">Como funciona</a>
        </div>

        <div className="_flex _align-center _margin-l-2x">
          <FaWhatsapp color="#0FA866" size="32" />

          <div className="_margin-l-1x">
            <p className="_margin-b-1x">0800 123 2222</p>
            <p>Envie mensagem ou ligue</p>
          </div>
        </div>
      </div>

      <figure className="_flex _align-center">
        <img src={Logo} alt="Logo Quero Bolsa" width="120" />
      </figure>

      <div className="_flex _flex-1 _align-center _justify-end">
        <a href="/" className="_margin-r-1x">Nome Sobrenome</a>

        <FaRegUserCircle color="#007A8D" size="32" />
      </div>
    </header>
  )

}

export default Header
