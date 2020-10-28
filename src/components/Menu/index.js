import React from 'react'

import './styles.scss'

import { FaAngleDown } from "react-icons/fa"

const Menu = () => {

  return (
    <div className="menu">
      <div className="container">
        <h3 className="section">Minha conta</h3>

        <label className="label-menu" htmlFor="chkMenu">
          Menu
          <FaAngleDown/>
        </label>

        <input type="checkbox" id="chkMenu" className="_hide" />

        <ul>
          <li>
            <a href="/">Pré-matrículas</a>
          </li>
          <li className="-active">
            <a href="/">Bolsas favoritas</a>
          </li>
        </ul>
      </div>
    </div>
  )

}

export default Menu
