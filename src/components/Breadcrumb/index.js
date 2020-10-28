import React from 'react'

import './styles.scss'

const Breadcrumb = () => {

  return (
    <ul className="breadcrumb">
      <li><a href="/">Home</a></li>
      <li>/</li>
      <li><a href="/">Minha conta</a></li>
      <li>/</li>
      <li>Bolsas favoritas</li>
    </ul>
  )

}

export default Breadcrumb
