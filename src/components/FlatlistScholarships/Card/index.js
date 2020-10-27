import React from 'react'

const CardScholarships = ({ scholarship }) => {
  return (
    <div className="card-scholarship">
      <div className="_flex _align-center _flex-1">
        <label className="custom-checkbox">
          <input type="checkbox" name="" />
          <span></span>
        </label>

        <figure className="_margin-l-2x _margin-r-2x">
          <img src={scholarship.university.logo_url} alt={scholarship.university.name} />
        </figure>

        <div className="wrapper-course-price _flex-1">
          <div>
            <h2 className="-secondary-blue -bold -ft-size-1x _margin-b-1x">{scholarship.course.name}</h2>
            <h3 className="-ft-size-1x">{scholarship.course.level}</h3>
          </div>

          <div className="">
            <p>Bolsa de <b className="-secondary-green">{scholarship.discount_percentage}%</b></p>
            <p className="-secondary-green -bold">R$ {scholarship.price_with_discount} /mês</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardScholarships
