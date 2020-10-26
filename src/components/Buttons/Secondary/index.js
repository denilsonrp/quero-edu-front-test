import React from 'react'

import './../styles.scss'
import './styles.scss'

const SecondaryButton = ({ title, ...rest }) => {

  return (
    <button className="btn -secondary" {...rest}>{ title }</button>
  )

}

export default SecondaryButton
