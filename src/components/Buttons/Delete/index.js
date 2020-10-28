import React from 'react'

import './../styles.scss'
import './../styles.primary.scss'

const DeleteButton = (
  {
    handleRemoveScholarship,
    index,
    title
  }
) => {
  return <button className="btn -primary" onClick={handleRemoveScholarship} data-index={index}>{ title }</button>
}

export default DeleteButton
