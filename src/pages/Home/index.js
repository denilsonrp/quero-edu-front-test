import React from 'react'

import Header from './../../components/Header'
import Footer from './../../components/Footer'
import PrimaryButton from './../../components/Buttons/Primary'
import SecondaryButton from './../../components/Buttons/Secondary'

import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { BsPlusCircle } from 'react-icons/bs'

const Home = () => {

  return (
    <>
      <Header />

      <div className="container">
        <h1 className="_margin-b-2x">Bolsas favoritas</h1>
        <p className="">Adicione os cursos e faculdades de seu interesse e receba atualizações com as melhores ofertas.</p>

        <ul className="filter-enrollment-semester">
          <li><button>Todos os semestres</button></li>
          <li><button>2º semestre de 2019</button></li>
          <li><button>1º semestre de 2020</button></li>
        </ul>

        <section className="list-scholarships">
          <div className="card-scholarship">
            <BsPlusCircle color="#007A8D" size="64" />

            <h2 className="-bold -ft-size-1x _margin-b-1x _margin-t-4x">Adicionar curso</h2>
            <p>Clique para adicionar bolsas de cursos do seu interesse</p>
          </div>

          <div className="card-scholarship">
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
                <b className="-green -ft-size-1_25x">R$ 453,63</b> /mês
              </p>
            </div>

            <div className="_margin-t-2x">
              <PrimaryButton title="Excluir" />
              <SecondaryButton title="Ver oferta" />
            </div>
          </div>

          <div className="card-scholarship">
            <div>
              <figure className="_margin-b-2x">
                <img src="https://www.tryimg.com/u/2019/04/16/estacio.png" alt="UNICSUL" />
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
                <b className="-green -ft-size-1_25x">R$ 453,63</b> /mês
              </p>
            </div>

            <div className="_margin-t-2x">
              <PrimaryButton title="Excluir" />
              <SecondaryButton title="Ver oferta" />
            </div>
          </div>

          <div className="card-scholarship">
            <div>
              <figure className="_margin-b-2x">
                <img src="https://www.tryimg.com/u/2019/04/16/anhanguera.png" alt="UNICSUL" />
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
                <b className="-green -ft-size-1_25x">R$ 453,63</b> /mês
              </p>
            </div>

            <div className="_margin-t-2x">
              <PrimaryButton title="Excluir" />
              <SecondaryButton title="Ver oferta" />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default Home
