import React from 'react'

const CardScholarships = () => {
  return (
    <div className="card-scholarship">
      <div className="_flex _align-center _flex-1">
        <label className="custom-checkbox">
          <input type="checkbox" name="" />
          <span></span>
        </label>

        <figure className="_margin-l-2x _margin-r-2x">
          <img src="https://www.tryimg.com/u/2019/04/16/unicsul.png" alt="UNICSUL" />
        </figure>

        <div className="wrapper-course-price _flex-1">
          <div>
            <h2 className="-secondary-blue -bold -ft-size-1x _margin-b-1x">Administração</h2>
            <h3 className="-ft-size-1x">Bacharelado</h3>
          </div>

          <div className="">
            <p>Bolsa de <b className="-secondary-green">50%</b></p>
            <p className="-secondary-green -bold">R$ 453,63 /mês</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardScholarships
