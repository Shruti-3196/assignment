import React from 'react'


const Card = (props) => {
  return (
    <div className='card'>
      <img className='card__img' src={props.prod.img} alt="" />
      <div className='card__body'>
        <h3 className='card__title'>{props.prod.title}</h3>
        <button className='card__btn'>Sample</button>
      </div>    
    </div>
  )
}

export default Card;