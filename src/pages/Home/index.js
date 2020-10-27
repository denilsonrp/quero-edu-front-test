import React, { useEffect, useState, useCallback } from 'react'

import CardListScholarships from './../../components/ListScholarships/Card'
import FilterEnrollmentSemester from './../../components/FilterEnrollmentSemester'
import Footer from './../../components/Footer'
import Header from './../../components/Header'
import ListScholarships from './../../components/ListScholarships'
import Modal from './../../components/Modal'

import scholarshipService from '../../services/api/scholarship'

const Home = () => {
  const [cities, setCities] = useState([])
  const [courses, setCourses] = useState([])
  const [filters, setFilters] = useState(
    {
      city: '',
      course: '',
      kind_presencial: false,
      kind_ead: false,
      price: 0,
    }
  )
  const [modalVisibility, setModalVisibility] = useState(false)
  const [scholarships, setScholarships] = useState([])

  useEffect(() => {
    scholarshipService.getCities().then(response => {
      setCities(response)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  const handleFilters = useCallback(() => {
    scholarshipService.getScholarships({ filters }).then(response => {
      setScholarships(response)
    }).catch(err => {
      console.log(err)
    })
  }, [filters])

  useEffect(() => {
    handleFilters()
  }, [filters, handleFilters])

  /**
   * -
   *
   * @function loadCoursesByCity
   * @return -
   */
  const loadCoursesByCity = (e) => {
    const city = e.target.value

    scholarshipService.getCoursesByCity(city).then(response => {
      setCourses(response)
      setFilters(
        {
          ...filters,
          city,
          course: ''
        }
      )
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <Header />

      <div className="container">
        <h1 className="_margin-b-2x">Bolsas favoritas</h1>
        <p className="">Adicione os cursos e faculdades de seu interesse e receba atualizações com as melhores ofertas.</p>

        <FilterEnrollmentSemester />

        <ListScholarships>
          <CardListScholarships setModalVisibility={setModalVisibility} first />
          <CardListScholarships />
          <CardListScholarships />
          <CardListScholarships />
          <CardListScholarships />
        </ListScholarships>
      </div>

      <Footer />

      <Modal
        cities={cities}
        courses={courses}
        filters={filters}
        loadCoursesByCity={loadCoursesByCity}
        modalVisibility={modalVisibility}
        setFilters={setFilters}
        setModalVisibility={setModalVisibility}
        scholarships={scholarships}
      />
    </>
  )
}

export default Home
