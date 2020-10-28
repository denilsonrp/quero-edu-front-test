import React from 'react'

import './../styles.scss'
import './styles.scss'

const SecondaryButton = ({ onClickFn, title, ...rest }) => {

  return (
    <button className="btn -secondary" {...rest} onClick={onClickFn}>{ title }</button>
  )

}

export default SecondaryButton
