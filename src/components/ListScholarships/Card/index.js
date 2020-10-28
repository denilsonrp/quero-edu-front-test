import React from 'react'

import DeleteButton from './../../../components/Buttons/Delete'
import SecondaryButton from './../../../components/Buttons/Secondary'

import { FaRegStar, FaStar } from 'react-icons/fa'
import { BsPlusCircle } from 'react-icons/bs'

import formatMoney from './../../../utils/formatMoney'

const CardScholarships = (
  {
    first,
    handleRemoveScholarship,
    index,
    scholarship,
    setModalVisibility,
  }
) => {

  return (
    <div className="card-scholarship">
      { first ? (
        <>
          <button className="_flex-1" onClick={setModalVisibility}>
            <BsPlusCircle color="#007A8D" size="64" />

            <h2 className="-bold -ft-size-1x _margin-b-1x _margin-t-4x">Adicionar curso</h2>
            <p>Clique para adicionar bolsas de cursos do seu interesse</p>
          </button>
        </>
      ) : (
        <>
          <div>
            <figure className="_margin-b-2x">
              <img src={scholarship.university.logo_url} alt={scholarship.university.name} />
            </figure>

            <h2 className="-uppercase -bold -ft-size-1x _margin-b-1x">{scholarship.university.name}</h2>
            <h3 className="-secondary-blue -bold -ft-size-1x _margin-b-2x">{scholarship.course.name}</h3>

            <div className="wrapper-score">
              <p className="score -bold _margin-r-1x">{scholarship.university.score}</p>
              {
                [...Array(5)].map((_, index) => {
                  const newIndex = index + 1

                  return newIndex < scholarship.university.score
                          ? <FaStar key={index} color="#DE9E1F" size="16" />
                          : <FaRegStar key={index} color="#DE9E1F" size="16" />
                })
              }
            </div>

            <hr />

            <h3 className="-uppercase -bold -ft-size-1x _margin-b-2x">{scholarship.course.kind} &bull; {scholarship.course.shift}</h3>
            <p className="">Início das aulas em: {scholarship.start_date}</p>

            <hr />

            {
              scholarship.enabled
              ? (
                <>
                  <h3 className="-bold -ft-size-1x _margin-b-2x">Mensalidade com o Quero Bolsa:</h3>
                  <p className="-line-through _margin-b-1x">{formatMoney(scholarship.full_price)}</p>
                  <p className="">
                    <b className="-secondary-green -ft-size-1_25x">{formatMoney(scholarship.price_with_discount)}</b> /mês
                  </p>
                </>
              )
              : (
                <>
                  <h3 className="-bold -ft-size-1x _margin-b-2x">Bolsa indisponível.</h3>
                  <p>Entre em contato com nosso atendimento para saber mais.</p>
                </>
              )
            }

          </div>

          <div className="_margin-t-2x">
            <DeleteButton
              handleRemoveScholarship={handleRemoveScholarship}
              index={index}
              title="Excluir"
            />
            <SecondaryButton title="Ver oferta" disabled={!scholarship.enabled} />
          </div>
        </>
      )}
    </div>
  )
}

export default CardScholarships
