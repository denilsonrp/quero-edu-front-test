import React, { useEffect, useState, useCallback } from 'react'

import Breadcrumb from './../../components/Breadcrumb'
import CardListScholarships from './../../components/ListScholarships/Card'
import FilterEnrollmentSemester from './../../components/FilterEnrollmentSemester'
import Footer from './../../components/Footer'
import Header from './../../components/Header'
import ListScholarships from './../../components/ListScholarships'
import Modal from './../../components/Modal'

import scholarshipApiService from '../../services/api/scholarship'
import storageService from '../../services/storage'

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
  const [selectedScholarships, setSelectedScholarships] = useState([])
  const [savedScholarships, setSavedScholarships] = useState([])
  const [selectedSemester, setSelectedSemester] = useState(null)
  const [scholarships, setScholarships] = useState([])

  useEffect(() => {
    const initialSavedScholarships = JSON.parse(storageService.retrieve())
    if (initialSavedScholarships) setSavedScholarships(initialSavedScholarships)

    scholarshipApiService.getCities().then(response => {
      setCities(response)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  /**
   * Call the API service with the params to be used to filter scholarships
   *
   * @function handleFilters
   */
  const handleFilters = useCallback(() => {
    const { city, course, kind_presencial, kind_ead, price } = filters

    if (city || course || kind_presencial || kind_ead || price) {
      scholarshipApiService.getScholarships({ filters }).then(response => {
        setScholarships(response)
      }).catch(err => {
        console.log(err)
      })
    }
  }, [filters])

  useEffect(() => {
    handleFilters()
    setSelectedScholarships([])
  }, [filters, handleFilters])

  /**
   * Create a list of scholarships to be added in favorites scholarships list
   *
   * @function handleSelectScholarship
   */
  const handleSelectScholarship = useCallback((e) => {
    const index = e.target.getAttribute('data-index')
    const checked = e.target.checked
    const scholarship = scholarships[index]

    if (checked) setSelectedScholarships([...selectedScholarships, scholarship])
    else {
      const newSelectedScholarships = selectedScholarships.filter(selected => selected.id !== scholarship.id)
      setSelectedScholarships(newSelectedScholarships)
    }
  }, [scholarships, selectedScholarships])

  /**
   * Add an list of selected scholarships in list of favorites scholarships
   *
   * @function handleAddScholarships
   */
  const handleAddScholarships = useCallback(() => {
    const data = [...new Set([...savedScholarships, ...selectedScholarships])]

    storageService.store(data)
    setSavedScholarships(data)
    setSelectedScholarships([])
    setModalVisibility(false)
    setScholarships([])
  }, [savedScholarships, selectedScholarships])

  /**
   * Remove a selected scholarship from list of favorites scholarships
   *
   * @function handleRemoveScholarship
   */
  const handleRemoveScholarship = useCallback((e) => {
    const index = e.target.getAttribute('data-index')

    savedScholarships.splice(index, 1)

    storageService.store([...savedScholarships])
    setSavedScholarships([...savedScholarships])
    setSelectedSemester(null)
  }, [savedScholarships])

  /**
   * Load courses by a specific city
   *
   * @function loadCoursesByCity
   */
  const loadCoursesByCity = (e) => {
    const city = e.target.value

    scholarshipApiService.getCoursesByCity(city).then(response => {
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
        <Breadcrumb />

        <h1 className="_margin-b-2x">Bolsas favoritas</h1>
        <p className="_margin-b-4x">Adicione os cursos e faculdades de seu interesse e receba atualizações com as melhores ofertas.</p>

        {
        !!savedScholarships.length &&
          <FilterEnrollmentSemester
            selectedSemester={selectedSemester}
            setSelectedSemester={setSelectedSemester}
            scholarships={savedScholarships}
          />
        }

        <ListScholarships>
          <CardListScholarships
            first
            key={0}
            setModalVisibility={setModalVisibility}
          />

          {
            selectedSemester ? (
              savedScholarships.filter(savedScholarship => savedScholarship.enrollment_semester === selectedSemester)
                .map((scholarship, index) => {
                  return <CardListScholarships
                          handleRemoveScholarship={handleRemoveScholarship}
                          index={index}
                          key={scholarship.id}
                          scholarship={scholarship}
                        />
                  }
                )
            ) : (
              savedScholarships.map((scholarship, index) => {
                return <CardListScholarships
                        handleRemoveScholarship={handleRemoveScholarship}
                        index={index}
                        key={scholarship.id}
                        scholarship={scholarship}
                      />
                }
              )
            )
          }
        </ListScholarships>
      </div>

      <Footer />

      <Modal
        cities={cities}
        courses={courses}
        filters={filters}
        handleAddScholarships={handleAddScholarships}
        handleSelectScholarship={handleSelectScholarship}
        loadCoursesByCity={loadCoursesByCity}
        modalVisibility={modalVisibility}
        setFilters={setFilters}
        selectedScholarships={selectedScholarships}
        setModalVisibility={setModalVisibility}
        scholarships={scholarships}
      />
    </>
  )
}

export default Home
