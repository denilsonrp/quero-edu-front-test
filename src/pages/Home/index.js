import React from 'react'

import CardListScholarships from './../../components/ListScholarships/Card'
import FilterEnrollmentSemester from './../../components/FilterEnrollmentSemester'
import Footer from './../../components/Footer'
import Header from './../../components/Header'
import ListScholarships from './../../components/ListScholarships'
import Modal from './../../components/Modal'

const Home = () => {

  return (
    <>
      <Header />

      <div className="container">
        <h1 className="_margin-b-2x">Bolsas favoritas</h1>
        <p className="">Adicione os cursos e faculdades de seu interesse e receba atualizações com as melhores ofertas.</p>

        <FilterEnrollmentSemester />

        <ListScholarships>
          <CardListScholarships first />
          <CardListScholarships />
          <CardListScholarships />
          <CardListScholarships />
          <CardListScholarships />
        </ListScholarships>
      </div>

      <Footer />

      {/* <Modal /> */}
    </>
  )
}

export default Home
