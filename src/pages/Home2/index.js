import React, { useState, useEffect, useCallback } from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import apiScholarshipsService from '../../services/api/scholarship'

const Home = () => {
  const [initialState, setInitialState] = useState(
    {
      cities: [],
      scholarships: [],
    }
  )
  const [courses, setCourses] = useState([])
  const [filters, setFilters] = useState(
    {
      city: '',
      course: '',
      kind_presencial: false,
      kind_ead: false,
      price: 0,
      scholarships: []
    }
  )

  useEffect(() => {
    apiScholarshipsService.getScholarships().then(response => {
      console.log(response)

      let uniqueCities = []

      response.map(scholarship => {
        uniqueCities.push(scholarship.campus.city)
      })

      setInitialState({
        cities: [...new Set(uniqueCities)],
        scholarships: response,
      })
    }).catch(err => {
      console.log(err)
    })
  }, [])

  const handleFilter = useCallback(() => {
    let filteredScholarships = initialState.scholarships

    if (filters.city) filteredScholarships = filteredScholarships.filter(scholarship => scholarship.campus.city === filters.city)
    if (filters.course) filteredScholarships = filteredScholarships.filter(scholarship => scholarship.course.name === filters.course)
    if (!(filters.kind_presencial && filters.kind_ead)) {
      if (filters.kind_presencial) filteredScholarships = filteredScholarships.filter(scholarship => scholarship.course.kind === 'Presencial')
      if (filters.kind_ead) filteredScholarships = filteredScholarships.filter(scholarship => scholarship.course.kind === 'EaD')
    }
    if (filters.price) filteredScholarships = filteredScholarships.filter(scholarship => scholarship.full_price <= filters.price)

    console.log(filteredScholarships)
  }, [filters, initialState.scholarships])

  useEffect(() => {
    handleFilter()
  }, [filters, handleFilter])

  const loadCoursesByCity = (e) => {
    const city = e.target.value

    const scholarships = initialState.scholarships.filter(scholarship => scholarship.campus.city === city)

    let uniqueCourses = []

    scholarships.map(scholarship => {
      uniqueCourses.push(scholarship.course.name)
    })

    setCourses([...new Set(uniqueCourses)])

    setFilters({ ...filters, city: city })
  }

  return (
    <>
      <Header />

      <select onChange={loadCoursesByCity}>
        <option value=""></option>
        {initialState.cities.map((city, index) => {
          return <option key={index} value={city}>{city}</option>
        })}
      </select>

      <br />

      <select name="course" onChange={e => setFilters({ ...filters, course: e.target.value})}>
        <option value=""></option>
        {courses.map((course, index) => {
          return <option key={index} value={course}>{course}</option>
        })}
      </select>

      <br />

      <input type="checkbox" name="kind_presencial" onClick={e => setFilters({ ...filters, kind_presencial: e.target.checked})} />

      <input type="checkbox" name="kind_ead" onClick={e => setFilters({ ...filters, kind_ead: e.target.checked})} />

      <br />
      <input type="range" min="0" max="10000" value="0" name="range" onChange={e => setFilters({ ...filters, price: Number(e.target.value)})} />

      <Footer />
    </>
  )
}

export default Home
