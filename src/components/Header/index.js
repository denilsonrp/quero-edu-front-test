import React from 'react'

import Logo from './../../assets/images/logo.png'

import Menu from './../Menu'

import './styles.scss'

import { FaInfoCircle, FaWhatsapp, FaRegUserCircle } from "react-icons/fa"

const Header = () => {

  return (
    <>
      <header className="header container">
        <div className="_flex _flex-1 _align-center">
          <div className="_flex _align-center orientation">
            <FaInfoCircle color="#007A8D" size="32" />

            <a href="/" className="_hide _show-xl _margin-l-1x">Como funciona</a>

            <a href="/" className="_hide-xl _margin-t-1x">Ajuda</a>
          </div>

          <div className="_flex _align-center _margin-l-2x _hide _show-xl">
            <FaWhatsapp color="#0FA866" size="32" />

            <div className="_margin-l-1x">
              <p className="_margin-b-1x">0800 123 2222</p>
              <p>Envie mensagem ou ligue</p>
            </div>
          </div>
        </div>

        <figure className="_flex _align-center _justify-center">
          <img src={Logo} alt="Logo Quero Bolsa" width="120" />
        </figure>

        <div className="_flex _flex-1 _align-center _justify-end">
          <div className="_flex _align-center orientation">
            <a href="/" className="_hide _show-xl _margin-r-1x">Nome Sobrenome</a>

            <FaRegUserCircle color="#007A8D" size="32" />

            <a href="/" className="_hide-xl _margin-t-1x">Conta</a>
          </div>
        </div>
      </header>

      <Menu />
    </>
  )

}

export default Header
