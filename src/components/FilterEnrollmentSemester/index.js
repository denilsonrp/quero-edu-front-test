import React, { useEffect, useState, useCallback } from 'react'

import './styles.scss'

const FilterEnrollmentSemester = (
  {
    selectedSemester,
    setSelectedSemester,
    scholarships
  }
) => {
  const [semesters, setSemesters] = useState([])

  useEffect(() => {
    const uniqueSemesters = [...new Set(scholarships.map(scholarship => scholarship.enrollment_semester))]
    setSemesters(uniqueSemesters)
  }, [scholarships])

  const selectSemester = useCallback((e) => {
    const semester = e.target.getAttribute('data-semester')
    setSelectedSemester(semester)
  }, [setSelectedSemester])

  return (
    <div className="filter-enrollment-semester">
      <ul className="">
        <li className={!selectedSemester ? '-active' : ''}>
          <button onClick={selectSemester} data-semester="">Todos os semestres</button>
        </li>
        {
          semesters.map(semester => {
            return (
              <li key={semester} className={selectedSemester === semester ? '-active' : ''}>
                <button onClick={selectSemester} data-semester={semester}>{semester}</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default FilterEnrollmentSemester
