import React from 'react'

import './../styles.scss'
import './../styles.primary.scss'

const DeleteButton = (
  {
    title
  }
) => {
  return <button className="btn -primary" onClick={() => alert('')}>{ title }</button>
}

export default DeleteButton
