import React, { useCallback } from 'react'

import './../styles.scss'
import './../styles.primary.scss'

const CancelButton = (
  {
    setModalVisibility,
    title
  }
) => {
  const closeModal = useCallback(() => {
    setModalVisibility(false)
  }, [setModalVisibility])

  return <button className="btn -primary" onClick={closeModal}>{ title }</button>
}

export default CancelButton
