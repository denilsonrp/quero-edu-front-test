import React from 'react'

import './styles.scss'

import PrimaryButton from './../../components/Buttons/Primary'
import SecondaryButton from './../../components/Buttons/Secondary'
import FlatlistScholarships from './../../components/FlatlistScholarships'
import CardFlatlistScholarships from './../../components/FlatlistScholarships/Card'

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="-bold _margin-b-1x">Adicionar bolsa</h2>
        <p>Filtre e adicione as bolsas de seu interesse.</p>

        <section className="form _margin-t-4x">
          <div className="row">
            <div>
              <label className="label">Selecione sua cidade</label>
              <select className="select">
                <option></option>
                <option>Teste</option>
              </select>
            </div>

            <div>
              <label className="label">Selecione o curso de sua preferência</label>
              <select className="select">
                <option></option>
                <option>Teste</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div>
              <label className="label">Como você quer estudar</label>
              <label className="custom-checkbox">
                Presencial
                  <input type="checkbox" name="kind-presencial" />
                <span></span>
              </label>

              <label className="custom-checkbox">
                A distância
                  <input type="checkbox" kind="kind-ead" />
                <span></span>
              </label>
            </div>

            <div>
              <label className="label">Até quanto pode pagar?</label>

            </div>
          </div>
        </section>

        <div className="_margin-t-4x _margin-b-1x _flex _space-between">
          <b>Resultado</b>
          <b className="_text-right">Ordernar por <span className="-secondary-blue">Nome da Faculdade</span></b>
        </div>

        <FlatlistScholarships>
          <CardFlatlistScholarships />
          <CardFlatlistScholarships />
          <CardFlatlistScholarships />
          <CardFlatlistScholarships />
        </FlatlistScholarships>

        <div className="_flex _justify-end _margin-t-2x">
          <PrimaryButton title="Cancelar" />
          <SecondaryButton title="Adicionar bolsa(s)" disabled />
        </div>
      </div>
    </div>
  )
}

export default Modal
