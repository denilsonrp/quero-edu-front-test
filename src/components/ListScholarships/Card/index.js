import React from 'react'

import DeleteButton from './../../../components/Buttons/Delete'
import SecondaryButton from './../../../components/Buttons/Secondary'

import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { BsPlusCircle } from 'react-icons/bs'

const CardScholarships = ({ setModalVisibility, first }) => {

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
              <img src="https://www.tryimg.com/u/2019/04/16/unicsul.png" alt="UNICSUL" />
            </figure>

            <h2 className="-uppercase -bold -ft-size-1x _margin-b-1x">Anhanguera</h2>
            <h3 className="-secondary-blue -bold -ft-size-1x _margin-b-2x">Arquitetura e Urbanismo</h3>

            <div className="wrapper-score">
              <p className="score -bold _margin-r-1x">3.8</p>
              <FaStar color="#DE9E1F" size="16" />
              <FaStar color="#DE9E1F" size="16" />
              <FaStar color="#DE9E1F" size="16" />
              <FaStarHalfAlt color="#DE9E1F" size="16" />
              <FaRegStar color="#DE9E1F" size="16" />
            </div>

            <hr />

            <h3 className="-uppercase -bold -ft-size-1x _margin-b-2x">Presencial &bull; Noite</h3>
            <p className="">Início das aulas em: 05/07/2019</p>

            <hr />

            <h3 className="-bold -ft-size-1x _margin-b-2x">Mensalidade com o Quero Bolsa:</h3>
            <p className="-line-through _margin-b-1x">R$ 1.487,31</p>
            <p className="">
              <b className="-secondary-green -ft-size-1_25x">R$ 453,63</b> /mês
            </p>
          </div>

          <div className="_margin-t-2x">
            <DeleteButton title="Excluir" />
            <SecondaryButton title="Ver oferta" />
          </div>
        </>
      )}
    </div>
  )
}

export default CardScholarships
