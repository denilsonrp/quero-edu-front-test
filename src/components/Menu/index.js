import React from 'react'

import './styles.scss'

const Menu = () => {

  return (
    <div className="menu">
      <ul className="container">
        <li>
          <a href="/">Pré-matrículas</a>
        </li>
        <li className="-active">
          <a href="/">Bolsas favoritas</a>
        </li>
      </ul>
    </div>
  )

}

export default Menu
