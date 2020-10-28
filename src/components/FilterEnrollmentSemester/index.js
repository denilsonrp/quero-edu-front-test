import React from 'react'

import './styles.scss'

const FilterEnrollmentSemester = () => {
  return (
    <div className="filter-enrollment-semester">
      <ul className="">
        <li className="-active"><button>Todos os semestres</button></li>
        <li><button>2º semestre de 2019</button></li>
        <li><button>1º semestre de 2020</button></li>
      </ul>
    </div>
  )
}

export default FilterEnrollmentSemester
