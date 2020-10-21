import React from 'react'

import './styles.scss'

import { FaWhatsapp, FaComments, FaEnvelope, FaInfoCircle, FaHeart } from "react-icons/fa"

const Footer = () => {

  return (
    <footer className="footer">
      <section className="contacts">
        <div className="container">
          <div className="whatsapp">
            <FaWhatsapp color="#FFF" size="48px" />

            <div className="infos _margin-l-2x">
              <p className="_margin-b-1x">0800 123 2222</p>
              <p>Seg - Sex 8h - 22h</p>
            </div>
          </div>

          <div className="live-chat">
            <FaComments color="#FFF" size="48px" />

            <div className="infos">
              <p className="_hide _show-xl _margin-b-1x">Chat ao vivo</p>
              <p className="_hide _show-xl">Seg - Sex 8h - 22h</p>

              <p className="_hide-xl _margin-t-1x">Chat</p>
            </div>
          </div>

          <div className="e-mail">
            <FaEnvelope color="#FFF" size="48px" />

            <div className="infos">
              <p className="_hide _show-xl _margin-b-1x">Mande um e-mail</p>
              <p className="_hide _show-xl">Respondemos rapidinho</p>

              <p className="_hide-xl _margin-t-1x">E-mail</p>
            </div>
          </div>

          <div className="help-center">
            <FaInfoCircle color="#FFF" size="48px" />

            <div className="infos">
              <p className="_hide _show-xl _margin-b-1x">Central de ajuda</p>
              <p className="_hide _show-xl">Encontre todas as respostas</p>

              <p className="_hide-xl _margin-t-1x">Ajuda</p>
            </div>
          </div>
        </div>
      </section>

      <section className="copyright">
        <p>Feito com <FaHeart /> pelo <a href="https://denilsonraimundo.github.io">Denilson</a></p>
      </section>
    </footer>
  )

}

export default Footer
