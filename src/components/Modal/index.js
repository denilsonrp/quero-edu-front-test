import React, { useState, useCallback } from 'react'

import './styles.scss'

import CancelButton from './../../components/Buttons/Cancel'
import SecondaryButton from './../../components/Buttons/Secondary'
import FlatlistScholarships from './../../components/FlatlistScholarships'
import CardFlatlistScholarships from './../../components/FlatlistScholarships/Card'

import { CgClose } from "react-icons/cg"

const Modal = (
  {
    cities,
    courses,
    filters,
    handleAddScholarships,
    handleSelectScholarship,
    loadCoursesByCity,
    modalVisibility,
    setFilters,
    selectedScholarships,
    setModalVisibility,
    scholarships
  }
) => {
  const [priceRange, setPriceRange] = useState(0)

  const closeModal = useCallback(() => {
    setModalVisibility(false)
  }, [setModalVisibility])

  const onChangeSlider = (e) => {
    setPriceRange(e.target.value)

    setFilters({
      ...filters,
      price: Number(e.target.value)
    })
  }

  return (
    <div className={`modal ${modalVisibility ? "-visible" : ""}`}>
      <div className="close">
        <CgClose size={36} color="#FFF" onClick={closeModal} />
      </div>


      <div className="modal-content">
        <h2 className="-bold _margin-b-1x">Adicionar bolsa</h2>
        <p>Filtre e adicione as bolsas de seu interesse.</p>

        <section className="form _margin-t-4x">
          <div className="row">
            <div>
              <label className="label">Selecione sua cidade</label>
              <select className="select" onChange={loadCoursesByCity}>
                <option></option>
                {cities.map(city => {
                  return <option key={city} value={city}>{city}</option>
                })}
              </select>
            </div>

            <div>
              <label className="label">Selecione o curso de sua preferência</label>
              <select className="select" onChange={e => setFilters({ ...filters, course: e.target.value})}>
                <option></option>
                {courses.map(course => {
                  return <option key={course} value={course}>{course}</option>
                })}
              </select>
            </div>
          </div>
          <div className="row">
            <div>
              <label className="label">Como você quer estudar</label>
              <label className="custom-checkbox">
                Presencial
                <input type="checkbox" name="kind-presencial" onClick={e => setFilters({ ...filters, kind_presencial: e.target.checked})} />
                <span></span>
              </label>

              <label className="custom-checkbox">
                A distância
                <input type="checkbox" kind="kind-ead" onClick={e => setFilters({ ...filters, kind_ead: e.target.checked})} />
                <span></span>
              </label>
            </div>

            <div>
              <label className="label">Até quanto pode pagar?</label>
              <p className="_margin-b-1x">R$ {priceRange}</p>
              <input type="range" min="0" max="3000" step="50" value={priceRange} className="custom-range-input" onChange={onChangeSlider} />
            </div>
          </div>
        </section>

        <div className="_margin-t-4x _margin-b-1x _flex _space-between">
          <b>Resultados</b>
          <b className="_text-right">Ordernar por <span className="-secondary-blue">Nome da Faculdade</span></b>
        </div>

        <FlatlistScholarships>
          {scholarships.length ? (
            scholarships.map((scholarship, index) => {
              return (
                <CardFlatlistScholarships
                  handleSelectScholarship={handleSelectScholarship}
                  index={index}
                  key={scholarship.id}
                  scholarship={scholarship}
                />
              )
            })
          ) : (
            <p className="_text-center _margin-t-4x">Nenhuma bolsa encontrada :(<br />Refaça sua busca com novos filtros</p>
          )}
        </FlatlistScholarships>

        <div className="_flex _justify-end _margin-t-2x">
          <CancelButton title="Cancelar" setModalVisibility={setModalVisibility} />
          <SecondaryButton
            title="Adicionar bolsa(s)"
            onClickFn={handleAddScholarships}
            disabled={!selectedScholarships.length}
          />
        </div>
      </div>
    </div>
  )
}

export default Modal
